import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "/", // Crucial for GitHub Pages deployment
  
  // Configure path aliases
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  
  // Performance optimizations
  build: {
    // Enable rollup optimizations
    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching and performance
        manualChunks: (id) => {
          // Vue core dependencies
          if (id.includes('vue') || id.includes('@vue')) {
            return 'vue';
          }
          
          // Animation libraries
          if (id.includes('@vueuse/motion')) {
            return 'animations';
          }
          
          // VueUse utilities
          if (id.includes('@vueuse/core')) {
            return 'vueuse';
          }
          
          // Utility libraries
          if (id.includes('lucide-vue-next')) {
            return 'icons';
          }
          
          // Form libraries
          if (id.includes('vee-validate') || id.includes('yup')) {
            return 'forms';
          }
          
          // SEO and meta libraries
          if (id.includes('@unhead/vue') || id.includes('vue-router')) {
            return 'utils';
          }
          
          // Node modules as vendor chunk (fallback)
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    },
    // Enable source maps for debugging (but smaller ones)
    sourcemap: 'hidden',
    // Target modern browsers for smaller bundle
    target: 'es2020',
    // Minimize CSS
    cssMinify: true,
    // Set chunk size warning limit
    chunkSizeWarningLimit: 500,
    // Reduce bundle size
    minify: 'esbuild',
    // Enable CSS code splitting
    cssCodeSplit: true
  },
  
  // Development optimizations
  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      '@vueuse/motion',
      '@vueuse/core',
      '@unhead/vue',
      'lucide-vue-next',
      'vee-validate',
      'yup'
    ],
    // Exclude large or problematic dependencies
    exclude: []
  },
  
  // Enable esbuild minification for better performance
  esbuild: {
    // Remove console logs in production
    drop: ['console', 'debugger']
  }
})
