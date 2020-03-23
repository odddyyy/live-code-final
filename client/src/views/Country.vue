<template>
  <div>
    <navbar></navbar>
    <div class="container mt-5">
      <div class="row">
        <div
          class="card col-6"
          style="width: 18rem;"
          v-for="country in this.$store.state.countries"
          :key="country.id"
        >
          <div class="card-body">
            <h5 class="card-title">{{ country.name }}</h5>
            <div class="text-left">
              <p class="card-text">Death: {{ country.deaths }}</p>
              <p class="card-text">Recovered: {{ country.recovered }}</p>
              <p class="card-text">Cases: {{ country.cases }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "../components/navbar.vue";
export default {
  components: {
    navbar
  },
  created() {
    this.$store.dispatch("getCountries");
  }
};
</script>

<style></style>
