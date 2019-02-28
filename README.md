# ck-time

# Objetivo del API REST

Servicio que agrupa las operaciones sobre la estructura &#34;deudas&#34; en base de datos.
Permite construir deudas, consultar las deudas y obtener detalles de una deuda
El contexto de deudas siempre implica una autenticación que limita las deudas a un cliente de la organización




## Design Principles
### RESTful APIs
The API adheres to RESTful API concepts where possible and sensible to do so.

However, the priority is to have an API that is simple to _understand_ and _easy_ to use. In instances where following RESTful principles would be convoluted and complex, the principles have not been followed.

### References:

* The highest level Data Description Language used is the JSON Schema : http://json-schema.org/
* Best Practice has also been taken from the Data Description Language for APIs; JSON API : http://jsonapi.org/
* The Interface Description Language used is the Swagger Specification version 2.0 (also known as Open API) : http://swagger.io/ 

## Get Started

```shell
# install deps

npm install

# run in development mode (con nodemon)

npm run dev

# run tests
npm run test
```

## Install Dependencies

Install all package dependencies (one time operation)

```shell
npm install
```

## Run It
#### Run in *development* mode:
Runs the application is development mode. Should not be used in production

```shell
npm run dev
```

or debug it

```shell
npm run dev:debug
```

#### Run in *production* mode:

Compiles the application and starts it in production production mode.

```shell
npm run build
npm start
```

## Lint It

View airbnb linter output

```
npm run lint
```

Fix all airbnb linter errors

```
npm run lint
```

## Deploy It

Se despliega en OpenShift [falta definir script]

```shell
  oc login https://mycluster.mycompany.com
  oc project ck-consultazona
  oc new-app colco/ck-consultazona~https://github.com/colco/ck-consultazona.git
  oc logs -f bc/ruby-ex
```
