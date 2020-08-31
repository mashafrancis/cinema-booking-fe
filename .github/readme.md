<div align="center">

## cinema-booking-fe

![.github/workflows/ci.yml](https://github.com/mashafrancis/cinema-booking-fe/workflows/.github/workflows/ci.yml/badge.svg)
[![Maintainability](https://api.codeclimate.com/v1/badges/5c2b13c6c54f8676f64d/maintainability)](https://codeclimate.com/github/mashafrancis/cinema-booking-fe/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/5c2b13c6c54f8676f64d/test_coverage)](https://codeclimate.com/github/mashafrancis/cinema-booking-fe/test_coverage)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/mashafrancis/cinema-booking-fe.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/mashafrancis/cinema-booking-fe/context:javascript)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/mashafrancis/cinema-booking-fe.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/mashafrancis/cinema-booking-fe/alerts/)

</div>

<div align="center">

    Cinema booking frontend application

  [![Almond](../public/images/readme.svg)](https://cinema.booking-staging.herokuapp.com/)

  #### Simple but complicated movie booking

</div>

## Description
This app is to ease your the booking for a movie from the comfort of your home.

### Development set up
1. Install [`Node JS`](https://nodejs.org/en/).
2. To clone, run `git clone https://github.com/mashafrancis/cinema-booking-fe`.
3. `cd` into the root of the **project directory**.
4. Install [`yarn`](https://yarnpkg.com/en/docs/install#mac-stable).
5. Run `yarn install` on the terminal to install dependencies.
6. Create a `.env` file in the root directory of the application. Example of the content of a `.env` file is shown in the. `.env.example`
7. Setup local development server.

- In your terminal, execute the following command:
  ```bash
    sudo nano /etc/hosts
  ```
  Otherwise, you can open your hosts file in your editor of choice.
- Add the following line to your `hosts` file:

  ```bash
    127.0.0.1 cinema-booking.com
  ```

- Save changes and quit the editor.

### Development server

Run `yarn start:dev` for a dev server. Navigate to `http://cinema-booking.com:3000/`. The app will automatically reload if you change any of the source files.

### Build

Run `yarn build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `yarn test:unit` to execute the unit tests. This is achieved through the use of jest package which is used to test javascript code .
