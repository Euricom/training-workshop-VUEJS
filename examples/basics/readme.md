# Exercise Walkthrough
## Simple todo list

Tips:
- Add index.html and app.js
- Load your VueJS with a script tag and CDN
- Show a list of hardcoded (array) task items
- Add a button to toggle the todo (todo/completed)

Optional:
- Add an input and add button to add a new todo

## Create your html file

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Basics - Todo App</title>
</head>
<body>
    <h1>Todo App</h1>
</body>
</html>
```

## Add your vueJS script

```html
<body>
    <!-- always add your script tags at the bottom of the body -->
    <script src="https://unpkg.com/marked@0.3.6"></script>
    <script src="app.js"></script>
</body>
```

## Create your vue app

```js
// app.js
new Vue({
    el: '#app',
    data: {
        message: 'Hello VueJS'
    },
});
```

Add it to the index.html

```html
<body>
    <h1>Todo App</h1>
    <!-- always add your script tags at the bottom of the body -->
    <script src="https://unpkg.com/marked@0.3.6"></script>
    <script src="app.js"></script>
</body>
```

And add an element (div) to bind the app to

```html
<div id="app">
    {{message}}
</div>
```

You html should now output: ```Hello VueJS```

## Install 'liveserver' for easy development

Install

```bash
npm install -g live-server
```

Use

```bash
live-server .
```

Now your html app will open in the browser and auto reload on file changes

## Add the task list

```js
new Vue({
    el: '#app',
    data: {
        todos: [
            { task: 'Learn basics', completed: true },
            { task: 'Install node & live-server', completed: true },
            { task: 'Make exercise', completed: false },
            { task: 'Learn advanced', completed: false },
            { task: 'Ask Questions', completed: false, },
        ],
    },
})
```

## Show the list on the page

```html
<ul>
    <!-- loop over all todos in the list -->
    <li v-for="todo in todos">
        <p> {{ todo.task }} </p>
    </li>
</ul>
```

## Add a click event handler on the LI

Bind to the click event

```html
<li v-for="todo in todos" @click="toggle(todo)>
```

Add method to handle the event (and toggle the todo)

```js
data: {
    // other stuff
},
methods: {
    toggle: function(todo) {
        console.log('todo clicked', todo)
    },
},
```

## Switch between todo / complete

Simply toggle the completed flag

```js
methods: {
    toggle: function(todo) {
        todo.completed = !todo.completed;
    },
},
```

## Show the completed status on the todo

Use symbols
- [Ballot Box](http://www.codetable.net/decimal/9744)
- [Ballot Box With Check](http://www.codetable.net/decimal/9745)

And show the correct one depending of the completed state

```
<li class="todo-state" v-for="todo in todos" @click="toggle(todo)">
    <span v-if="todo.completed"> &#9745; </span>
    <span v-else> &#9744; </span>
    <p> {{ todo.task }} </p>
</li>
```



