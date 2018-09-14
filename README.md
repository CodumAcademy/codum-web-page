# CodumAcademy

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Requisitos

Leer toda la documentación antes de iniciar cualquier proceso.

Estudiar y entender:

- [Git Flow](https://danielkummer.github.io/git-flow-cheatsheet/)
- [Semantic Version](https://semver.org/)
- [Arquitectura Monorepo](https://github.com/babel/babel/blob/master/doc/design/monorepo.md)

Tener instalado globalmente:

_Se recomienda tener instalado [homebrew](https://brew.sh/index_es) si se está usando MacOS para instalar todos los paquetes_

- [SourceTree](https://www.sourcetreeapp.com/) o [GitKraken](https://www.gitkraken.com/)
- [Atom](https://atom.io/) o [Visual Studio Code](https://code.visualstudio.com)
- [nvm](https://github.com/creationix/nvm)
- [yarn (1.5.1)](https://yarnpkg.com/lang/en/)
- [standard](https://standardjs.com/)
- [prettier](https://prettier.io/docs/en/editors.html/) integrado con el editor o IDE.

## Instalación

Instalar los paquetes globales la primera vez:

```sh
$ yarn global add lerna && yarn global add commitizen
```

Al tener todo instalado ejecutamos el siguiente comando, también se usa cada vez que se hace pull de la rama _develop_:

```sh
$ yarn bootstrap
```

El siguiente comando se usa para una instalación con una limpieza drástica:

```sh
$ yarn regenerate
```

## Estructura

### codumacademy-core

Paquete que centraliza todo el factor común entre todos los demás paquetes.

### codumacademy-web

--

## Metodología

### Iniciando el desarrollo

Cada nueva funcionalidad debe iniciarse creando un branch con el formato `feature/explain-of-the-feature` partiendo desde el branch _develop_ y cerrando a través de un Pull Request.

Exigimos mínimo *2 (dos) commits* al día para mantener el buen flujo del proyecto y el crecimiento constante de los productos. Estos commits deben de evitar código que cambie frecuentemente.

Las tareas asignadas deben de estar como issues de Github partiendo desde las historias del sprint backlog. Como desarrollador es deber exigir estas tareas bien planificadas y dimensionadas y no permitir

### Haciendo un commit

Se usará [commitizen](https://github.com/commitizen/cz-cli) para crear commits productivos y con valor agregado. Cuando se vaya a hacer un commit ejecutar el siguiente comando:

```sh
% git add .
$ yarn run cm
```

Seleccionar la opción adecuada.

### Haciendo un pull request

A través del botón [New pull request](https://github.com/imaginamos/wepiku/compare) comparar el branch feature que estoy creando con develop, una vez allí rellenar correctamente el template que aparece automáticamente y esperar aprobación.

#### ¿Qué hacer en un Pull Request?

- Cerrar uno o más issues usando el template
- Hacer Pull Request fáciles de comprobar y verificar por parte funcional y de código.
- Estar pendiente del CircleCI y su aprobación.
- Informar correctamente a los aprobadores para que estén pendientes tanto de la creación como de los cambios.
- Hacer los cambios oportunamente que sean solicitados.
- Evitar migraciones de códigos extensas, solo son aceptados previa aprobación del CTO y el Gerente de la Unidad.

### ¿Qué hacer?

- Generar buena documentación
- Hacer mínimo 2 (dos) commits al día
- Hacer buen uso de los Pull Request
- Crear código que ayude a crecer el producto y ayude a los demás
- Usar variables de ambiente para las URLs, datos dinámicos y demás
- Usar `committizen` para generar los commits, el comando `yarn run cm` agiliza ese proceso
- Normalizar los nombres de las variables con *CamelCase*
- Usar apropiadamente el *prettier*
- Generar pruebas unitarias en lo máximo de lo posible

### ¿Qué NO hacer?

- NO crear commits directos en Github.com sin usar el formato descrito anteriormente
- NO escribir URLs directamente en el código
- NO subir imágenes de pruebas
- NO dejar _data_ de prueba en el código
- NO crear commits tipo WIP _(Work in progress)_
- NO crear Pull Request tipo WIP _(Work in progress)_
- NO ignorar reglas de *eslint*
- NO crear *packages* que no estén aprobados
- NO hacer *push* sin un apropiado *.gitignore*
- NO ignorar el `yarn.lock` (A menos de que se haga por aprobación)
- NO hacer commits complejos o con demasiados archivos
- NO versionar archivos que pesen más de *10MB*
- NO usar tecnologías que no estén aprobadas
- NO instalar dependencias que no estén aprobadas, siempre solicitar una aprobación vía Slack
- NO crear _branches_ con nombres poco dicientes
- NO escribir variables tipo _foo1, foo2, banner1, banner2_ siempre usar nombres de variables claros y coherentes
