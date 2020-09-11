const app = new Vue({
    el: "#app",
    data: {
        title: "Olá Bruno Souza!",
        newTodo: "",
        todos: []
    },
    methods: {
        addTodo() {
            console.log("Form submitted!");
            console.log(this.newTodo);
            this.todos.push({
                title: this.newTodo,
                done: false
            });
            this.newTodo = "";
        },

        removeTodo(todo) {
            const todoIndex = this.todos.indexOf(todo);
            this.todos.splice(todoIndex, 1);
        },

        allDone() {
            this.todos.forEach(todo => {
                todo.done = true;
            });
        }

    }
})