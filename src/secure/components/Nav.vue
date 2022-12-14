<template>
  <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
    <a class="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">Company name</a>
    <!--
        <nav class="my-2 my-md-0 mr-md-3">
          <router-link to="/profile" class="p-2 text-white">{{ user.name }}</router-link>-->
    <ul class="navbar-nav px-3">
      <li class="nav-item text-nowrap">
        <a class="nav-link" href="javascript:void(0)" @click="logout">Sign out</a>
      </li>
    </ul>
  </nav>

</template>

<script>
import {useRouter} from "vue-router";

export default {
  name: "Nav",
  setup() {
    const router = useRouter();

    const logout = () => {
      localStorage.clear();
      router.push('/login')
    }

    return {
      logout
    }
  }
}
</script>

<style scoped>

</style>
