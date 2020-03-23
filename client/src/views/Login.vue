<template>
  <div class="container text-left" style="margin-top:300px;">
    <form @submit.prevent="doLogin">
      <div class="form-group">
        <label for="exampleInputEmail1">Username</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          v-model="username"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          v-model="password"
        />
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        doLogin() {
            axios({
                method:'POST',
                url:'http://localhost:3000/login',
                data: {
                    username: this.username,
                    password: this.password
                }
            })
            .then(data => {
                localStorage.setItem('token', data.data.token)
                this.$store.dispatch("throwId", data.data.id)
                this.$router.push({ name: 'Country' })
            })
            .catch(response => {
                console.log(response)
            })
        }
    }
};
</script>

<style></style>
