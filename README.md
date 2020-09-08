# Professional Tour Of Heroes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.8.

After checkout you have to run `npm install`.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build. `npm run build` will always use the prod flag.

After build you can start the app at http://localhost:8080 by `npm run serve:dist`.

## Running unit tests

* `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).
* `npm run coverage` to run unit tests with coverage output to the `./coverage/{projectName}` folder (which is in .gitignore).

## Running end-to-end tests

First you have to configure webdriver by running `npm run update-webdriver` once - repeat it whenever you encounter compatibility issues. Maybe you have to explicitly specify your chrome version with `npm run update-webdriver -- --versions.chrome={yourChromeVersion}`. You can find your version in by navigating to `chrome://system` in Chrome help or by starting Chrome with the flag `--version` (e.g. `/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --version`).

- `npm run e2e` to start a dev server and execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
- `npm run protractor` to execute the e2e tests for a running dev server.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
