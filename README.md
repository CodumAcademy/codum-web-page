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

Antes de iniciar cuaquiera de los procesos, los archivos `.env` de cada paquete deben ser configurados.

1. Iniciar el backend

```sh
$ cd packages/codumacademy-graphql-server
$ npm build
$ npm start
```

2. Iniciar el frontend

```sh
$ cd packages/codumacademy-web
$ npm build
$ npm start
```

## Configuración en el ambiente de producción

Toda la infrastructura esta en AWS:

1. Un servidor para el backend
2. Un servidor para el frontend
3. Un RDS con la base de datos en MySQL
4. Route53 para la adminstración del dominio

Ambos servidores usan [PM2](https://github.com/Unitech/pm2) junto a Nginx para mantere el proceso corriendo y recibir peticiones http.

El certificado SSL es auto generado usando [Let's Encrypt](https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-16-04).
