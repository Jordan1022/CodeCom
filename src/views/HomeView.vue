<template>
  <div class="home">
    <img style="height: 250px" alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Code Comrade" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "HomeView",
  components: {
    HelloWorld,
  },
});
</script>
