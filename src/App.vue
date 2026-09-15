
<template>
  <div>

    <Navbar />

    <hr>

    <router-view />

    <hr>

    <footer>
      <p>Student Management System</p>
    </footer>

  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
</script>