const clientId = 'ed3ad78238e74a08a597d93c074d69dd'; 
const redirectUri = 'http://localhost:3000/';
let accessToken;
let tokenExpirationTime;

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    // Check if token and expiration are in the URL
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);
      tokenExpirationTime = Date.now() + expiresIn * 1000;

      // Set a timer to clear the token after expiration
      window.setTimeout(() => {
        accessToken = '';
        tokenExpirationTime = null;
      }, expiresIn * 1000);

      // Clean up the URL (removes access_token & expires_in from the address bar)
      window.history.pushState('Access Token', null, '/');

      return accessToken;
    } else {
      // If no token, redirect user to Spotify login
      const scope = 'playlist-modify-public playlist-modify-private';
      const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=${encodeURIComponent(
        scope
      )}&redirect_uri=${encodeURIComponent(redirectUri)}`;

      window.location = authUrl;
    }
  },
  search(term) {
    const accessToken = this.getAccessToken();
    const endpoint = `https://api.spotify.com/v1/search?type=track&q=${encodeURIComponent(term)}`;

    return fetch(endpoint, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
      .then(response => {
        if (!response.ok) throw new Error('Spotify search failed');
        return response.json();
      })
      .then(jsonResponse => {
        if (!jsonResponse.tracks) return [];
        return jsonResponse.tracks.items.map(track => ({
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri
        }));
      });
  }

};

export default Spotify;

/*  Optional: check if token is expired
  isTokenExpired() {
    return !accessToken || Date.now() > tokenExpirationTime;
  } */