<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Your Comrade in Code</h3>
    <ul>
      <li>
        <a
          href="https://vitejs.dev/guide/features.html"
          target="_blank"
          rel="noopener"
          >Register</a
        >
      </li>
      <li>
        <a href="https://v3.vuejs.org/" target="_blank" rel="noopener">Login</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
