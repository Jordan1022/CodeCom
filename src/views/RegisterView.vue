<template>
  <div class="register">
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
  
  <script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Register",
  props: {},
  data() {
    return {
      msg: "Register",
    };
  },
});
</script>