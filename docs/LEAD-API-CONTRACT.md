# Lead API contract

`POST /api/leads` accepts JSON validated by `shared/lead.ts` on client and server.

```json
{
  "kind": "contact",
  "name": "Nguyễn Văn A",
  "phone": "0935722579",
  "email": "",
  "organization": "Đơn vị A",
  "interest": "Y tế & bệnh án điện tử",
  "message": "Nhu cầu tư vấn",
  "website": ""
}
```

`kind` is `contact` or `solution`. Name, phone and interest are required. Phone accepts Vietnamese `0` or `+84` prefixes; email is optional but must be valid if supplied. Text length limits: name 100, organization 150, interest 100, message 2000. `website` is a honeypot and must be empty.

Responses: `200 {"accepted":true}` only after the configured receiver returns 2xx; `400` for invalid input; `503` when the receiver is not configured; `502` when delivery fails. The UI never reports success for 502/503 and offers direct phone/email.

Configure `NUXT_LEAD_WEBHOOK_URL` and optional `NUXT_LEAD_WEBHOOK_TOKEN` on the server. The receiver should persist or deliver the lead, return 2xx after acceptance, use HTTPS, authenticate requests, apply rate limits, deduplicate where required, define retention/deletion rules, and avoid logging personal data. A later Zalo/email integration belongs behind this server boundary, never in client code. The UI needs approved privacy text before production collection of personal information.
