# Express image handler

For this exercise we have created frontend for you.
Check `index.html` and `index.js`

Your code should be in `server/app.js`.

Your task is to create a `POST` end point that will handle file uploads.

#### Requirements:

1. Store your images in `images` folder.
2. Filename should be build from: Original filename + Date.now() + original file extension.
3. File size support must be limited to 2mb.
4. File types limit: `jpeg|jpg|png|gif`.
4. Server should respond:
 - `status` 200 on success and the message `File has been uploaded`
 - `status` 400 on error
    - if limit was reached send a message `File size should be less than 2mb`.
    - if file type is wrong send a message `Needs to be images only`.
    - on any other error `Bad request`


***NOTE***
For file handling you can use [multer](https://www.npmjs.com/package/multer) or [express-fileupload](https://www.npmjs.com/package/express-fileupload) or any other package.