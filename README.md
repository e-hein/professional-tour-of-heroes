# Professional Tour Of Heroes

This repo contains multiple angular projects.

After checkout you have to run `npm install`.

## Project contents
### Apps
that can get deployed as static web pages

* [ptoh-web](./apps/ptoh-web): The Professional Tour Of Heroes (web-app)  
* [demo](./apps/demo): A demo application that shows and explains library contents

### Libraries
that provide reusable components and styles for the [apps](#Apps)

* [@company/core](./libs/core)  
  Core components, services and utils, that will be reused in other libraries.  
  Isolated examples, demos and further documentation for the core library can be found in [@examples/core](./libs/core-examples).

* [@company/hero](./libs/hero)  
  Special components, services and utils for the hero context.  
  Isolated examples, demos and further documentation for the hero library can be found in [@examples/hero](./libs/hero-examples)

## Local server
`npm start` builds all [apps](#Apps) and starts a local server at http://localhost:8080
`npm run serve:dist` starts the server without build

## Build
`npm run build` to start a production build for all projects.  
`npm run clean:build` will get triggert automatically before the build, so old build results will get removed before.  
To rebuild a single project, use `ng build --prod {projectName e.g. @company/core}`.

## Tests
`npm test` will run all required tests for all projects. In detail it will run coverage, prod build, a local server, end-to-end tests and stop the local server.  
> **windows:** because windows does not always start the parallel process for the local server, it is necessary to have a running server in a different shell.

### Running unit tests
`npm run coverage` will start unit tests with code coverage for all [libraries](#Libraries) and [apps](#Apps) and generate a combined report in `./coverage/combined`.  
`npm run clean:coverage` will get triggert automatically before coverage, so old coverage results will get removed before.  
To start watching test for a single project, use `ng test {projectName e.g. @company/core}`.

### Running end-to-end tests
First you have to configure webdriver by running `npm run update-webdriver` once - repeat it whenever you encounter compatibility issues. Maybe you have to explicitly specify your chrome version with `npm run update-webdriver -- --versions.chrome={yourChromeVersion}`. You can find your version in by navigating to `chrome://system` in Chrome help or by starting Chrome with the flag `--version` (e.g. `/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --version`).

`npm run e2e` to start a dev server and execute the end-to-end tests via [Protractor](http://www.protractortest.org/).  
`npm run protractor:dist` to execute the e2e tests with target [local server](#Local+Server).  
`npm run protractor:dist -- --base-url https://deployed-app.company.de` to execute them for a running deployment of the whole dist/apps folder.  

Each action is executed for all [libraries](#Libraries) and [apps](#Apps). To start e2e tests for a single app, cd into the app folder and run the scripts there (e.g. `cd apps/demo; npm run protractor_watch`)

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Further help
To get further information on a single app or library, have a look into their README.md or start the [demo app](./apps/demo).  
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
