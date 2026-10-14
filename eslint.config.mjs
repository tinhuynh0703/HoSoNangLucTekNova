import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  ignores: ['qa/**', 'legacy-audit.txt', 'build.log', '.playwright-browsers/**', '.npm-cache/**'],
  rules: {
    'vue/no-multiple-template-root': 'off',
    'vue/html-self-closing': 'off',
  },
})
