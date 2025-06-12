# ipsix-reverseproxy-cloudflareworkers
Concept: 2a0e-b107-384-ee25--1.ipsix.domain.ku → HTTP/HTTPS reverse proxy → 2a0e:b107:384:ee25::1 (IPv6)

DNS (CNAME wildcard)
Di DNS ipsix.domain.ku, tambahkan:
```
*.ipsix.domain.ku   CNAME   your-workers-subdomain.workers.dev
```

Protokol didukung: HTTP, HTTPS, WebSockets

Kemudian anda menemukan kenda dengan sertifikat SSL ketika anda kasih cname lagi cth.domain2.ku -> 2a0e-b107-384-ee25--1.ipsix.domain.ku, tenang ini dapat diatasi dengan di menu SSL/TLS -> Custom Hostname: tambah cth.domain2.ku?

Repo ini digunakan jika anda ingin menggunakan cth.domain2.ku namun anda hanya dikasih kontrol add CNAME saja untuk ipv6 server ipv6 only gak punya ipv4 publik namun banyak pengguna internet yang jarang pakai ipv6.

jika anda punya kontrol domain2.ku anda tidak perlu ikuti cara ini langsung saja tambahin saja ns cloudflare: 
