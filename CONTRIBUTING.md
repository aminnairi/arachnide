# Contributing

## Requirements

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Containers startup

```bash
docker compose up -d
```

## Dependencies installation

```bash
docker compose exec node npm install
```

## Library development

Every folder from the `packages` folder can be run either with the following syntax.

```bash
docker compose exec node npm -w @arachnide/core run dev
```

In that case, you must know the name of the package. A list of all registered packages is available in the `package.json` file.

Or, you can provide the full path to the package as follow.

```bash
docker compose exec node npm -w packages/arachnide/core run dev
```

## Example development server

```bash
docker compose exec node npm -w example run dev
```

## Library Linting

```bash
docker compose exec node npm -w @arachnide/core run lint
```

## Build

```bash
docker compose exec node npm -ws run build
```
