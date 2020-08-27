const fs = require('fs')

const getAllDirectories = () => fs.promises.readdir('./').then(allFiles => {
    return allFiles.filter(fileName => !fileName.includes('.'))
})

const getDirectoryContents = (id) => fs.promises.readdir(`./${id}`)

const createNewDirectory = (id) => fs.promises.mkdir(`./${id}`)

const destroyDirectory = (id) => fs.promises.rmdir(`./${id}`)

const updateDirectory = (id, newName) => fs.promises.rename(`./${id}`, `./${newName}`)

module.exports = {
    getDirectoryContents,
    getAllDirectories,
    createNewDirectory,
    updateDirectory,
    destroyDirectory
}