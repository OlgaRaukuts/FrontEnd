const clientId = 'ed3ad78238e74a08a597d93c074d69dd'; 
const redirectUri = 'http://127.0.0.1:3000/callback';
const authEndpoint = 'https://accounts.spotify.com/authorize';
const tokenEndpoint = 'https://accounts.spotify.com/api/token';

let accessToken;

// Generate a random code verifier
function generateCodeVerifier(length = 128) {
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~';
  let verifier = '';
  for (let i = 0; i < length; i++) {
    verifier += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return verifier;
}

// Generate a code challenge from the code verifier
async function generateCodeChallenge(codeVerifier) {
  const encoder = new TextEncoder();
  const data = encoder.encode(codeVerifier);
  const digest = await window.crypto.subtle.digest('SHA-256', data);
  return btoa(String.fromCharCode(...new Uint8Array(digest)))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

// Start login (used on error too)
async function startLoginFlow() {
  const codeVerifier = generateCodeVerifier();
  const codeChallenge = await generateCodeChallenge(codeVerifier);
  localStorage.setItem('code_verifier', codeVerifier);

  const scope = 'playlist-modify-public playlist-modify-private';
  const authUrl = `${authEndpoint}?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scope}&code_challenge_method=S256&code_challenge=${codeChallenge}`;

  window.location.href = authUrl;
}

const Spotify = {
  async getAccessToken() {
    if (accessToken) return accessToken;

    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (!code) {
      await startLoginFlow();
      return; // Stop execution here
    }

    const codeVerifier = localStorage.getItem('code_verifier');
    if (!codeVerifier) {
      console.error('Missing code_verifier, restarting login flow...');
      await startLoginFlow();
      return;
    }

    // Exchange code for token
    try {
      const body = new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri: redirectUri,
        client_id: clientId,
        code_verifier: codeVerifier,
      });

      const response = await fetch(tokenEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Token exchange error:', errorText);

        if (errorText.includes('invalid_grant')) {
          localStorage.removeItem('code_verifier');
          await startLoginFlow();
          return;
        }

        throw new Error('Token exchange failed');
      }

      const data = await response.json();
      accessToken = data.access_token;

      // Clean up URL
      window.history.replaceState({}, document.title, '/');

      return accessToken;
    } catch (err) {
      console.error('Token exchange error:', err);
      throw err;
    }
  },

  async search(query) {
    const token = await Spotify.getAccessToken();
    if (!token) return [];

    const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${encodeURIComponent(query)}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) {
      console.error('Search failed:', await response.text());
      return [];
    }

    const jsonResponse = await response.json();
    if (!jsonResponse.tracks) return [];

    return jsonResponse.tracks.items.map(track => ({
      id: track.id,
      name: track.name,
      artist: track.artists[0].name,
      album: track.album.name,
      uri: track.uri,
    }));
  },

  async savePlaylist(name, trackUris) {
    if (!name || !trackUris.length) return;

    const token = await Spotify.getAccessToken();
    if (!token) return;

    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    };

    const userResponse = await fetch('https://api.spotify.com/v1/me', { headers });
    const userData = await userResponse.json();
    const userId = userData.id;

    const createResponse = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ name }),
    });
    const playlist = await createResponse.json();

    await fetch(`https://api.spotify.com/v1/playlists/${playlist.id}/tracks`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ uris: trackUris }),
    });
  },
};

export default Spotify;