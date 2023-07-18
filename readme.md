# Monorepo template

## Usage

First add `GH_TOKEN` and `NPM_TOKEN` to secrets for CI workflows.

```bash
# install all dependencies in the mono-repo
pnpm install
# setup git hooks
npx simple-git-hooks
```

## Tests

```bash
# node tests can enable nodejs native watch mode
pnpm test:node -n watch

# browser tests can enable watch
pnpm test:browser --watch
```

## License

MIT © [Hugo Dias](http://hugodias.me)
