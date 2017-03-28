# Exercise Walkthrough
## Markup Editor and Preview

https://github.com/Euricom/training-workshop-VUEJS/tree/master/examples/advanced

Tips:

- Add textbox for [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) input
- Create a vuejs component to view the markdown as html
- Use the [marked library](https://github.com/chjj/marked) to convert markup 2 html
- Add a button to reset (clear) the input area
- Attach the ```input``` event of the textarea to get handle it changes
- Bind to the ```value``` property of the textarea to set its content
- Use [https://unpkg.com](https://unpkg.com) to get the marked library.

          var convertedMarkdown = marked(this.markdown);

See [Demo](http://spurious-veil.surge.sh)

Optional:

- Store your markup text in localstorage, so you can close and reopen the editor and your text is restored.
- Add some styling :)

## Create your html file

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Advanced - Markup Viewer</title>
</head>
<body>
</body>
</html>
```

## Add your vueJS & app script

```html
<body>
    <!-- always add your script tags at the bottom of the body -->
    <script src="https://unpkg.com/vue@2.1.10/dist/vue.js"></script>
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

And app div

```html
<div id="app">
    {{message}}
</div>
```

You html should now output: ```Hello VueJS```

## Add your ```marked``` library script

```html
<body>
    <!-- always add your script tags at the bottom of the body -->
    <script src="https://unpkg.com/vue@2.1.10/dist/vue.js"></script>
    <script src="https://unpkg.com/marked@0.3.6"></script>
    <script src="app.js"></script>
</body>

```

## Add a ```textarea``` input onto the page

```html
<textarea></textarea>
```

And set some sample text in it

```js
data: {
    text: '# Advanced exercise example/n/n## Markdown editor/nThis is a basic markdown text',
},
```

```html
<textarea :value="text"></textarea>
```

And bind to the input event to handle changes of the ```textarea```.

```html
<textarea :value="text" @input="onTextUpdated($event)"></textarea>
```

```js
methods: {
    onTextUpdated: function (event) {
        // the event.target.value contains the textarea content
        console.log(event.target.value)
        this.text = event.target.value
    },
}
```

## Create the markdown html viewer component

```js
// markdownHtmlViewer.js
Vue.component('markdown-html-viewer', {
  template: '<div>Markdown Html Viewer</div>',
})
```

Add the script (to the index.html)

```html
    ...
    <script src="https://unpkg.com/vue@2.1.10/dist/vue.js"></script>
    <script src="https://unpkg.com/marked@0.3.6"></script>
    <script src="app.js"></script>
    <script scr="markdownHtmlViewer.js"></script>
</body>
```

Test if the component is displayed (mark the )

```html
<body>
    <textarea :value="text" @input="onTextUpdated($event)"></textarea>
    <markdown-html-viewer></markdown-html-viewer>
</body>
```

This should display ```Markdown Html Viewer```

## Pass the markdown text into the component

```js
// markdownHtmlViewer.js
Vue.component('markdown', {
    // create a prop
    props: ['markdown'],
    // and use it in the template
    template: '<div>{{markdown}}</div>',
})
```

Pass the text to the markdown viewer component

```html
<markdown-html-viewer :markdown="text"></markdown-html-viewer>
```

This should display the markdown (still as markdown, not yet as html)

## Compile the markdown to html

Use a computed property to parse and display the html

```js
Vue.component('markdown', {
    props: ['markdown'],
    template: '<div v-html="compiledMarkdown"></div>',
    computed: {
        compiledMarkdown: function () {
            // parse markdown to html
            return marked(this.markdown);
        }
    },
})
```

Mark the ```v-html``` to display the input as html (and not encoded html)

## Add a reset button

```html
<button @click="reset">Reset</button>
```

```js
methods: {
    // other methods here
    reset: function () {
        this.text = '';
    },
}
```
