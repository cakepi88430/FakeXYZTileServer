export default {
  build: {
    sourcemap: true,
  },
  server: {
    hmr: {
      // protocol: 'ws',
      host: "localhost",
      clientPort: 8080
    },
    host: true,
    strictPort: true,
    port: 8080,
    watch: {
      usePolling: true,
    },
  },
}
