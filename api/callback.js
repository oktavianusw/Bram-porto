/* Decap CMS GitHub OAuth (Vercel) — step 2: exchange the code for a token
   (server-side, using the secret) and hand it back to the CMS popup.
   The client SECRET only lives here (Vercel env var), never in the browser. */
module.exports = async (req, res) => {
  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;
  const clientSecret = process.env.OAUTH_GITHUB_CLIENT_SECRET;
  const code = req.query && req.query.code;

  if (!clientId || !clientSecret) {
    res.statusCode = 500;
    res.end('Missing OAuth env vars on Vercel.');
    return;
  }
  if (!code) {
    res.statusCode = 400;
    res.end('Missing ?code from GitHub.');
    return;
  }

  let status = 'error';
  let content = { error: 'unknown' };
  try {
    const r = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code }),
    });
    const data = await r.json();
    if (data.access_token) {
      status = 'success';
      content = { token: data.access_token, provider: 'github' };
    } else {
      content = { error: data.error_description || data.error || 'no access_token' };
    }
  } catch (e) {
    content = { error: String(e && e.message ? e.message : e) };
  }

  const body = `<!doctype html><html><head><meta charset="utf-8"></head><body>
<script>
(function () {
  function receive(e) {
    window.opener && window.opener.postMessage(
      'authorization:github:${status}:${JSON.stringify(content)}', e.origin);
    window.removeEventListener('message', receive, false);
  }
  window.addEventListener('message', receive, false);
  window.opener && window.opener.postMessage('authorizing:github', '*');
})();
</script>
<p>Completing sign-in… you can close this window.</p>
</body></html>`;

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end(body);
};
