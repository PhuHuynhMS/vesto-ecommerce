<script setup lang="ts">
import Header from '@/components/Header.vue';
</script>
<template>
  <Header v-if="!$route.path.includes('auth')"></Header>
  <router-view />
</template>
