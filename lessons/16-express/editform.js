const editForm = (id) => `<form action="/directories/${id}">
    <input type="hidden" name="secretMethod" value="patch" />
    <input type="text" name="newDirectoryName" value="${id}" />
    <input type="submit" value="Edit the directory" />
</form>`

module.exports = editForm

