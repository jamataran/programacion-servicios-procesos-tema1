# Programación de Servicios y Procesos: Tema 1

Dentro de este tema vemos tres cosas: 
* Como generar un proyecto Angular (ver carpeta `myfirstproject`)
* Conceptos básicos ECMAScript (ver carpeta `ecmascript6`)
* Conceptos básicos TypeScript (ver carpeta `typescript`)

Finalmente se plantea un ejercicio voluntario, que se ha resuelto en dos partes 
dentro de la carpeta `ejercicio1`

## Angular

Se utilizan los siguientes comandos

* Generar un proyecto: `ng new minombre`
* Desplegar en local: `ng serve` (o `ng serve --port`)
* Compilar: `ng build`

## ECMAScript y Typescript

La teoría asociada a este código está disponible en el aula virtual.

## Ejercicio Voluntario 1

El ejercicio consta de dos partes. El código fuente lo podéis encontrar en `ejercicio1`

### RequireJS (`ejercicio1/parte1/requirejs`)

RequireJS es una librería que nos ayuda con la encapsulación y carga de código bajo demanda.
Es muy sencillo de utilizar, os dejo un ejemplo auto-explicativo.

Para cualquier persona que quiera ampliar su conocimiento, os recomiendo 
acceder a la [documentación oficial](https://requirejs.org/), dónde tenéis ejemplos
muy sencillos de seguir.

## Webpack. (`ejercicio1/parte1/webpack_demo`)

Webpack es una herramienta para desarrollo front que nos ayuda con las tareas más 
repetitivas en el desarrollo así como estandariza buenas prácticas, como las construcción
de módulos, Lazy Load, etc.

En su [documentación](https://webpack.js.org/guides/getting-started/) tenéis un _Hello World_ muy sencillo
de seguir para iniciaros. 

Haciendo alguna configuración más se puede conseguir con poco esfuerzo un proyecto 
listo para desplegar en un entorno productivo, como el que os dejo en esta carpeta. Para
construirlo tenéis que lanzar:

```shell
$ npm run build
```
