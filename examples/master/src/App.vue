<template>
  <div id="app">
    <h1>My App</h1>
    <hr>
      <router-link to="/starships">Starships</router-link> |
      <router-link to="/bar">Bar</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
import Message from './components/message';

export default {
  name: 'app',
  components: {
    Message,
  },
  data() {
    return {
    };
  },
  created() {
  },
};
</script>

<style lang="less">
@alert-color: red;
h1 {
  color: @alert-color;
}

.router-link-active {
  background-color: lightgray;
}

</style>
