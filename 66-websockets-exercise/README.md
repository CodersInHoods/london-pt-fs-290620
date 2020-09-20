# Websockets exercise

Create an online chat Application.

### Requirements

1. Users should be logged in to join a chat room. (2 fields - {userName} and {roomName});
2. UserName should be unique. Use a database to store and validate a new user.
3. Room should be for more than 2 people.
4. Add "{userName} is typing" message when somebody is typing.
5. Add a button "Leave the room", so the user can be disconnected.
6. When users leave a room post message in a channel "{userName} left the room."

BONUS:

1. Store all chat messages in DB.
2. When users logging in and providing existing chat room name load all messages for this room from DB.
3. Add another field for login page - "room password"
4. If the user provides a password on the login page, messages can be loaded from DB only if {roomName} and {password}
   will match your record in the database.
