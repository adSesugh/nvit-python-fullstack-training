<script setup>
  import Navbar from './components/Navbar.vue';
</script>

<template>
    <div class='container'>
      <Navbar />
      <div>
        <h1>Hello Python Full-stack class - Lab 5</h1>
      </div>
    </div>
</template>

<style scoped>
  * {
    margin: 0px;
  }
  .container {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 90vh;
    color: white;
    background-color: brown;
  }
</style>
