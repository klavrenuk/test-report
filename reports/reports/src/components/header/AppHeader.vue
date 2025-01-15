<script setup lang="ts">
const handleLogout = () => {
  console.log("logout");
};
</script>

<template>
  <div class="app-header">
    <a-button type="primary" @click="handleLogout">Выйти</a-button>
  </div>
</template>

<style scoped lang="scss"></style>
