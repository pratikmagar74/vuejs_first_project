<template>
  <nav class="navbar">
    <div class="logo">
      Tidemy
    </div>

    <div class="nav-links">
      <a href="#">Home</a>
      <a href="#">Courses</a>
      <a href="#">About</a>
    </div>

    <button class="login-btn">
      Log in
    </button>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 60px;
  background: #fafbfa;
}

.logo {
  font-size: 28px;
  font-weight: 700;
  color: #0b0d09;
}

.nav-links {
  display: flex;
  gap: 35px;
}

.nav-links a {
  text-decoration: none;
  color: #0b0d09;
  font-size: 15px;
}

.nav-links a:hover {
  opacity: 0.6;
}

.login-btn {
  border: 1px solid #0b0d09;
  background: transparent;
  padding: 10px 22px;
  border-radius: 25px;
  cursor: pointer;
}
</style>