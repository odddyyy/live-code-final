<template>
  <ul class="nav justify-content-end">
    <li class="nav-item">
      <span class="nav-link" @click.prevent="goToCountry">Countries</span>
    </li>
    <li class="nav-item">
      <span class="nav-link" @click.prevent="goToReport">Profile</span>
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
        },
        goToReport() {
            this.$router.push({ name: 'Report' })
        },
        goToCountry() {
            this.$router.push({ name: 'Country' })
        }
    }
};
</script>

<style></style>
