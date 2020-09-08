# Auth hashing exercise

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

2. Passwords must be hashed and stored in DB.
3. If password not match requirements return 400 and message: "Password does not match requirements".
4. If user tries to login with wrong password return 403 and message: "Invalid password or username".
5. If user tries to login with correct password return 200 and message: "Logged in successfully"
