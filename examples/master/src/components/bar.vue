<template>
  <div>
    <h2>Bar</h2>
    <span>{{message}}</span>
  </div>
</template>

<script>
export default {
  data() {
    // data model of message component
    return {
      message: 'Hello from bar',
    };
  },
};
</script>
