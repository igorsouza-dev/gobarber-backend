# gobarber-backend

Backend for the GoBarber Project.

## JWT Authentication and mailing

Before running the project, it's necessary to create a `secret_data.js` file at the root of the project.

The file should contain:

```
export default {
  jwt_secret:
    'super_secret_key',
  mailer: {
    host: 'some_hostname',
    port: '2525',
    user: 'some_user',
    pass: 'some_password',
    from: 'No reply <no-reply@company.com>',
  },
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

Running mongodb on Docker

```
docker run --name mongobarber -p 27017:27017 -d -t mongo
```
