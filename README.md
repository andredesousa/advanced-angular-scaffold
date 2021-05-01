# 🚀 Advanced Angular Scaffold

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11 and [Node.js](https://nodejs.org/en/about/releases) version 12.
It provides a baseline code base to help you kick start an Angular project.
It has a complete development environment configured, including build, test and deploy scripts, routing, simple components, services, and directives as examples.

## Table of Contents

- [Project structure](#project-structure)
- [Available npm scripts](#available-npm-scripts)
- [Code scaffolding](#code-scaffolding)
- [Development server](#development-server)
- [Developing components in isolation](#developing-components-in-isolation)
- [Internationalization](#internationalization)
- [State management](#state-management)
- [Linting and formatting code](#linting-and-formatting-code)
- [Running unit tests](#running-unit-tests)
- [Running end-to-end tests](#running-end-to-end-tests)
- [Debugging](#debugging)
- [Security, performance and best practices](#security-performance-and-best-practices)
- [Commit messages convention](#commit-messages-convention)
- [Build and deployment](#build-and-deployment)
- [Further help](#further-help)

## Project structure

When working in a large team with many developers that are responsible for the same codebase, having a common understanding of how the application should be structured is vital.
The time spent arguing over architectural decisions takes up a large portion of your day to day operations, and having a common understanding comes a long way in solving them.
Based on best practices from the community, [Angular coding style guide](https://angular.io/guide/styleguide), other github Angular projects and developer experience, your project should look like this:

```html
├── e2e
|  ├── server
|  ├── src
|  |  ├── features
|  |  ├── page-objects
|  |  └── steps
|  ├── protractor.conf.js
|  ├── protractor.conf.override.js
|  └── tsconfig.json
├── src
|  ├── app
|  |  ├── core
|  |  |  ├── constants
|  |  |  ├── components
|  |  |  ├── containers
|  |  |  ├── guards
|  |  |  ├── interceptors
|  |  |  ├── models
|  |  |  ├── services
|  |  |  └── core.module.ts
|  |  ├── features
|  |  |  └── feature-example
|  |  |     ├── actions
|  |  |     ├── components
|  |  |     |  └── component-example
|  |  |     ├── containers
|  |  |     |  └── container-example
|  |  |     ├── effects
|  |  |     ├── reducers
|  |  |     ├── selectors
|  |  |     ├── feature-example-routing.module.spec.ts
|  |  |     ├── feature-example-routing.module.ts
|  |  |     ├── feature-example.module.ts
|  |  |     └── feature-example.state.ts
|  |  ├── shared
|  |  |  ├── constants
|  |  |  ├── components
|  |  |  |   └── component-example
|  |  |  ├── directives
|  |  |  |   └── directive-example
|  |  |  ├── helpers
|  |  |  ├── layouts
|  |  |  ├── models
|  |  |  ├── pipes
|  |  |  └── shared.module.ts
|  |  ├── app-routing.module.spec.ts
|  |  ├── app-routing.module.ts
|  |  ├── app.component.html
|  |  ├── app.component.scss
|  |  ├── app.component.spec.ts
|  |  ├── app.component.ts
|  |  ├── app.config.ts
|  |  └── app.module.ts
|  ├── assets
|  |  ├── i18n
|  |  |  ├── de.json
|  |  |  └── en.json
|  |  ├── icons
|  |  ├── images
|  |  └── scss
|  ├── environments
|  |  ├── environment.prod.ts
|  |  └── environment.ts
|  ├── favicon.ico
|  ├── index.html
|  ├── main.ts
|  ├── polyfills.ts
|  ├── styles.scss
|  └── test.ts
├── .gherkinlintrc.json
├── .lintstagedrc.json
├── .prettierrc.json
├── .stylelintrc.json
├── angular.json
├── CHANGELOG.md
├── commitlint.config.js
├── jest.config.js
├── package-lock.json
├── package.json
├── README.md
├── sonar-project.properties
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.spec.json
└── tslint.json
```

The workspace root folder contains various support and configuration files, and a README file with generated descriptive text that you can customize.
All of the app's code goes in a folder named `src`. The end-to-end tests are in the `e2e` folder.

In Angular, everything is organized in modules, and every application have at least one of them, the `app` root module. The `app` module is the entry point of the application, and is the module that Angular uses to bootstrap the application.
The `core` module takes on the role of the `app` root module, but is not the module that gets bootstrapped by Angular at run-time.
The common denominator between the files present here is that you only need to load them once, and that is at run-time, which makes them singleton.
The `features` folder contains all different feature modules.
These modules are independent of each other.
This allows Angular to load only the module it requires to display the request thereby saving bandwidth and speeding the entire application.
Which means the module isn't loaded before the user actually accesses the route.
Do declare components, directives and pipes in the `shared` module when those items will be re-used and referenced by the components declared in other feature modules.
The `shared` module shouldn't have any dependency to the rest of the application.

The global styles for the project are placed in a `scss` folder under `assets`.
These files can be imported by other scss files.
The `styles.scss` file imports all the partials to apply their styling.

## Available npm scripts

The scripts in [package.json](package.json) file were built with simplicity in mind to automate as much repetitive tasks as possible and help developers focus on what really matters.
There are scripts to start the application, code linting and formatting, to run unit tests via [Jest](https://jestjs.io/), to run functional and visual tests via [Protractor](http://www.protractortest.org/) and [Cucumber](https://cucumber.io/), to build, release and deploy the application to [Docker Swarm](https://docs.docker.com/engine/swarm/).
It includes scripts to generate the API models and project documentation, serve and deploy [Storybook](https://storybook.js.org/), code analysis via [SonarQube](https://www.sonarqube.org/), changelog, npm audit and [Lighthouse](https://github.com/GoogleChrome/lighthouse).
All the commands should be executed in a console inside the root directory.

## Code scaffolding

Run `ng generate component component-name` to generate a new component.
You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`.
The app will automatically reload if you change any of the source files.

If you create REST APIs and need to build a front-end application that consumes the APIs, the [OpenAPI specification](https://github.com/OAI/OpenAPI-Specification) can be used to generate the models and web client in an Angular application using [ng-openapi-gen](https://www.npmjs.com/package/ng-openapi-gen) Node.js module.
Run `npm rum models` to generate the example used in this project.

You can use [ng-apimock](https://ngapimock.org/) to provide mock data.
It allows the developing and testing without the real APIs running.
You can access the development interface for `ng-apimock` navigating to `http://localhost:3000/endpoints`.
The `ng-apimock` server is automatically started with `start` command but you can run separately by running `npm run server`.
You can change `ng-apimock` configuration opening [server.js](e2e/server/server.js) file.

## Developing components in isolation

Angular CLI doesn't include any tools for this by default.
This project contains [Storybook](https://storybook.js.org/) for Angular.
Use Storybook to build small atomic components and complex pages in your web application.
In the `shared` module, you can find examples of UI components and stories.
You can serve Storybook running `npm run storybook`.
You can also deploy your Storybook or style guide as a static app running `npm run storybook:build`.
This way, everyone in your team can view and review different states of UI components.
It includes the project documentation generated by [compodoc](https://www.npmjs.com/package/@compodoc/compodoc).

## Internationalization

You have the library [ngx-translate](http://www.ngx-translate.com/) for translation your texts.
It lets you define translations for your content in different languages and switch between them easily.
You can either use the `TranslateService`, the `TranslatePipe` or the `TranslateDirective` to get your translation values.
This is how you do it with the pipe:

```html
<div>{{ 'HELLO' | translate:param }}</div>
```

Your translations should be stored in a JSON file. This file looks like this:

```json
{
  "HELLO": "hello {{value}}"
}
```

## State management

The state can be local to a component or shared between components.
If the state is used by other components, it's global, otherwise it will be local UI state.
Sharing data between different components (especially with many separated ones) can be really difficult.
[NgRx](https://ngrx.io/) is a state management system that is based on the [Redux](https://redux.js.org/) pattern.
NgRx is mainly for managing global state across an entire application.

Key concepts:

- Actions describe unique events that are dispatched from components and services.
- State changes are handled by pure functions called reducers that take the current state and the latest action to compute a new state.
- Selectors are pure functions used to select, derive and compose pieces of state.
- State is accessed with the Store, an observable of state and an observer of actions.

Application data flow:

- State describes the condition of the app at a specific point in time.
- The UI is rendered based on that state.
- When something happens (such as a user clicking a button), the state is updated based on what occurred.
- The UI re-renders based on the new state.

Code structure

Typical NgRx projects organize code by file type, that is, all the action files will be in an actions folder, all the reducer files will be in a reducers folder, etc.
It can be complemented with feature modules.
In this approach, files are grouped according to features, that is, a dashboard, blog article, subscription payments, etc.

## Linting and formatting code

[TSLint](https://palantir.github.io/tslint/), [Prettier](https://prettier.io/) and [stylelint](https://stylelint.io/) help maintain the code quality.
Linters are also excellent tools for finding certain classes of bugs, such as those related to variable scope.
The formatting of the code is ensured by Prettier.

It's recommended to use them in your projects because:

- They keep everybody on the same page, following the same rules.
- They save time in code reviews, because you can safely ignore all style issues, and focus on things that matter, like the structure and semantics of your code.
- They catch errors. Prettier, not so much, but TSLint catches a lot of syntax errors and simple forms of type errors, such as undefined variables.
- Setting these things up is a one-time cost, but the time-saving benefits compound over time.

Run `npm run lint` to analyze your code. It includes, `TSLint`, `Prettier`, `stylelint` and other tools.
Many problems can be automatically fixed with `npm run lint:fix`.

These checks are complement with [Gherkin lint](https://www.npmjs.com/package/gherkin-lint), [SonarQube](https://www.sonarqube.org/) and other tools.

Depending on your editor, you may want to add an editor extension to lint and format your code while you type or on-save.
To ensure all files committed to git don't have any TypeScript, linting, or formatting errors, there is a tool called [lint-staged](https://www.npmjs.com/package/lint-staged) that can be used.
When lint-staged is used in combination with [husky](https://www.npmjs.com/package/husky), the linting commands specified with lint-staged can be executed to staged files on pre-commit.

## Running unit tests

Unit tests are responsible for testing of individual functions or classes by supplying input and making sure the output is as expected.
Run `npm run test` to execute the unit tests via [Jest](https://jestjs.io/).
Run `npm run test:watch` to keep executing unit tests in real time while watching for file changes in the background.

When working with Jest, you might find yourself wanting to control which tests execute.
If you want to exclude a specific test, simply use `xit()` or `xdescribe()`.
If you want to run a specific test, use `fit()` or `fdescribe()`.
The `x` means exclude and the `f` stands for focused.

You can see the HTML coverage report opening the [index.html](dist/coverage/lcov-report/index.html) file in your web browser.
Code coverage measures and reports the number of executed code lines covered by automated tests.

## Running end-to-end tests

The end-to-end tests are split in functional and visual tests.
Functional tests are responsible for testing scenarios on the product itself, by controlling the browser or the website, regardless of the internal structure to ensure expected behavior.
Visual tests are responsible for detecting and reviewing visual UI changes to ensure the websites and applications always look exactly as intended.

Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
In order to only run the protractor end-to-end tests, assuming the backend mock server and frontend is already running, run `npm run protractor`.
Run `npm run protractor:watch` to keep executing your tests while watching for file changes in the background.
You can see the HTML report opening the [index.html](dist/e2e/index.html) file in your web browser.

As with unit tests, you can exclude or focus on some tests.
You can exclude features ou scenarios with the `~@ignore` tag or run specific features or scenarios with the `@onlyRunThis` tag.

## Debugging

You can debug the client-side Angular code, adding breakpoints, inspect variables and see the call stack of the client-side Angular application.
Another tool is [Angular Augury](https://augury.rangle.io/), made by Rangle.io.
`Augury` is an extension for debugging and profiling Angular applications inside the Google Chrome and Mozilla Firefox browsers.
You can use your IDE for debugging unit and end-to-end tests.
These functionalities are provided natively or based on plugins.
You can [debug](https://www.protractortest.org/#/debugging) async/await tests in chrome inspector with `debugger` keyword if you run `npm run protractor:debug`.
When you are using the debug scripts, you need to open the `chrome://inspect` page.
The same is valid when you run `npm run test:debug` script.

## Security, performance and best practices

The `npm audit` command submits a description of the dependencies configured in your package to your default registry and asks for a report of known vulnerabilities
You can also have npm automatically fix the vulnerabilities by running `npm audit fix`.

This project has the [Lighthouse](https://github.com/GoogleChrome/lighthouse) configured.
Lighthouse is an open-source, automated tool for improving the quality of web pages.
It has audits for performance, accessibility, progressive web apps, SEO and more.

Web performance is possibly one of the most important parts to take into account for a modern web application.
This project has [Webpack Bundle Analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer) to help visualize where code in the final bundle comes from.
You can see the bundle statistics running the analyzer with the `npm run analyze` command.

## Commit messages convention

In order to have a consistent git history every commit must follow a specific template. Here's the template:

```bash
<type>(<ITEM ID>?): <subject>
```

### Type

Must be one of the following:

- **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **ci**: Changes to your CI configuration files and scripts (example scopes: Travis, Circle, Jenkins, SauceLabs)
- **chore**: Changes to the build process or auxiliary tools and libraries such as documentation generation
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **revert**: A commit that reverts a previous one
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **test**: Adding missing tests or correcting existing tests

### ITEM ID

The related **issue** or **user story** or even **defect**.

- For **user stories**, you should use `US-` as prefix. Example: `feat(US-4321): ...`
- For **no related issues** or **defects** you should leave it blank. Example: `feat: ...`

### Subject

The subject contains a succinct description of the change.

## Build and deployment

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/angular11` directory. Use the `--prod` flag for a production build.
In `cicd` folder you can find scripts for your [Jenkins](https://www.jenkins.io/) CI pipeline, a Dockerfile, [Nginx](https://www.nginx.com/) configuration and an example for deploying your application with [Ansible](https://www.ansible.com/) to [Docker Swarm](https://docs.docker.com/engine/swarm/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
