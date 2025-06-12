export default {
  async fetch(request, env, ctx) {
    if (request.headers.get("upgrade") === "websocket") {
      const pair = new WebSocketPair();
      const [client, server] = Object.values(pair);
      server.accept();
      server.addEventListener("message", (event) => {
        server.send(`Echo: ${event.data}`);
      });

      return new Response(null, {
        status: 101,
        webSocket: client,
      });
    }
    const url = new URL(request.url);
    const hostname = url.hostname;
    const encoded = hostname.split(".")[0];
    const ipv6 = encoded.replace(/--/, "::").replace(/-/g, ":");

    const targetUrl = `${url.protocol}//[${ipv6}]${url.pathname}${url.search}`;
    const proxyRequest = new Request(targetUrl, {
      method: request.method,
      headers: request.headers,
      body: request.body,
      redirect: "manual",
    });

    return fetch(proxyRequest);
  }
}
