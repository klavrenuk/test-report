<script setup lang="ts">
import { onMounted, ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";

import { useUser } from "@/stores/user";

import AppHeader from "@/components/header/AppHeader.vue";

const userStore = useUser();
const router = useRouter();
const route = useRoute();

const isShowPage = ref<boolean>(false);

const authPages = ["/login", "/recovery"];

const isShowHeader = computed(() => !isAuthPage());

const isAuthPage = () => authPages.includes(route.fullPath);

const checkAuth = () => {
  console.log("isAuthPage", isAuthPage());
  console.log("userStore.getUser", userStore.getUser);
  console.log("route.fullPath", route.fullPath);

  if (isAuthPage()) {
    if (userStore.getUser) {
      router.push("/");
    }
  } else {
    if (!userStore.getUser) {
      router.push("/login");
    }
  }

  isShowPage.value = true;
};

onMounted(() => {
  isShowPage.value = true;
});
</script>

<template>
  <a-layout v-if="isShowPage">
    <a-layout-header v-if="isShowHeader">
      <a-flex justify="end" align="middle">
        <AppHeader />
      </a-flex>
    </a-layout-header>
    <a-layout-content>
      <router-view />
    </a-layout-content>
  </a-layout>
</template>

<style lang="scss">
@import "@/assets/styles/app.scss";
</style>
