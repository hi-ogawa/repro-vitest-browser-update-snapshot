vitest browser mode update snapshot repro

```sh
pnpm i

pnpm test
# - watch mode with error: 2 (actual) != 1 (snapshot)
# - press "u" to update snapshot
# - still error: 2 (actual) != 1 (snapshot)
```
