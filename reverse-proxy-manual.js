addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)

  // Ubah URL tujuan proxy (harus public dan menerima permintaan dari Cloudflare)
  const targetHost = 'http://[2001:db8::1]'  // Ganti dengan alamat IPv6 target-mu
  const targetUrl = new URL(targetHost + url.pathname + url.search)

  const proxyRequest = new Request(targetUrl.toString(), {
    method: request.method,
    headers: request.headers,
    body: request.body,
    redirect: 'follow'
  })

  return fetch(proxyRequest)
}
