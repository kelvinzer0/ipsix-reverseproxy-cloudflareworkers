# ipsix-reverseproxy-cloudflareworkers
Concept: 2a0e-b107-384-ee25--1.ipsix.domain.ku → HTTP/HTTPS reverse proxy → 2a0e:b107:384:ee25::1 (IPv6)

DNS (CNAME wildcard)
Di DNS ipsix.domain.ku, tambahkan:
```
*.ipsix.domain.ku   CNAME   your-workers-subdomain.workers.dev
```

Protokol didukung: HTTP, HTTPS, WebSockets
