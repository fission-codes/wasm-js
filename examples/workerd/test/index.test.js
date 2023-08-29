import { unstable_dev } from 'wrangler'
import assert from 'assert/strict'

describe('Worker', () => {
  /**
   * @type {import("wrangler").UnstableDevWorker}
   */
  let worker

  before(async () => {
    worker = await unstable_dev('src/index.js', {
      experimental: { disableExperimentalWarning: true },
    })
  })

  after(async () => {
    await worker.stop()
  })

  it('should return 2', async () => {
    const resp = await worker.fetch()
    if (resp) {
      const text = await resp.text()
      assert.equal(text, '2')
    }
  })
})
