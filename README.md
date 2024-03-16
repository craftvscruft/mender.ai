# Mender.AI

The premier legacy code strategy guide for the AI age.

See the [manifesto](https://mender.ai/docs/intro) for what this is all about. This repo is for the website, see [Mender Stack](https://mender.ai/docs/mender-stack) for tools related to this initiative.

This website is built using [Docusaurus 2](https://docusaurus.io/).

## Requirements

* Node 18.x

### Installation

```
$ npm install
```

### Local Development

```
$ npm run start
```

This command starts a local development server and opens up a browser window.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Commit and `git push origin main`. GitHub Actions will build and deploy to gh-pages.
