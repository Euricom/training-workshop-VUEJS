import Vue from 'vue';
import Router from 'vue-router';
import StarShips from '../components/starships';
import Ship from '../components/ship';
import Bar from '../components/bar';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/ship/:id', name: 'Ship', component: Ship },
    { path: '/starships', name: 'Ships', component: StarShips },
    { path: '/bar', name: 'Bar', component: Bar },
  ],
});
