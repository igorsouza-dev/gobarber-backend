# gobarber-backend

Backend for the GoBarber Project.

## Before starting

You should copy the `.env.example` and rename it to `.env`. Fill the variables with your data.

## CLI Commands

Starting the server

```
$ yarn dev
```

Starting the queue server

```
$ yarn queue
```

Adding dependency to project

```
$ yarn add dependency-name
```

Adding development dependency to project

```
$ yarn add -D dependency-name
```

Creating migrations

```
$ yarn sequelize migration:create --name=migration-name
```

Running migrations

```
$ yarn sequelize db:migrate
```

Running mongodb on Docker

```
$ docker run --name mongobarber -p 27017:27017 -d -t mongo
```

Running redis on Docker

```
$ docker run --name redis-gobarber -p 6379:6379 -d -t redis:alpine
```
