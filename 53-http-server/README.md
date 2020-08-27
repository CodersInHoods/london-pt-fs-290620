# Create basic node server

1. Create function {createServer} that returns instance of server

2. List of end points

"/" - respond with plain text "Hello"

"/api/users" - respond with array of {users}

"api/user" - received id from url(ex. api/user/2),
find a {user} with this id and send it back as
an object in a response

"/home" - send index.html as html file

3. Create a new {server} by calling {createServer}.
4. Listen {server} on port 3000.
