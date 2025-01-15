<script setup lang="ts">
import { useUser } from "@/stores/user";
import { useRouter } from "vue-router";

const router = useRouter();
const userStore = useUser();

const handleLogout = () => {
  userStore.logout();
  router.push("/login");
};
</script>

<template>
  <div class="app-header">
    <a-button type="primary" @click="handleLogout">Выйти</a-button>
  </div>
</template>

<style scoped lang="scss"></style>
