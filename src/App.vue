<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: {Navbar}
}
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
</script>

<template>
  <Navbar/>
  <main>
    <div>
      <RouterView/>
    </div>
  </main>
</template>