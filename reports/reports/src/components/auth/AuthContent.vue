<script setup lang="ts">
import { withDefaults, defineProps } from "vue";

interface Props {
  title: string | null;
}

const props = withDefaults(defineProps<Props>(), {
  title: null,
});
</script>

<template>
  <div class="auth-content">
    <h6 class="auth-content__title" v-if="title">{{ title }}</h6>
    <slot />
  </div>
</template>

<style scoped lang="scss">
.auth-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 560px;
  width: 100%;
  border-radius: 6px;
  padding: 50px;
  background: #fff;

  &__title {
    color: #404248;
    font-weight: 700;
    font-size: 30px;
    text-align: center;
  }
}
</style>
