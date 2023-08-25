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

## License

MIT © [Hugo Dias](http://hugodias.me)

[ESM Integration Spec]: https://github.com/WebAssembly/esm-integration
