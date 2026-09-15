
<template>
  <nav class="navbar">

    <div class="logo">
      Student Management
    </div>

    <div class="nav-links">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/add">Add Student</a>
    </div>

  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 60px;
  background: #0c0c0c;
}

.logo {
  font-size: 28px;
  font-weight: 700;
  color: #e1e7e1;
}

.nav-links {
  display: flex;
  gap: 35px;
}

.nav-links a {
  text-decoration: none;
  color: #f1f8eb;
  font-size: 15px;
}

.nav-links a:hover {
  opacity: 0.6;
}
</style>
