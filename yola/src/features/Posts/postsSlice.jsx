import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (subreddit = 'popular', thunkAPI) => {
    const response = await fetch(`https://www.reddit.com/r/${subreddit}.json?limit=25`);
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    const data = await response.json();

    // Extract relevant data, including images if available
    return data.data.children.map(child => {
      const post = child.data;
      return {
        id: post.id,
        title: post.title,
        author: post.author,
        url: post.url,
        thumbnail: (post.preview?.images?.[0]?.source?.url || post.thumbnail) || null,
        permalink: post.permalink,
        hasImage: !!post.preview,
        // add other fields you need
      };
    });
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    status: 'idle',
    error: null,
    activeSubreddit: 'popular', // default subreddit
  },
  reducers: {
    setActiveSubreddit(state, action) {
      state.activeSubreddit = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setActiveSubreddit } = postsSlice.actions;

export default postsSlice.reducer;