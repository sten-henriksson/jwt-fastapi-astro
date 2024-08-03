import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
// https://astro.build/config
export default defineConfig({
    // ...
    integrations: [react()],
    server: {
        proxy: {
          '/api': 'http://localhost:8000', // Assuming FastAPI runs on port 8000
        },
      },
  });
