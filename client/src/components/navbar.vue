<template>
  <ul class="nav justify-content-end">
    <li class="nav-item">
      <a class="nav-link" to="/countries">Countries</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" to="#">Profile</a>
    </li>
    <li class="nav-item">
      <span class="btn btn-danger" @click.prevent="logginOut">Logout</span>
    </li>
  </ul>
</template>

<script>
export default {
    methods: {
        logginOut() {
            localStorage.removeItem('token')
            this.$router.push({ name:'Login' })
        }
    }
};
</script>

<style></style>
