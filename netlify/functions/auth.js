/* Decap CMS GitHub OAuth — step 1: redirect the user to GitHub to authorize.
   The client secret is NOT used here, only the public Client ID. */
exports.handler = async (event) => {
  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;
  if (!clientId) {
    return { statusCode: 500, body: 'Missing OAUTH_GITHUB_CLIENT_ID env var on Netlify.' };
  }
  const proto = event.headers['x-forwarded-proto'] || 'https';
  const host = event.headers.host;
  const redirectUri = `${proto}://${host}/.netlify/functions/callback`;
  // state is informational here (single trusted user); CSRF surface is minimal.
  const state = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
  const url =
    'https://github.com/login/oauth/authorize' +
    `?client_id=${encodeURIComponent(clientId)}` +
    `&redirect_uri=${encodeURIComponent(redirectUri)}` +
    `&scope=${encodeURIComponent('repo')}` +
    `&state=${encodeURIComponent(state)}`;
  return { statusCode: 302, headers: { Location: url }, body: '' };
};
