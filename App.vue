<template>
  <div id="app">
    <header>
      <h1 class="app-title">My Vue 3 App</h1>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>
    </header>

    <!-- Content of the current route will be displayed here -->
    <router-view></router-view>

    <footer>
      <p>&copy; 2023 My Vue 3 App</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: 'Arial', sans-serif;
  text-align: center;
  color: #333;
  margin: 0 auto;
  max-width: 800px;
  padding: 20px;
}

header {
  background-color: #007BFF;
  color: #fff;
  padding: 10px;
}

nav {
  margin-top: 10px;
}

nav a {
  margin-right: 20px;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
}

nav a:hover {
  text-decoration: underline;
}

footer {
  margin-top: 20px;
  font-size: 14px;
  color: #777;
}

.app-title {
  font-size: 2rem;
  margin-bottom: 20px;
}

/* Add styles for the active route link */
router-link-active {
  text-decoration: underline;
}
</style>
