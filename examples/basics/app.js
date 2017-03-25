new Vue({
    el: '#app',
    data: {
        todos: [
            {
                task: 'Learn basics',
                completed: true,
            },
            {
                task: 'Install node & live-server',
                completed: true,
            },
            {
                task: 'Make exercise',
                completed: false,
            },
            {
                task: 'Learn advanced',
                completed: false,
            },
            {
                task: 'Ask Questions',
                completed: false,
            },
        ],
    },
    methods: {
        toggle: function(todo) {
            todo.completed = !todo.completed;
        },
    },
});