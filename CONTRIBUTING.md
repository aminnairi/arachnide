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

```bash
docker compose exec node npm -w arachnide run dev
```

## Example development server

```bash
docker compose exec node npm -w example run dev
```

## Library Linting

```bash
docker compose exec node npm -w arachnide run lint
```

## Library build

```bash
docker compose exec node npm -w arachnide run build
```
