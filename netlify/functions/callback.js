/* Decap CMS GitHub OAuth — step 2: exchange the code for a token (server-side,
   using the secret) and hand it back to the CMS popup via postMessage.
   The client SECRET only ever lives here (Netlify env var), never in the browser. */
exports.handler = async (event) => {
  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;
  const clientSecret = process.env.OAUTH_GITHUB_CLIENT_SECRET;
  const code = (event.queryStringParameters || {}).code;

  if (!clientId || !clientSecret) {
    return { statusCode: 500, body: 'Missing OAuth env vars on Netlify.' };
  }
  if (!code) {
    return { statusCode: 400, body: 'Missing ?code from GitHub.' };
  }

  let status = 'error';
  let content = { error: 'unknown' };
  try {
    const res = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code }),
    });
    const data = await res.json();
    if (data.access_token) {
      status = 'success';
      content = { token: data.access_token, provider: 'github' };
    } else {
      content = { error: data.error_description || data.error || 'no access_token' };
    }
  } catch (e) {
    content = { error: String(e && e.message ? e.message : e) };
  }

  // Hand the result back to the CMS window that opened this popup.
  const body = `<!doctype html><html><head><meta charset="utf-8"></head><body>
<script>
(function () {
  function receive(e) {
    window.opener && window.opener.postMessage(
      'authorization:github:${status}:${JSON.stringify(content)}', e.origin);
    window.removeEventListener('message', receive, false);
  }
  window.addEventListener('message', receive, false);
  // Tell the opener (the CMS) we're ready; it replies, then we send the result above.
  window.opener && window.opener.postMessage('authorizing:github', '*');
})();
</script>
<p>Completing sign-in… you can close this window.</p>
</body></html>`;

  return { statusCode: 200, headers: { 'Content-Type': 'text/html; charset=utf-8' }, body };
};
