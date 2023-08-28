# wasm to js packaging

## Usage

```bash
# install all dependencies in the mono-repo
pnpm install
# setup git hooks
npx simple-git-hooks

# install rust, cargo etc
```

## Notes

- Bundlers need to support [ESM Integration Spec] normally with a plugin.
- The wasm-bindgen bundler target relies on the [ESM Integration Spec] and this spec requires top-level await support that only works in an ESM context.
- Bundlers normally should use the bundler target even for SSR because they need to have an import statement to figure out where the wasm file is.
  - The nodejs target just uses `fs` calls to read the wasm file and that make it harder for bundlers to figure out where the wasm file is.
- For an isomorphic package you are forced to use ESM everywhere (ie. [wasm-esm](./packages/wasm-esm))
- We can't use `main` for the nodejs target in `package.json` because Next JS uses that instead of export maps for SSR.

### Remix

Remix does not support [ESM Integration Spec] yet, the server side loads the nodejs target and run properly but the client side fails to load the wasm file. It needs the esbuild wasm plugin to work [here](https://github.com/remix-run/remix/blob/main/packages/remix-dev/compiler/js/compiler.ts).

The server side runs properly in this repo but will probably fail on a real deploy because it does not copy the wasm file to the build folder.

## Frameworks support

- [x] Svelte Kit
- [x] Next
- [ ] [Remix](#remix)
- [ ] Astro
- [ ] Solid ???

## License

MIT © [Hugo Dias](http://hugodias.me)

[ESM Integration Spec]: https://github.com/WebAssembly/esm-integration
