import inquirer from "inquirer";
let todos = [];
while (true) {
    let input = await inquirer.prompt([
        {
            name: "TodoItem",
            type: "input",
            message: "add TODO Item in listing"
        },
        {
            name: "addMore",
            type: 'list',
            choices: ["yes", "no"]
        }
    ]);
    const { TodoItem, addMore } = input;
    todos.push(TodoItem);
    if (addMore == "no") {
        console.log("TodoList:");
        for (let i = 0; i < todos.length; i++) {
            console.log(todos[i]);
        }
        break;
    }
}
