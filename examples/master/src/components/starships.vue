<template>
  <div>
    <h2>Sharships</h2>
    <ul>
      <li v-for="item of items">
        <router-link :to="{ name: 'Ship', params: { id: item.url } }">{{item.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    // data model of message component
    return {
      items: [],
    };
  },
  mounted() {
    axios.get('http://swapi.co/api/starships')
      .then((res) => {
        console.log('items', res.data);
        this.items = res.data.results;
      })
      .catch((res) => {
        console.log(res.status, res.statusText);
      });
  },
};
</script>
