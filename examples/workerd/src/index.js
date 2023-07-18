import { add } from 'wasm'
export default {
  /**
   * @param {any} request
   * @param {any} env
   * @param {any} ctx
   */
  async fetch(request, env, ctx) {
    return new Response(add(1, 1).toString())
  },
}
