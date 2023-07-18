import { unstable_dev } from 'wrangler'
import { describe, expect, it, beforeAll, afterAll } from 'vitest'

describe('Worker', () => {
  /**
   * @type {import("wrangler").UnstableDevWorker}
   */
  let worker

  beforeAll(async () => {
    worker = await unstable_dev('src/index.js', {
      experimental: { disableExperimentalWarning: true },
    })
  })

  afterAll(async () => {
    await worker.stop()
  })

  it('should return 2', async () => {
    const resp = await worker.fetch()
    if (resp) {
      const text = await resp.text()
      expect(text).toMatchInlineSnapshot(`"2"`)
    }
  })
})
