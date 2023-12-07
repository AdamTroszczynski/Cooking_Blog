# Cooking Blog
## Authors:

| Name | Role |
|---|---|
| Mikołaj Szymczuk | `Frontend`,`Backend Support`, `Database Support`,`Testing support` |
| Adam Troszczyński | `Frontend`, `Database Support`,`Testing support` |
| Gracjan Janiszewski | `Testing` (Unit, E2E, Integration, Finding bugs and problems with app), `Database Support` |
| Aleksander Nowacki | `Backend`, `Database` |
| Bartłomiej Muszyński | `Backend`, `Database` |

## About project

Cooking Blog is culinary blog app where users can add, explore and share dish recipes.

## Project setup

### For developing app

Recommended IDE - Visual Studio Code

Recommended extensions (Copy id and paste in extension search bar in VS Code):

| Extension Name | Extension ID |
| --- | --- |
| EditorConfig | `EditorConfig.EditorConfig` |
| Eslint | `dbaeumer.vscode-eslint` |
| GitLens | `eamodio.gitlens` |
| PathIntellisense | `christian-kohler.path-intellisense` |
| Prettier | `esbenp.prettier-vscode` |
| Px to Rem | `cipchk.cssrem` |
| TailwindCSS | `bradlc.vscode-tailwindcss` |
| Todo Highlight | `wayou.vscode-todo-highlight` |
| Vue Typescript Support | `Vue.vscode-typescript-vue-plugin` |
| Vue Language Support | `Vue.volar` |
| Vue Snippets | `sdras.vue-vscode-snippets` |

### [ Client ]

#### Requirements:
- Node version >= 16

---

Go to client directory and install all dependencies

```sh
cd client
npm install
```

Next you can run project and develop app

```sh
npm run dev
```

To run unit tests

```sh
npm run test:unit
```

To run E2E (End-To-End) first you need to build client app

```sh
npm run build
```

and then you can run tests

```sh
npm run test:e2e
```

### [ Server ]

#### Requirements:
- Node version >= 16
- Postgresql server
- Some client for Postgresql ([DataGrip](https://www.jetbrains.com/datagrip/?source=google&medium=cpc&campaign=EMEA_en_PL_DataGrip_Branded&term=datagrip&content=555122603706&gad=1&gclid=CjwKCAiA1MCrBhAoEiwAC2d64a92Dslmaw4l5vO643oLb8gHv2dxRpahbWFs2vdcGVfMBEEh9jCgLRoCK3IQAvD_BwE), [PgAdmin](https://www.pgadmin.org/download/))

---

Go to server directory and install all dependencies

```sh
cd server
npm install
```

Create `.env` file with all environment variables (<b>port 8080 is important because client send requests to server with this port so try to not change it</b>)

```txt
PORT=8080
```

To run project

```sh
npm start
```

To run unit tests

```sh
coming soon ...
```
