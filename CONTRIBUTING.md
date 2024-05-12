# Contributing

## Requirements

This project uses Docker & Docker Compose in order to normalize the development environment accross all computers. You can also use a GitHub Workspace instead of your computer if you don't want to install Docker locally.

- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Clone the project

If you don't want to fork the project and simply want to check for something in the source-code, or just want to take a quick peak at the project, you can clone it by running the following command.

```bash
git clone https://github.com/aminnairi/arachnide.git
```

If you just forked the project to make some suggestion changes, you can also use your own fork instead.

```bash
git clone https://github.com/your-username/arachnide.git
```

## Create a branch

Only if you are proposing a suggestion change, it is recommended to start off by creating a branch on your freshly cloned fork.

```bash
git branch -a something-to-add
git checkout something-to-add
```

It is recommended to create a branch name that reflects the changes to make to the project.

## Containers startup

This command will startup the services needed to run the development server.

```bash
docker compose up -d
```

## Dependencies installation

This command will install the NPM dependencies for all NPM workspaces. Workspace are listed under the [`package.json`](./package.json) file.

```bash
docker compose exec node npm install
```

## Library development

Every folder from the `packages` folder can be run either with the following syntax.

```bash
docker compose exec node npm -w @arachnide/core run dev
```

In that case, you must know the name of the package. A list of all registered packages is available in the `package.json` file.  Or, you can provide the full path to the package as follow.

```bash
docker compose exec node npm -w packages/arachnide/core run dev
```

## Live example development server

This command will run the server in order to test the source-code of the live example application. Source-code can be found under the [`example`](./example) folder.

```bash
docker compose exec node npm -w example run dev
```

## Library Linting

If specified, you can run this command to run the linter for a specific package.

```bash
docker compose exec node npm -w @arachnide/core run lint
```

You can also try and lint all packages at once.

```bash
docker compose exec node npm -ws run lint
```

This command might fail if one of the workspace package has no definition for the `lint` script. You can also try to run this command, and ignore packages that don't have a `lint` script defined.

```bash
docker compose exec node npm -ws --if-present run lint
```

## Build

This will build all packages listed in the NPM workspace, this will in fact run the `build` script for each package.

```bash
docker compose exec node npm -ws run build
```

## Live example preview

Once everything has been built, you can test the live example as if in production by running this command.

```bash
docker compose exec node npm -w example run preview
```

## Commit the changes

If you are making a pull request proposal from a fork, you can now commit your changes.

```bash
git add files-that-have-changed
git commit -m "I just made some changes here and there"
```

Try to commit chunks of your work at a time in order to get a clean Git history. Also try to make some good commit message that reflects the changes made here.

## Push the changes & publish the branch

If you are proposing some changes through a fork and you didn't publish your branch already, you can push & publish the working branch by issueing the following command.

```bash
git push --set-upstream origin something-to-add
```

## Open a pull request

If you just publish your working branch at your fork, now is the time to propose a pull request! Head over to the upstream project and open a pull request. 
