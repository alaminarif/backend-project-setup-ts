## Backend project setup:

### Install command:

```shell
npm init  tsc --init
```

Dev Dependencies:

```shell
`yarn add -D typescript @types/express ts-node-dev @types/cors
```

Dependencies:

```shell

yarn add express mongoose dotenv cors
```

```json
"start": "ts-node-dev --respawn --transpile-only src/server.ts"
```

**added .ENV file**

```js

NODE_ENV = development

PORT = 5000
DATABASE_URL =
```

**Added Config>index.ts file**

```js
import dotenv from 'dotenv'

import path from 'path'

dotenv.config({ path: path.join(process.cwd(), '.env') })
```

### Setup Typescript Prettier Eslint:

**Typescript Prettier Eslint**
tsconfig.json file second line

```json
"include": ["src"], // which files to compile
"exclude": ["node_modules"], // which files to skip
```

Install:

```shell
yarn add eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
```

Add .eslintrc file
Package.json file added lint
Added script>pakage.json

```json
"lint:check": "eslint --ignore-path .eslintignore --ext .js,.ts .",
```

Added script>pakage.json

```json
"lint:fix": "eslint --fix",
```

Added .eslintignore file

```js
node_modules
dist
```

---

### setup prettier

```shell
yarn add -D prettier
```

Added .prettierrc file
Added script>pakage.json

```json
"prettier:check": "yarn prettier --write .",
```

Replace script>

```json
"prettier:check": "prettier --ignore-path .gitignore --write \"\*_/_.+(js|ts|json)\"",
```

### Avoiding conflicts

```shell
yarn add -D eslint-config-prettier
```

replace .eslintrc

---

### Husky:

```shell
yarn add husky –dev

yarn husky install
```

### precommit file > “npm test” replace yarn lint:check

Added script>pakage.json

```json
"lint-prettier": " yarn lint:check && yarn prettier:check"
Lint staged
```

### Install lint-staged

```shell

Yarn add -D lint-staged
```

```json
"lint-staged": {
"src/\*_/_.ts": "yarn lint-prettier"
},
```

### precommit file > “yarn lint:check” replace yarn lint-staged

### .eslintrc > rules replace:

```json
"rules": {
"no-unused-vars": "error",
"no-console":"error",
"no-undef":"error",
"no-unused-expressions":"error",
"no-unreachable":"error",
"consistent-type-definitions": ["error", "type"]
},
```

### .vscode > setting.json> :

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.organizeImports": true
  }
}
```