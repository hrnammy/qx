import * as esbuild from 'esbuild'

const now = new Date().toLocaleString()
const debug = false

esbuild.buildSync({
  entryPoints: ['main.ts'],
  bundle: true,
  minify: !debug,
  banner: { js: `// Build: ${now}` },
  inject: ['./lib/text-polyfill.mjs'],
  sourcemap: false,
  define: { 'DEBUG': `${debug}` },
  outfile: '../youtube.beta.js',
})