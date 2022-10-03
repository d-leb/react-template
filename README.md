# react-template

A template for creating a new ReactJS project. It is a working project template, meaning that it will change over time. To use this template, simply copy the entire contents of the project minus
the ```.git``` directory. If you do not want to use the bundled Github automation scripts, you can delete the ```.github``` directory.

Until SWC supports modules using yarn 3.x pnp resolution, SWC plugin support will require the node linker to be set to use node module resolution. This includes Jest testing as Jest uses the
@swc/jest plugin when transforming. Instructions on enabling node module resolution can be found in the [Installing section](###-Installing) of this README.

When using this template, please be sure to custom tailer it to your needs. For example, if you do not need global internationalization support used for text in a global template or your web app
title and metadata, move the MessageProvider from the GlobalProviders to the individual page providers. This cause the internationalization module to be asynchronously loaded after the page template
is displayed. If your page template does not change geometry, which it usually should not, then this will give a better loading experience to first time users as it shaves off time on the first
visit.

If you find that you don't need a particular library remove it from your project. Simple projects do not need react-intl support. Do not forget to use ```yarn analyze``` to identify which libraries
are taking up the most space. Finally, when removing a library that is bundled into the main entry point, be sure to reduce the main entry point max size in the ```webpack.prod.config.mjs``` file.
If you add additional libraries to your own project, I would suggest using React's lazy load or an asynchronous import from a major page section, rather than the App or GlobalProviders component.
This will allow the page to load faster and load libraries into the web browser as needed.

If you have suggestions or have any problems, please open an issue on the [d-leb/react-template issues board](https://github.com/d-leb/react-template/issues).

## Getting Started

These instructions will get your copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

NodeJS is required to run commands and scripts. Both software and installation instructions can be found at [NodeJS.org](https://nodejs.org/). Using the LTS version is recommended.

Nvm is used as the node version manager to ensure the correct version of NodeJS is used with this project. For specific installation instructions, visit the
[nvm-sh/nvm repo](https://github.com/nvm-sh/nvm) and follow the instructions for installation. For Windows, you will need to install Windows WSL or use the bash system installed with git and manually
add the ~/.nvm folder to your user PATH and .bash_profile file.

Yarn is used as the package manager and to initiate scripts. You can install Yarn globably by running the command below after you have NodeJS installed.

```
npm install -g yarn
```

### Installing

Install the specific NodeJS version dependencies.

```
nvm install
nvm use
npm install -g npm
```

Setup package dependencies. By default, this will install package dependencies using yarn pnp resolution.

```
yarn install
```

If you require SWC plugin support, which is required by Jest, you will need to set the linker to use node module resolution. This is done by running the following commands.

```
yarn modules:enable
yarn install
```

If you find yourself no longer needing SWC plugin support, you can disable node module resolution by running the following commands.

```
yarn modules:disable
yarn install
```

Be sure to install recommended extensions for VSCode. The project workspace settings are already pre-configured. This will allow VCode to automatically format your code.

The Development environment can now be started.

```
yarn start
```

Your default web browser should open or you can open any web browser on your development machine and visit [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Running the tests

Github will automatically run each of the following tests before allowing a PR to be merged. You can manually run all tests by running the review script.

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

Code quality for CSS styles are verified using Stylelint.

```
yarn stylelint
```

If issues are found, you may try to automatically correct the issues.

```
yarn stylelint:fix
```

NOTE: Stylelint for this project template has been set up to follow a concentric pattern. Meaning that CSS properties are ordered by outer most properties first and movetoward the inner most
properties. [Concentric CSS](https://rhodesmill.org/brandon/2011/concentric-css/)

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

Manually run Jest tests that include react component (integration level) and axe (accessibility) test. NOTE: This requires SWC plugin support. See [Installing section](###-Installing) for enabling 
node module resolution if you haven't already.

```
yarn jest
```

**NOTE:** If you want jest tests to be part of the CI pipeline, you will need to update the test script in the package.json file to include ```yarn jest```.

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
- [FormatJS](https://formatjs.io/) - Internationalization libraries (react-intl)
- [Jest](https://jestjs.io/) - JavaScript testing framework
- [Open Sans](https://fonts.google.com/specimen/Open+Sans) - Font designed with an upright stress, open forms and a neutral, yet friendly appearance
- [Prettier](https://prettier.io/) - An opinionated code formatter
- [ReactJS](https://reactjs.org/) - A JavaScript library for building user interfaces
- [React-Query](https://tanstack.com/query) - A Powerful asynchronous state management library for ReactJS
- [React Helmet Async](https://github.com/staylor/react-helmet-async) - Document head manager
- [React Responsive](https://github.com/contra/react-responsive) - React media query module for responsive design
- [React Router](https://reactrouter.com/) - Routing and navigation library
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) - API Library for React components
- [Styled-Components](https://styled-components.com/) - CSS component system
- [Stylelint](https://stylelint.io/) - CSS quality inspector
- [SWC](https://swc.rs/) - SWC is an extensible Rust-based platform used for both compilation and bundling
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript language
- [Webpack](https://webpack.js.org/) - Static module bundler
- [Yarn](https://yarnpkg.com/) - Package management

## Sample APIs and Libraries

- [meowfacts](https://github.com/wh-iterabb-it/meowfacts) - A simple api that returns a random fact about cats on a GET request

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

Patch level is automatically updated on every merge into the develop branch.

## Authors

- **David LeBlanc** - _Initial work_ - [d-leb](https://github.com/d-leb)

See also the list of [contributors](https://github.com/d-leb/react-template/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
