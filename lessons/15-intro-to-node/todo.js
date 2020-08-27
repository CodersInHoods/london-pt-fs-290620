const fs = require('fs');
const path = require('path');

const [,, ...appArgs] = process.argv;

const create = appArgs.includes('create')
const view = appArgs.includes('view')
const done = appArgs.includes('done')

// const todoList = [
//     {
//         task: 'Buy milk',
//         completed: false
//     },
//     {
//         task: 'Buy cereal',
//         completed: true
//     }
// ]

const getToDoList = (done) => {
    return fs.readFile('./todo', 'utf8', (error, data) => {

        const lines = data.split('\n');
        
        const tasks = lines.map(line => {
             
            return {
                task: line.split(' ::')[0],
                completed: line.includes('::complete')
            }
        })
        
        done(tasks)
    })
};

const createNewTask = (newTaskTask) => {
    const fileLine = `${newTaskTask} ::incomplete`;

    fs.appendFile('./todo', `${fileLine}\n`, (error) => {
        if (error) throw error;

        console.log('done!')
    })
}

const setTaskAsCompleted = (taskTask) => {
    // read todo list
    getToDoList((todolist) => {
        // find existing task
        const task = todolist.find(task => task.task === taskTask)
        // set task as complete
        task.completed = true;
        // save file

        const tasksAsText = todolist.map(task => `${task.task} ::${task.completed ? 'complete' : 'incomplete'}\n`).join('')

        fs.writeFile('./todo', tasksAsText, (error) => {
            if (error) throw error;

            console.log('done setting task as completed')
        })

    })
}

getToDoList((todoList) => {

    if (view) {
        console.log(todoList.map(task => `Task: ${task.task}, ${task.completed ? "Y" : 'N'}`).join('\n'))
    }
    
    if (create) {
        createNewTask(appArgs[1])
    }
    
    if (done) { 
        setTaskAsCompleted(appArgs[1])
    }
});

