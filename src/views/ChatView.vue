<template>
  <div class="chat">
    <h1>{{ msg }}</h1>
    <h3>Your Comrade in Code</h3>
    <ul>
      <li>
        <router-link to="/Register">Register</router-link>
      </li>
      <li>
        <a href="https://v3.vuejs.org/" target="_blank" rel="noopener">Login</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Chat",
  props: {},
  data() {
    return {
      msg: "Chat",
    };
  },
});
</script>

<style>
</style>