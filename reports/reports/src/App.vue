<script setup lang="ts">
import { onMounted, ref, computed } from "vue";
import { useRoute } from "vue-router";
import { isAuthPage } from "@/utils/auth";

import AppHeader from "@/components/header/AppHeader.vue";

const route = useRoute();

const isShowPage = ref<boolean>(false);

const isShowHeader = computed(() => !isAuthPage(route.path));

onMounted(() => {
  isShowPage.value = true;
});
</script>

<template>
  <a-layout v-if="isShowPage">
    <a-layout-header v-if="isShowHeader" class="app-layout-header">
      <a-flex justify="end" align="middle">
        <AppHeader />
      </a-flex>
    </a-layout-header>
    <a-layout-content>
      <div class="app-main">
        <router-view />
      </div>
    </a-layout-content>
  </a-layout>
</template>

<style lang="scss">
@import "@/assets/styles/app.scss";

.app-layout-header {
  margin-bottom: 2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background: #fff !important;
}

.app-main {
  padding: 0 1rem;
}
</style>
