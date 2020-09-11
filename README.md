# Professional Tour Of Heroes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.8.

After checkout you have to run `npm install`.

## Project contents
### Apps
Currently this repository only contains the default app ('professional-tour-of-heroes').

### Libraries
- [@company/core](./libs/core) base components, services and utils, that are not associated with the hero context.
- [@company/hero](./libs/hero) special components, services and utils for the hero context.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build
`npm run build` to start a production build for all projects.  
`npm run clean:build` will get triggert automatically before the build, so old build results will get removed before.  
To rebuild a single project, use `ng build --prod {projectName e.g. @company/core}`.

## Local Server
Once `npm run build` completed, you can `npm start` a local server with all [apps](#Apps) at http://localhost:8080

## Tests
`npm test` will run all required tests for all projects. In detail it will run coverage, prod build, a local server, end-to-end tests and stop the local server.  
> **windows:** because windows does not always start the parallel process for the local server, it is necessary to have a running server in a different shell.

### Running unit tests
`npm run test_watch` will start unit tests for the default app in watch mode.
`npm run coverage` will start unit tests with code coverage for all [libraries](#Libraries) and [apps](#Apps) and generate a combined report in `./coverage/combined`.  
`npm run clean:coverage` will git triggert automatically before coverage, so old coverage results will get removed before.  
To start watching test for a single project, use `ng test {projectName e.g. @company/core}` (or `npm run test_watch` for the default app).

### Running end-to-end tests
First you have to configure webdriver by running `npm run update-webdriver` once - repeat it whenever you encounter compatibility issues. Maybe you have to explicitly specify your chrome version with `npm run update-webdriver -- --versions.chrome={yourChromeVersion}`. You can find your version in by navigating to `chrome://system` in Chrome help or by starting Chrome with the flag `--version` (e.g. `/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --version`).

- `npm run e2e` to start a dev server and execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
- `npm run protractor` to execute the e2e tests for a running dev server.
- `npm run protractor_watch` will execute `npm run protractor` after every file changes.
- `npm run protractor:dist` to execute the e2e tests with target [local server](#Local+Server).
- `npm run protractor:dist -- --base-url https://deployed-app.company.de` to execute them for a running deployment of the app.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
