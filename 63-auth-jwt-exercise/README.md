# Auth JWT exercise

1. With express create the following end points:

- `/users`
  - `GET` - get all users
- `/user/signup`

  - `POST` - to create a new user;
    _Schema:_
  - `userName` - string;
  - `email` - string;
  - `password` - string;
    Password must be:
    - longer than 6 characters;
    - contains letters, numbers and at least 1 special character;

- `/user/login`

  - `POST` - to login;
    _Schema:_
  - `userName` - string;
  - `password` - string;

- `/user/authenticate`
  - `POST` - to authenticate
    _Schema:_
  - `token` - string;

2. Passwords must be hashed and stored in DB.
3. If password not match requirements return 400 and json: 
  `{status: 400; message: "Password does not match requirements"}`
4. If user tries to login with wrong password return 403 and json: 
  `{status: 403; message: "Invalid password or username"}`.
   If user tries to login with correct password return 200 and json: 
    `{status: 200; token: AUTH_TOKEN}`.
5. If the user hit `/user/authenticate` end point with wrong token return 403 and json: 
  `{status: 403; message: "Unauthorised"}`.
  If user provides a correct token return 200 and json: `{status: 200; message: "Permission granted"}`
  
  _Bonus:_
6. Handle `sign up` form and `sign in` form on a front end.
7. make `home` page accessible only if you get success from the `/user/authenticate`.
8. On `home` page handle logout and remove the token.
