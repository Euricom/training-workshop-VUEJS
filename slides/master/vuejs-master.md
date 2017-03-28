# VueJS - Master It
<img src="./images/vue-plugins.jpeg" width="700px" /><br>
<small>by Peter Cosemans</small>

https://github.com/Euricom/training-workshop-VUEJS/edit/master/slides/master/vuejs-master.md

<small>
Copyright (c) 2017 Euricom nv.
</small>

<style type="text/css">
.reveal p {
    text-align: center;
    margin: 20px 0;
    line-height: 1.0;
}
.reveal pre code {
    font-size: larger;
    display: block;
    padding: 5px;
    overflow: auto;
    max-height: 800px;
    word-wrap: normal;
}
</style>

---

# Who Am I

----

## Peter Cosemans

<image src="./images/pc.jpg" width="300px">

- Consultant / Frontend Architect @Euricom
- Architect, Team Lead, Tech Coach, Trainer
    + JavaScript
    + AngularJS, Angular, React, VueJS
    + NodeJS, Mobile (hybrid), MongoDB
- Contact
    + peter.cosemans@euri.com
    + https://github.com/cosemansp
    + https://twitter.com/cosemansp (don't use it)

---

# Content

- Vue CLI
- Vue Component Spec (*.vue files)
- Loading Data
- Routing

---

# Vue CLI

> Simple CLI for scaffolding Vue.js projects

https://github.com/vuejs/vue-cli

----

## To get started

### Prerequisites

