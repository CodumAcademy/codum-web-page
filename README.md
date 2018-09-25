# CodumAcademy

## Instalación

1. Instalar todas las dependencias en el root del proyecto:

```sh
$ npm install
```

2. Instalar todas las dependecias del paquete `codumacademy-graphql-server`

```sh
$ cd packages/codumacademy-graphql-server
$ npm install
```

3. Instalar todas las dependecias del paquete `codumacademy-web`

```sh
$ cd packages/codumacademy-web
$ npm install
```

## Estructura

### packages/codumacademy-core

Paquete que no tiene ninguna utilidad. Quedo en el repositorio debido a un trabajo inconcluso de los desarrolladores originales del sitio web.

### packages/codumacademy-graphql-server

Backend del sitio backend.

### packages/codumacademy-web

Front end del sitio web.

## Ejecución

2. Iniciar el backend

```sh
$ cd packages/codumacademy-graphql-server
$ npm build
$ npm start
```

3. Iniciar el frontend

```sh
$ cd packages/codumacademy-web
$ npm build
$ npm start
```
