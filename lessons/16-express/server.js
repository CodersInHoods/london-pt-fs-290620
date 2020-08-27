const express = require("express");
const {
  getAllDirectories,
  getDirectoryContents,
  createNewDirectory,
  updateDirectory,
  destroyDirectory
} = require("./directories");
const { html, body, h1, a, errorDiv } = require("./layout");
const newForm = require("./newform");
const editForm = require("./editform");
const deleteForm = require("./deleteform");

const app = express();

app.use(express.urlencoded());
app.use(express.static("static"));

app.get("/directories", (req, res) => {
  let pageContent = h1("welcome to the directory exploreer");

  pageContent += req.query.errors ? errorDiv(newForm) : newForm;

  getAllDirectories().then((directories) => {
    directories.forEach((directory) => {
      const aTag = a(directory, `/directories/${directory}`);

      pageContent += aTag;
    });

    res.send(html(body(pageContent)));
  });
});

const patchDirectory = (req, res) => {
    updateDirectory(req.params.id, req.query.newDirectoryName)
        .then(() => {
            res.redirect(`/directories/${req.query.newDirectoryName}`)
        })
}

const deleteDirectory = (req, res) => {
    destroyDirectory(req.params.id)
        .then(() => {
            res.redirect(`/directories`)
        })
}

app.get("/directories/:id", (req, res) => {
    if (req.query.secretMethod === 'patch') {
        return patchDirectory(req, res)
    } 
    if (req.query.secretMethod === 'delete') {
        return deleteDirectory(req, res)
    } 

  getDirectoryContents(req.params.id).then((files) => {
    let pageContent = editForm(req.params.id);

    pageContent += deleteForm(req.params.id)

    if (files.length === 0) {
      pageContent += "oops we got no content here";
    }

    files.forEach((file) => {
      const aTag = a(file, `/directories/${req.params.id}/files/${file}`);

      pageContent += aTag;
    });

    res.send(html(body(pageContent)));
  });
});

app.get("/directories/:directoryId/files/:fileId", (req, res) => {
  console.log(req.params);
});

app.post("/directories", (req, res) => {
  const newDirectoryName = req.body.newDirectoryName;

  if (newDirectoryName.length > 10) {
    res.status(406).redirect("/directories?errors=true");
  } else {
    createNewDirectory(newDirectoryName).then(() => {
      res.redirect(`/directories/${newDirectoryName}`);
    });
  }
});

app.listen(3000, () => {
  console.log("listening on 3000");
});
