<template>
  <div class="landing-page">
    <!-- Hero Section -->
    <section class="hero">
      <h1>Welcome to CodeComrade</h1>
      <p>Your ultimate companion for coding collaboration.</p>
      <router-link to="/register" class="btn-primary">Join Now</router-link>
    </section>

    <!-- Features Section -->
    <section class="features">
      <div class="feature">
        <h3>Share and Discover</h3>
        <p>
          Share your code snippets and discover new ones from the community.
        </p>
      </div>
      <div class="feature">
        <h3>Connect and Collaborate</h3>
        <p>Connect with fellow developers and collaborate on projects.</p>
      </div>
      <div class="feature">
        <h3>Learn and Grow</h3>
        <p>Learn from shared knowledge and experiences to grow your skills.</p>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="cta">
      <h2>Ready to dive in?</h2>
      <router-link to="/register" class="btn-primary">Start Now</router-link>
    </section>
  </div>
</template>
  
  <script>
export default {
  name: "LandingPage",
};
</script>
  
  <style scoped>
.landing-page {
  text-align: center;
  color: #333;
}

.hero {
  padding: 60px 20px;
}

.features {
  display: flex;
  justify-content: center;
  padding: 40px 20px;
}

.feature {
  margin: 0 20px;
}

.cta {
  padding: 40px 20px;
  background-color: #f4f4f4;
}

.btn-primary {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
}
</style>
  