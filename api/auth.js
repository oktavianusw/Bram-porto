/* Decap CMS GitHub OAuth (Vercel) — step 1: redirect to GitHub to authorize.
   Only the public Client ID is used here. */
module.exports = (req, res) => {
  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;
  if (!clientId) {
    res.statusCode = 500;
    res.end('Missing OAUTH_GITHUB_CLIENT_ID env var on Vercel.');
    return;
  }
  const proto = req.headers['x-forwarded-proto'] || 'https';
  const host = req.headers.host;
  const redirectUri = `${proto}://${host}/api/callback`;
  const state = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
  const url =
    'https://github.com/login/oauth/authorize' +
    `?client_id=${encodeURIComponent(clientId)}` +
    `&redirect_uri=${encodeURIComponent(redirectUri)}` +
    `&scope=${encodeURIComponent('repo')}` +
    `&state=${encodeURIComponent(state)}`;
  res.statusCode = 302;
  res.setHeader('Location', url);
  res.end();
};
