export async function onRequestPost(context) {
  const body = await context.request.text();
  const res = await fetch('https://emailscan.in/api/non/check-products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json, text/plain, */*',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36',
      'Referer': 'https://emailscan.in/',
      'Origin': 'https://emailscan.in',
    },
    body: body,
  });
  const data = await res.text();
  return new Response(data, {
    status: res.status,
    headers: {
      'Content-Type': res.headers.get('content-type') || 'application/json',
      'Access-Control-Allow-Origin': '*',
      'X-Upstream-Status': String(res.status),
    },
  });
}

export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
