# 🏔️ Remis El Chino - Traslados & Excursiones en Jujuy

Proyecto web profesional desarrollado para **Remis El Chino**, una agencia de traslados privados y excursiones personalizadas con base en Purmamarca, Jujuy. 

La plataforma está optimizada para captar turismo nacional e internacional, ofreciendo una experiencia bilingüe fluida y un rendimiento de alto nivel.

🌐 **Sitio oficial:** [remiselchino.com.ar](https://remiselchino.com.ar)

---

## 🚀 Tecnologías & Stack

* **Astro 5.0:** Framework de última generación para lograr una carga ultra rápida mediante "islas de interactividad".
* **Tailwind CSS 4.0:** Diseño moderno y responsivo con una identidad visual basada en la ruta (Naranja, Negro y Blanco).
* **Vite:** Motor de compilación ultra veloz para un desarrollo eficiente.
* **Swiper.js:** Carruseles dinámicos y táctiles para las secciones de Hero y Galería.
* **Lucide Icons:** Iconografía minimalista y escalable.

---

## ✨ Características Técnicas (Pro)

- 🌍 **Internacionalización (i18n):** Configuración nativa de Astro para Español (`/`) e Inglés (`/en/`) con enrutamiento dinámico.
- 🔍 **Estrategia SEO Avanzada:** - Generación automática de **Sitemap** (`@astrojs/sitemap`).
    - Metadatos dinámicos, Open Graph y Twitter Cards para redes sociales.
    - Canonical URLs para evitar contenido duplicado.
- 📱 **Mobile-First & Performance:** Imágenes optimizadas en formato **WebP** y carga diferida, logrando puntuaciones de +95 en Google Lighthouse.
- 📲 **Conversión (CRO):** Botón flotante de WhatsApp con mensaje predefinido y CTAs estratégicos para reservas directas.
- 📂 **Arquitectura Limpia:** Separación de lógica y contenido mediante archivos JSON para facilitar el mantenimiento de precios e itinerarios.

---

## 🛠️ Instalación Local

```bash
# 1. Clonar el repositorio
git clone [https://github.com/Micaalancay/remis-el-chino.git](https://github.com/Micaalancay/remis-el-chino.git)

# 2. Instalar dependencias
npm install

# 3. Correr en modo desarrollo
npm run dev

# 4. Generar build de producción
npm run build