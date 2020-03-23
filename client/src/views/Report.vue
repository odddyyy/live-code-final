<template>
  <div>
    <navbar></navbar>
    <div class="container mt-5">
      <form @submit.prevent="postReport">
        <div class="form-group">
          <label for="exampleInputEmail1">Please select country</label><br>
          <select v-model="country">
            <option
              
              v-for="country in this.$store.state.countries"
              :key="country.id"
              >{{ country.name }}</option
            >
          </select>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Reports</label>
          <input
            type="number"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Number of cases"
            min= 0
            v-model="cases"
          />
        </div>
        <button type="submit" class="btn btn-danger">Report</button>
      </form>
    </div>
    <div class="container mt-3">
        <div class="row">
        <div
          class="card col-6"
          style="width: 18rem;"
          v-for="report in reports"
          :key="report.id"
        >
          <div class="card-body">
            <h5 class="card-title">{{ report.id }}</h5>
            <div class="text-left">
              <p class="card-text">Death: {{ report.userId }}</p>
              <p class="card-text">Recovered: {{ report.CountryId }}</p>
            </div>
          </div>
          <button class="btn btn-danger" @click.prevent="deleteReport(report.id)">delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "../components/navbar.vue";
import axios from 'axios'
export default {
  components: {
    navbar
  },
  data() {
    return {
        contry:'',
        cases: '',
        reports: ''
    };
  },
  created() {
      this.getReport()
  },
  methods:{
      getReport() {
          axios({
              method:'GET',
              url:'http://localhost:3000/reports',
              headers: {token:localStorage.token}
          })
          .then(data => {
              this.reports = data.data
          })
          .catch(response => {
              console.log(response)
          })
      },
      postReport() {
          let find = this.country
          let id
          this.$store.state.countries.forEach(i => {
              if (i.name === find) {
                  id = i.id
              }
          })
          axios({
              method:'POST',
              url:'http://localhost:3000/reports',
              headers: {token:localStorage.token},
              data:{
                  cases:this.cases,
                  CountryId:id
              }
          })
          .then(data => {
              console.log(data.data)
              this.cases = ''
              this.country = ''
          })
          .catch(response => {
              console.log(response)
          })
      },
      deleteReport(id) {
        axios({
          method:'DELETE',
          url:`http://localhost:3000/reports/${id}`,
          headers: {token:localStorage.token}
        })
        .then(data => {
          console.log(data)
          this.getReport()
        })
        .catch(err => {
          console.log(err)
        })
      }
  }
};
</script>

<style></style>
