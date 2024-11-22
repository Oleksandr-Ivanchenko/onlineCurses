import { defineConfig } from 'vite';


export default defineConfig({
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `@import "./src/utils/_variables.scss";`,
        api: 'modern'  
      }
    }
  },
  base: '/onlineCurses/',
});

