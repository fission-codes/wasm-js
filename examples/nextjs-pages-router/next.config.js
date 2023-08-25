/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    config.experiments = Object.assign(config.experiments || {}, {
      asyncWebAssembly: true,
    })

    // Without this webpack will generate different ids server and client wasm modules
    config.optimization.moduleIds = 'named'

    config.module.rules.push({
      test: /\.wasm$/,
      type: 'webassembly/async',
    })

    // TODO: cleanup -> track https://github.com/vercel/next.js/issues/25852
    if (isServer) {
      config.output.webassemblyModuleFilename =
        './../static/wasm/[modulehash].wasm'
    } else {
      config.output.webassemblyModuleFilename = 'static/wasm/[modulehash].wasm'
    }
    return config
  },
}

module.exports = nextConfig
