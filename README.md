# gobarber-backend

Backend for the GoBarber Project.

## JWT Authentication

Before running the project, it's necessary to create a `jwt_secret.js` file at the root of the project.

The file should contain:

```
export default {
  jwt_secret:
    'one_super_secret_string',
};
```

## CLI Commands

Starting the server

```
$ yarn dev
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
