# VueJS - Router
<img src="./images/vue-plugins.jpeg" width="700px" /><br>
<small>by Peter Cosemans</small>

<small>
Copyright (c) 2017 Euricom nv.
</small>

---

# Routing

> Multiple views in the single page app

https://router.vuejs.org/en/

----

## Setup

Install

```bash
npm install vue-router --save
```

Setup

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
import Foo from './components/foo.vue'
import Bar from './components/bar.vue'
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
  router,
  render: h => h(App),
})
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
    <router-link :to="{ name: 'bar'}">Go to Bar</router-link>
</p>
```

The `<router-link>` gets the `.router-link-active` class when its target route is matched.

You can add the style

```html
<style>
.router-link-active {
  color: red;
}
</style>
```

----

## HTML5 History Mode

The default mode for vue-router is hash mode. To get rid of the hash, we can use the router's history mode.

```js
const router = new VueRouter({
    mode: 'history',
    routes: [...]
})
```

> Make sure your server will fallback to the index.html file for all non resolved routes.

----

## Router parameters

Specify parameter with a colon

```js
routes: [
    { path: '/foo/:id?', component: Foo }
]
```

they will map to corresponding fields on `$route.params`.

```html
<template>
    <div>
        <h1>Foo</h1>
        <span>Route param: {{ $route.params.id }}</span>
    </div>
</template>
```

you can have multiple parameters

```js
routes: [
    { path: '/foo/:username/post/:id', component: Foo }
]
```

----

## Access router from code

route parameters

```js
ready () {
    getContent(this.$route.params.id)
        .then(result => {
            this.content = result
        })
}
```

navigate

```js
$router.push('bar')
$router.push({ path: 'bar' })
$router.push({ path: 'foo', params: { id: 123 }})

// named (you have to specify a name on the route)
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
