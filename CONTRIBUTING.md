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

## Watch server

```bash
docker compose exec node npm run dev
```

## Build

```bash
docker compose exec node npm run build
```

## Linting

```bash
docker compose exec node npm run lint
```
