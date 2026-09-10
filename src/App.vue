<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import LandingPage from './pages/LandingPage.vue';
</script>

<template>
  <Navbar />
<LandingPage />
</template>

<style>
main {
  background: #fafbfa;
}

.hero {
  min-height: 80vh;
  display: flex;
  align-items: center;
  gap: 70px;
  padding: 60px;
  max-width: 1400px;
  margin: auto;
}

.hero-text {
  flex: 1;
}

.small-text {
  font-size: 13px;
  letter-spacing: 2px;
  color: #676b62;
  margin-bottom: 25px;
}

h1 {
  font-size: 72px;
  line-height: 0.98;
  letter-spacing: -3px;
  color: #0b0d09;
  margin: 0;
}

h1 span {
  color: #4e4f31;
}

.description {
  max-width: 500px;
  margin: 30px 0;
  font-size: 17px;
  line-height: 1.7;
  color: #676b62;
}

.hero-buttons {
  display: flex;
  gap: 15px;
}

button {
  padding: 14px 25px;
  border-radius: 30px;
  font-size: 15px;
  cursor: pointer;
}

.primary-btn {
  border: none;
  background: #4e4f31;
  color: white;
}

.secondary-btn {
  border: 1px solid #0b0d09;
  background: transparent;
  color: #0b0d09;
}

.hero-image {
  flex: 1;
}

.image-placeholder {
  height: 520px;
  border-radius: 180px 180px 20px 20px;
  background: #dbcdbA;
  display: flex;
  align-items: flex-end;
  padding: 45px;
  overflow: hidden;
}

.image-content {
  color: #0b0d09;
}

.image-content p {
  font-size: 12px;
  letter-spacing: 2px;
  margin-bottom: 15px;
}

.image-content h2 {
  font-size: 42px;
  line-height: 1;
  margin: 0;
  letter-spacing: -2px;
}

.image-placeholder span {
  font-size: 24px;
  color: #4e4f31;
}
.hero-image img {
  width: 100%;
  height: 520px;
  object-fit: contain;
  border-radius: 180px 180px 20px 20px;
}
</style>