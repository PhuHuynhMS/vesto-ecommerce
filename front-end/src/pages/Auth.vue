<script setup lang="ts">
import LoginForm from '@/components/LoginForm.vue';

//TODO: Login action
function login(phoneNumber: string, password: string): void {
  console.log(phoneNumber);
  console.log(password);
}
</script>
<template>
  <div class="container-fluid wrapper">
    <div class="row h-100">
      <div class="col-md-6"></div>
      <div class="col-md d-flex align-items-center">
        <LoginForm v-on:submit-form="login" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.wrapper {
  height: 100vh;
}
.form-container {
  padding-left: 5rem;
  padding-right: 5rem;
}
</style>