Node.js (>=4.x, 6.x preferred), npm version 3+ and Git.
[https://nodejs.org/en/](https://nodejs.org/en/)

### Installation

```bash
# Install vue-cli
npm install -g vue-cli
```

### Create your app

```bash
# Usage: vue init <template-name> <project-name>
$ vue init simple my-simple-app
```

Available templates: simple, webpack, webpack-simple, browserify, browserify-simple

----

## A complete app

Includes: Router, ESLint & Unit Tests

```
$ vue init webpack my-app

  This will install Vue 2.x version of the template.

  For Vue 1.x use: vue init webpack#1.0 my-app

? Project name my-app
? Project description A Vue.js project
? Author Peter Cosemans <peter.cosemans@gmail.com>
? Vue build standalone
? Install vue-router? Yes
? Use ESLint to lint your code? Yes
? Pick an ESLint preset AirBnB
? Setup unit tests with Karma + Mocha? No
? Setup e2e tests with Nightwatch? No

   vue-cli · Generated "my-app".

   To get started:

     cd my-app3
     npm install
     npm run dev

   Documentation can be found at https://vuejs-templates.github.io/webpack
```

----

## Run the app

Open your app folder

```bash
cd my-app
```

Install the dependencies (see package.json)

```bash
npm install
```

Start the app

```bash
npm run dev
```

And voila, your app is running.

----

## Visual Studio Code

> Code editing redefined, Free, Open Source, Runs everywhere.

Your first choice as a JavaScript Editor

[https://code.visualstudio.com/](https://code.visualstudio.com/)

### Add following extensions

- ESLint
- Path Intellisense
- Vetur
- VueHelper

----

## Visual Studio Code - Settings

To add linting inside VSCode: Preferences - Settings

```json
    //
    // Add these settings to your settings.json
    //
    "files.associations": {
        "*.vue": "vue"
    },
    "eslint.options": {
        "extensions": [".js", ".vue"]
    },
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "html",
        "vue"
    ],
    "emmet.syntaxProfiles": {
        "vue": "css"
    },
```

----

## What is different from our html/JS app

- NPM (Node Package Manager), no CDN
- EcmaScript 6+
- Linting (static code check)
- .Vue files (html + style + JS)
- Support for less/sass/stylus
- Bundeling and minification
- Unit Tests

> All what you need to build a production ready app.

----

## What makes an app

main.js

```js
// Simplified version
import Vue from 'vue';
import App from './App';

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
});
```

App.vue

```html
<template>
  <div id="app">
    {{title}}
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      title: 'hello world'
    };
  }
};
</script>
```

---

# Vue Component Spec

> The *.vue files syntax

----

## .vue file

```html
<template lang="html">
  <div class="example">
    <h1>{{ title }}</h1>
    <other-component/>
</template>

<script>
import otherComponent from 'component/otherComponent'
export default {
  data () {
    return {
      title: 'Hello world!',
    };
  }
};
</script>

<style lang="sass" scoped>
$font-stack: Helvetica;
$primary-color: #333;
.example {
  font: 100% $font-stack;
  color: $primary-color;
}
</style>
```

----

## Create a .vue Component

ES5 Component

```js
// ./component/message.js
var Message = Vue.extend({
  ...
})
Vue.component('message', Message)
```

vs .vue component

```html
<!-- ./components/message.vue -->
<template>
  <div>
    <h1>{{message}}</h1>
  </div>
</template>

<script>
export default {
  data() {
    // data model of message component
    return {
      message: 'Hello from messsage',
    };
  },
};
</script>
```

----

## Use the component

app.vue

```html
<template>
  <div id="app">
    <h1>{{title}}</h1>
    <message></message>
  </div>
</template>

<script>
// import the component
import Message from './components/message'
export default {
  components: {
    // list the components used in this component
    Message,
  },
  data () {
    // data model of app
    return {
        title: 'Vue with WebPack'
    };
  }
}
</script>
```

----

## Styling in .vue file

```html
<!-- message.vue -->
<template>
  ...
</template>

<script>
  ...
</script>

<style>
h1 {
    color: red
}
</style>
```

Notice that the style is applied to the full application

----

## Scoped styling

```html
<!-- message.vue -->
<style scoped>
h1 {
    color: red
}
</style>
```

Notice that the styling is now  applied to the `Message` component only.

----

## Less

Setup

```bash
npm install less-loader less --save-dev
```

Add config: webpack.base.conf.js

```js
module: {
    rules: [
        ...
        {
            test: /\.less$/,
            loader: 'style-loader!css-loader!less-loader',
        },
    ]
}
```

Specify and use less as style language

```html
<style lang="less">
@import "~bootstrap/dist/css/bootstrap.css";
@import (reference) "../variable.less"
@alert-color: red
h1 {
    color: @alert-color
}
</style>
```

---

# Loading data
> Get the data from the backend

VueJS doen't include a http module. Provide one yourself

----

## Using fetch

Fetch is the new [XMLHttpRequest](https://developer.mozilla.org/nl/docs/Web/API/XMLHttpRequest) and don't requires jquery.

```js
fetch('api/users')
    .then(res => {
        if (!res.ok) {
            throw Error(res.statusText);
        }
    })
    .then(res => res.json())
    .then(users => {
        console.log(users);
    })
    .catch(err => {
        console.log(err);
    })
```

Not all browsers support 'fetch'!

> [Check - Can I Use](http://caniuse.com/#search=fetch)

----

## Using Axios

Setup

```bash
$ npm install axios
```

Use

```js
import axios from 'axios';

axios.get('api/users')
  .then((res) => {
    console.log('users', res.data);
  })
  .catch((res) => {
    console.log(res.status, res.statusText);
  });
```

----

## A Starwars Sample

```html
<template>
    <ul>
        <li v-for="ship of starships">
            {{ship.name}}
        </li>
    </ul>
</template>
<script>
import axios from 'axios';
export default {
  name: 'app',
  data() {
    return {
      starships: [],
    };
  },
  created() {
    axios.get('http://swapi.co/api/starships')
      .then((res) => {
        console.log('starships', res.data);
        this.starships = res.data.results;
      })
      .catch((res) => {
        console.log(res.status, res.statusText);
      });
  },
};
</script>
```

---

# Routing

> Multiple views in the single page app

https://router.vuejs.org/en/

----

## Setup

Vue-CLI

```bash
# Nothing to to here, all is setup already
```

Otherwise Install & Setup

```bash
# Install: the router is not part of the vuejs core
npm install vue-router --save
```

```js
// main.js
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
```

----

## Routes

Create routes

```js
// Import components
import Foo from './components/foo'
import Bar from './components/bar'
```

Create router and assign to app

```js
// Create the router instance
const router = new VueRouter({
  routes: [
      { path: '/foo', component: Foo },
      { path: '/bar', component: Bar }
  ]
})

new Vue({
  el: '#app',
  router,                // <- add the router here
  template: '<App/>',
  components: { App },
});
```

----

## router-view

Add the 'router-view' placeholder

```html
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
```

And that's it.

----

## Navigate

```html
<p>
    <!-- Standard link -->
    <a href="/foo">Go to Foo</a>
    <!-- router link  -->
    <router-link to="/foo">Go to Foo</router-link>
</p>
```

The `<router-link>` gets the `.router-link-active` class when its target route is matched.

You can add the style

```html
<style>
.router-link-active {
  background-color: lightgray;
}
</style>
```

----

## HTML5 History Mode

The default mode for vue-router is hash mode.

```js
// hash mode
http://localhost:8080/#/bar
```

To get rid of the hash, we can use the router's history mode.

```js
const router = new VueRouter({
    mode: 'history',
    routes: [...]
})
```

Resolves as

```js
// history mode
http://localhost:8080/bar
```

> Make sure your server will fallback to the index.html file for all non resolved routes.

----

## Router parameters

Specify parameter with a colon

```js
routes: [
    { path: '/foo/:id?', name: 'Foo', component: Foo }
]
```

Route link

```html
<router-link :to="{ path: '/foo/${id}'}">Go to Foo</router-link>
<router-link :to="{ name: 'Foo', params: { id: 123 } }">Go to Bar</router-link>
```

Access router from code

```js
ready () {
    console.log(this.$route.params.id)
    getContent(this.$route.params.id)
        .then(result => {
            this.content = result
        })
}
```

----

## Navigate from code

```js
// path based
$router.push('bar')
$router.push({ path: 'bar' })
$router.push({ path: `foo/${id}`})

// named based
$router.push({ name: 'Foo', params: { id: 123 }})

// go back
$router.go(-1)
```

----

## Navigation Guards

Global guards

```js
const router = new VueRouter({ ... })

router.beforeEach((to, from, next) => {
  // ...
  next();   // or to abort: next(false)
})

router.afterEach((to, from) => {
  // ...
  next();   // or to abort: next(false)
})
```

Guards can also be define at 'route' and at 'component' level: <br>
http://router.vuejs.org/en/advanced/navigation-guards.html

----

## Navigation Guards Sample

```js
const router = new VueRouter({
  routes: [
    {
      path: '/foo',
      component: Foo,
      meta: { requiresAuth: true }
    }
  ]
})
```

```js
router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth)) {
        if (!auth.loggedIn()) {
            return next('/login')
        }
    }
    // continue with route
    next()
})

```

---

# Resources

- [Learn Vue 2: Step By Step](https://laracasts.com/series/learn-vue-2-step-by-step)
- [Vue.js, Vuex, and Testing; an Introduction](http://tyronetudehope.com/2016/11/24/vue-js-vuex-testing-an-introduction)
- [VueJs: Filters](https://coligo.io/vuejs-filters/)
- [How popular is VueJS in the industry?](https://www.quora.com/How-popular-is-VueJS-in-the-industry)
- Vue Libraries: [VueDash](http://vuedash.com/)
- Components: [Vue Bulma UI Components](https://github.com/vue-bulma)
- Book: [The Majesty of Vue.js 2](https://leanpub.com/vuejs2/c/launchday)
