# MongoDB exercise

#### Requirements:

1. You can use local DB or MongoDB cloud.
2. If you use cloud DB:
   - create a separate file for credentials
   - in credentials file create `userName` and `password` variables.
   - make them exportable.
   - use `userName` and `password` to build your query string.
   - add credentials file to `.gitignore` so no one can use your credentials.
3. Create a DB `coworking`.
4. Create a collection `rooms`.

###### `rooms` collection specification:

- `id` - ObjectId;
- `roomNumber` - number;
- `equipment` - array;
- `capacity` - int;
- `isAvailable` - boolean;

Endpoints:

- `/api/rooms`
  - `GET` - select and return all rooms from `rooms` collection;
  - `POST` - add a new room to `rooms` collection;
- `/api/rooms/available`
  - `GET` - select and return all available rooms from `rooms` collection;
- `/api/rooms?equipment=`
  - `GET` - select and return all rooms with required equipment from `rooms` collection;
- `/api/room/:id`
  - `GET` - get room by id;
  - `PUT` - update availability status;
- `/api/room/equipment/:id`
  - `PUT` - update equipment in the room;

4. Create a collection `companies`.

###### `companies` collection specification:

- `id` - ObjectId;
- `name` - string;
- `email` - string;

- `/api/companies`
  - `GET` - select and return all companies from `companies` collection;
  - `POST` - add a new company to `companies` collection;
- `/api/company/:id`
  - `GET` - get company by id;
  - `PUT` - update company;

5. Create a collection `bookings`.

###### `bookings` collection specification:

- `id` - ObjectId;
- `companyId`: int;
- `roomId`: int;
- `roomId`: int;

- `/api/bookings`
  - `GET` - return all bookings;
- `/api/bookings?companyId=`
  - `GET` - return all bookings for selected company;
  - `DELETE` - delete all bookings for selected company;
- `/api/booking/:id`
  - `GET` - return booking by id;
  - `DELETE` - delete booking by id;

#### Tools to install:

- [MongoDB](https://www.mongodb.com/try/download/community)
- [GUI](https://tableplus.com/)
- [Postman](https://www.postman.com/downloads/)

#### USEFUL LINKS:

- [MongoDB Cheatsheet](https://gist.github.com/bradtraversy/f407d642bdc3b31681bc7e56d95485b6l)
