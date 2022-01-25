module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    indent: 'off',
    newline: 'off',
    'vue/no-v-html': 'off',
    'no-console': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/max-attributes-per-line': 'off'
  }
}
