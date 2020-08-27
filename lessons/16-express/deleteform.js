const deleteForm = (id) => `<form action="/directories/${id}">
    <input type="hidden" name="secretMethod" value="delete" />
    <input type="submit" value="Delete this directory" />
</form>`

module.exports = deleteForm

