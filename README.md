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
