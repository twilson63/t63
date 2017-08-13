import babel from 'rollup-plugin-babel'
import jsx from 'rollup-plugin-jsx'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default {
  entry: 'src/index.js',
  external: ['react'],
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    jsx({ factory: 'React.createElement' }),
    resolve(),
    commonjs()
  ],
  targets: [
    { dest: 'dist/bundle.cjs.js', format: 'cjs' },
    { dest: 'dist/bundle.umd.js', format: 'umd' },
    { dest: 'dist/bundle.es.js', format: 'es' }
  ]
}
