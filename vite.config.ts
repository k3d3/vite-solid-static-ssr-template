import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import viteCompression from 'vite-plugin-compression';

const ssrPrerender = () => {
  return {
    name: 'html-transform',
    async transformIndexHtml(html) {
      const { render } = await import('./ssr/prerender.mjs');
      let { hydration, body } = render();
      return html.replace(
        "<!--ssr-output-->",
        body
      ).replace("</head>", hydration + "</head>");
    }
  }
}

export default defineConfig(({ command, ssrBuild }) => ({
  plugins: ssrBuild
    ? [solidPlugin({ ssr: true })]
    : [solidPlugin({ ssr: true }), command == "build" ? ssrPrerender() : undefined, viteCompression({ algorithm: "gzip" }), viteCompression({ algorithm: "brotliCompress" })],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
}));
