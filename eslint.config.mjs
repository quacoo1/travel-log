import antfu from '@antfu/eslint-config'
// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

// TODO: add tailwind eslint
export default withNuxt(antfu({
  ignores: ['.pnpm-store/**'],
}))
