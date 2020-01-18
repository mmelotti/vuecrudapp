<template>
  <h1 class="text-center text-teal">Welcome - Vue App</h1>
  <div>
    <router-link to="/auth/login">Login</router-link>
    <router-link to="/auth/register">Register</router-link>
    <router-view></router-view>
  </div>
</template>
