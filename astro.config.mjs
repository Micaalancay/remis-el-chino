import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
export default defineConfig({
  // Mantenemos tu configuración de Tailwind 4
  vite: {
    plugins: [tailwindcss()],
  },
  // Agregamos el soporte para idiomas
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      // false para que la home sea aldineho.com/ (español)
      // y el inglés sea aldineho.com/en/
      prefixDefaultLocale: false 
    }
  }
});