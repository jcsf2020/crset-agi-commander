# React + TypeScript + Vite

This project was bootstrapped with Vite and uses React, TypeScript and Tailwind CSS.

## Development

Install the dependencies and start the dev server:

```bash
npm i
npm run dev
```

## Environment variables

Create a `.env` file in the project root based on `.env.example` and provide the following values:

```
VITE_SUPABASE_URL=<your supabase url>
VITE_SUPABASE_ANON_KEY=<your supabase anon key>

VITE_EMAILJS_SERVICE_ID=<emailjs service id>
VITE_EMAILJS_TEMPLATE_ID=<emailjs template id>
VITE_EMAILJS_PUBLIC_KEY=<emailjs public key>

EMAILJS_SERVICE_ID=<emailjs service id>
EMAILJS_TEMPLATE_ID=<emailjs template id>
EMAILJS_USER_ID=<emailjs user id>
```

Variables prefixed with `VITE_` are accessed in the browser through `import.meta.env`.
The others are read in serverless functions using `process.env`.
