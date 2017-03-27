<template>
  <div>
    <h2>Foo</h2>
    <ul>
      <li>Name: {{ship.name}}</li>
      <li>Model: {{ship.model}}</li>
      <li>Class: {{ship.starship_class}}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    // data model of message component
    return {
      ship: {},
    };
  },
  mounted() {
    axios.get(`${this.$route.params.id}`)
      .then((res) => {
        console.log('ship', res.data);
        this.ship = res.data;
      })
      .catch((res) => {
        console.log(res.status, res.statusText);
      });
  },
};
</script>
