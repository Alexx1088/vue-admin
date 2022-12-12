<template>
  <main class="form-signin w-100 m-auto" @submit.prevent="submit">
    <form>

      <h1 class="h3 mb-3 fw-normal">Please register</h1>

      <label for="first_name" class="sr-only">First Name</label>
      <input type="text" class="form-control" id="first_name" placeholder="First Name" required v-model="firstName">

      <label for="last_name" class="sr-only">Last Name</label>
      <input type="text" class="form-control" id="last_name" placeholder="Last Name" required v-model="lastName">

      <label for="inputEmail" class="sr-only">Email address</label>
      <input type="email" class="form-control" id="inputEmail" placeholder="Email Address" required v-model="email">

      <input type="password" class="sr-only" id="floatingPassword" placeholder="Password" required v-model="password">
      <label for="floatingPassword">Password</label>

      <input type="password" class="sr-only" id="PasswordConfirm" placeholder="Password confirm"
             required v-model="passwordConfirm">
      <label for="PasswordConfirm">Password confirm</label>

      <button class="w-100 btn btn-lg btn-primary" type="submit">Register</button>
    </form>
  </main>
</template>

<script>
import {ref} from 'vue';
import axios from 'axios';
import {useRouter} from "vue-router";

export default {
  name: "register",
  setup() {
    const firstName = ref('');
    const lastName = ref('');
    const email = ref('');
    const password = ref('');
    const passwordConfirm = ref('');
    const router = useRouter();

    const submit =  async () => {
     await axios.post('register',
          {
            first_name: firstName.value,
            last_name: lastName.value,
            email: email.value,
            password: password.value,
            password_confirm: passwordConfirm.value,
          });

  await router.push('/login')

          }

    return {
      firstName,
      lastName,
      email,
      password,
      passwordConfirm,
      submit
    }
  }
}
</script>

<style scoped>
html,
body {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  max-width: 330px;
  padding: 15px;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
