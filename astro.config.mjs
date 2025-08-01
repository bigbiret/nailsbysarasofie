import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://nailsbysarasofie.no',
  integrations: [tailwind(), sitemap()],
  output: 'static',
  build: {
    assets: '_astro',
    inlineStylesheets: 'auto'
  },
  server: {
    // Enable compression for preview server
    compress: true
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: undefined
        }
      },
      // Enable compression for better performance
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      }
    },
    server: {
      // Enable compression for dev server
      compress: true
    }
  }
}); 