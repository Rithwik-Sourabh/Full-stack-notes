// Goal: Build a basic To-Do list using objects and arrays (no UI).
// Each To-Do item should be an object:
// {
//   task: "Buy groceries",
//   isCompleted: false
// }

// Features to Implement:
//     addTask(task): Adds a new task.
//     removeTask(task): Removes a task.
//     markComplete(task): Marks a task as completed.
//     listTasks(): Lists all tasks, showing completed ones differently.

function createTodoList() {
    let tasks = [];


    function addTask(work) {
        return tasks.push({ task: work, iscomplete: false })
    }

    function removeTask(work) {
        // Homework
        // splice method
        let index = tasks.findIndex(t => t.tasks === work);
        tasks.splice(index-1, 1);
    }

    function markComplete(work) {
        let index = tasks.findIndex(singleTask => singleTask.task === work)
        tasks[index].iscomplete = true
    }

    function listTasks() {
        console.log(tasks);
    }



    return {
        addTask,
        removeTask,
        markComplete,
        listTasks
    };


}

const todo = createTodoList();
todo.addTask("Buy groceries");
todo.addTask("Do Laundry");
todo.addTask("Clean room");
todo.listTasks();
// console.log("-----");
todo.markComplete("Do Laundry");
todo.listTasks();
// console.log("-----");
todo.removeTask("Do laundry");
todo.listTasks();