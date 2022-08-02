# react-template

A template for creating a new ReactJS project.

## Getting Started

These instructions will get your copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

NodeJS is required to run commands and scripts. Installation instructions can be found at [NodeJS.org](https://nodejs.org/).

Nvm is used as the node version manager to ensure the correct version of NodeJS is used with this project. For specific installation instructions, visit the
[nvm-sh/nvm repo](https://github.com/nvm-sh/nvm) and read the instructions for installation. For Windows, you will need to install Windows WSL or use the bash system installed with git and manually
add the ~/.nvm folder to your user PATH and .bash_profile file.

Yarn is used as the package manager and to initiate scripts. You can install Yarn globably by running the command below.

```
npm install -g yarn
```

### Installing

Install NodeJS dependencies.

```
nvm install
nvm use
npm install -g npm
```

Setup package dependencies.

```
yarn install
```

Install recommended extensions for VSCode. The project workspace settings are already pre-configured.

Development environment can now be started.

```
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Running the tests

A github will automatically run each of the following tests before allowing a PR to be merged. You can test all of the tests
below by running the following command.

```
yarn review
```

### Code quality tests

All code quality tests can be run using the lint script.

```
yarn lint
```

Code quality is verified using ESLint.

```
yarn eslint
```

If issues are found, you may try to automatically correct the issues.

```
yarn eslint:fix
```

Code formatting can be manually verified using prettier.

```
yarn prettier
```

If issues are found, you may try to automatically correct the issues.

```
yarn prettier:fix
```

### Test coverage (Integration and Unit)

All tests can be run using the test script.

```
yarn test
```

You can manually check TypeScript types and syntax.

```
yarn tsc
```

### Bundle and Chunk management

Chunk and module sizes and entry points can be examined.

```
yarn analyze
```

## Deployment

A complete build will be generated and placed in the ***build*** folder.

```
yarn build
```

## Environment Variables

Create an .env file to store your environment variables.

### Optional Variables

| Variable Name | Description |
| --- | --- |
| LOG_WEB_VITALS | Set to true to log web vitals to the console. |

## Built With

- [Axe-Core](https://www.deque.com/axe/) - Accessibility testing tools
- [Browserlist](https://github.com/browserslist/browserslist) - Used to determine the browser support for a project
- [DotEnv Webpack](https://github.com/mrsteele/dotenv-webpack/) - Environment variables webpack plugin
- [ESLint](https://eslint.org/) - Code quality inspector
- [Prettier](https://prettier.io/) - An opinionated code formatter
- [ReactJS](https://reactjs.org/) - A JavaScript library for building user interfaces
- [React Helmet Async](https://github.com/staylor/react-helmet-async) - Document head manager
- [React Router](https://reactrouter.com/) - Routing and navigation library
- [Styled-Components](https://styled-components.com/) - CSS component system
- [SWC](https://swc.rs/) - SWC is an extensible Rust-based platform used for both compilation and bundling
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript language
- [Webpack](https://webpack.js.org/) - Static module bundler
- [Yarn](https://yarnpkg.com/) - Package management

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

Patch level is automatically updated on every merge into the develop branch.

## Authors

- **David LeBlanc** - _Initial work_ - [d-leb](https://github.com/d-leb)

See also the list of [contributors](https://github.com/d-leb/react-template/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
