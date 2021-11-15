const list = {
    "create a task": "In Progress",
    "make a bed": "Done",
    "write a post": "To Do",
    "write a homewoork": "To Do"
   }

function changeStatus(Task, Status) {
    for (key in list) {
        if (key === Task) {
            list[key] = Status;
        }
    }
}

function addTask(Task) {
    list[Task] = "To Do";
}

function deleteTask(Task) {
    delete list[Task];
}

function showList() {

    console.log("Todo:");
    let sum = 0;                                                                                                        // Счётчик для вывода "-"
    for (key in list) {
        if (list[key] === "To Do") {
            console.log(` "${key}",`);
            sum += 1;
        }
    }
    if (sum === 0) {
        console.log(` -`);
    }

    console.log("In Progress:")
    sum = 0;                                                                                                            // Оббнуление счётчика перед выводом "In Progress:"
    for (key in list) {
        if (list[key] === "In Progress") {
            console.log(` "${key}",`);
            sum += 1;
        }
    }
    if (sum === 0) {
        console.log(` -`);
    }

    console.log("Done:");
    sum = 0;                                                                                                            // Обнуление счётчика перед выводом "Done:"
    for (key in list) {
        if (list[key] === "Done") {
            console.log(` "${key}",`);
            sum += 1;
        }
    }
    if (sum === 0) {
        console.log(` -`);
    }
}

changeStatus("write a post", "Done");
addTask('have a walk');
deleteTask('make a bed');


showList();