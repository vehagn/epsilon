# Epsilon

Frontend for [Deltahouse](https://github.com/vehagn/deltahouse)

## Getting started

Install Node.js 20 from https://nodejs.org/en or a package manager of your choice.

This project uses [`Yarn`](https://yarnpkg.com/) for project management.

Run `yarn install` to install project dependencies.

To connect to a local backend create a file called `.env` in the root project folder and add

```
#.env
NUXT_BACKEND_URL=http://localhost:8080
```

This variable will be picked up when running e.g. `yarn dev` to start the dev server.
