<script setup lang="ts">
import Navbar from '../components/Navbar.vue'
import ContactUs from '../components/ContactUs.vue'
import luffyImage from '../assets/luffy.jpg'
</script>

<template>
  <Navbar />
  <main>
    <section class="hero">
      <div class="hero-text">
        <p class="small-text">LEARN • CREATE • GROW</p>

        <h1>
          Learn skills.<br />
          Build your <span>future.</span>
        </h1>

        <p class="description">
          Discover courses designed to help you learn new skills,
          explore your creativity, and grow your career.
        </p>

        <div class="hero-buttons">
          <button class="primary-btn">Explore Courses →</button>
          <button class="secondary-btn">Learn More</button>
        </div>
      </div>
<div class="hero-image">
  <img :src="luffyImage" alt="Luffy" />
</div>
    </section>
  </main>
  <ContactUs />
</template>
