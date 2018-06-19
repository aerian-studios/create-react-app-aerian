# `react-scripts-aerian-ts`

Create React apps (with Typescript) and an opinionated with no build configuration. Based heavily on [the excellent create-react-app-typescript](https://github.com/wmonk/create-react-app-typescript).

## Get started

```sh
npm install -g create-react-app

create-react-app my-app --scripts-version=react-scripts-aerian-ts
cd my-app/
npm start
```

Where `my-app` is the name of the application you want to use.

## Opinions

These opinions are emplaced by webpack config, npm scripts and our hygen component generator

* Typescript: we believe typescript helps create well documented, reasonable applications
* Storybooks: we think storybooks allows component encapsulation and helps reason about styling
* CSS Modules: we think that, combined with the "3 types of styles" philosphy, this helps with extensibility and encapsulation

## Create components

```sh
hygen component new --name my-component

# or

hygen component new --class --name my-class-component
```

This will create all the files for your component; the test, storybook, readme, css module, typings in a folder in `src/components`

## Run Storybooks

```sh
npm run storybooks
```
