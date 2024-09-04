import { defineConfig} from 'astro/config';


import icon from 'astro-icon';




import purgecss from 'astro-purgecss';




// https://astro.build/config
export default defineConfig({
  build: {
    assets: 'assets/images',
    inlineStylesheets: 'never',
    format: 'file',
    site: "https://ryn-e-commerce.com/",
    base: '/',
    // assetsPrefix: './'
  },

  image: {
    // service: squooshImageService(),
    domains: ["astro.build"]
  },

  compressHTML: true,
  optimizeHoistedScript: true,
  output: 'static',

  //   integrations: [purgecss(), icon()]
  vite: {
    build: {
      rollupOptions: {
        output: {
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: ({
            name
          }) => {
            if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
              return 'assets/images/[name]-[hash][extname]';
            }
            if (/\.css$/.test(name ?? '')) {
              return 'assets/css/[name]-[hash][extname]';
            }

            // default value
            // ref: https://rollupjs.org/guide/en/#outputassetfilenames
            return 'assets/[name]-[hash][extname]';
          }
        }
      }
    }

  },

  integrations: [icon(), purgecss({
    safelist:['swiper-pagination-bullet-active']
  })]
});
// safelist