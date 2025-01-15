<script setup lang="ts">
import { reactive, ref } from "vue";
import { notification } from "ant-design-vue";
import { useRouter } from "vue-router";
import { useUser } from "@/stores/user";

import type { Login } from "@/types/auth";

import AuthContent from "@/components/auth/AuthContent.vue";

const userStore = useUser();
const router = useRouter();

const formState = reactive<Login>({
  login: "",
  password: "",
});

const isLoading = ref(false);

const onSubmit = () => {
  isLoading.value = true;
  setTimeout(() => {
    handleLogin();
  }, 600);
};

const handleLogin = () => {
  try {
    if (!formState.login || !formState.password) {
      notification({
        message: "Ошибка",
        description: "Логин и пароль обязательные поля",
        placement: "topRight",
      });
      return;
    }

    userStore.login({
      login: formState.login,
    });

    router.push("/");
  } catch (err) {
    console.error(err);
    notification({
      message: "Ошибка",
      description: "Проверьте логин или пароль",
      placement: "topRight",
    });
  } finally {
    isLoading.value = false;
  }
};

const onSubmitFailed = (err: any) => {
  console.error(err);
  notification({
    message: "Ошибка",
    description: "Проверьте логин или пароль",
    placement: "topRight",
  });
};
</script>

<template>
  <div class="login-view auth-page">
    <AuthContent title="Вход в систему ">
      <a-form
        :model="formState"
        name="basic"
        autocomplete="off"
        layout="vertical"
        @finish="onSubmit"
        @finishFailed="onSubmitFailed"
      >
        <a-form-item
          label="Логин"
          name="login"
          class="login-view__form-item"
          :rules="[{ required: true, message: 'Заполните логин!' }]"
        >
          <a-input
            v-model:value="formState.login"
            size="large"
            placeholder="Введите логин"
          />
        </a-form-item>

        <a-form-item
          label="Пароль"
          name="password"
          class="login-view__form-item"
          :rules="[
            { required: true, message: 'Пожалуйста, заполните пароль!' },
            { min: 6, message: 'Пароль должен быть не менее 6 символов' },
          ]"
        >
          <a-input-password
            v-model:value="formState.password"
            size="large"
            placeholder="Введите пароль"
          />
        </a-form-item>

        <a-form-item class="login-view__recovery">
          <router-link to="/recovery">Не помню пароль</router-link>
        </a-form-item>

        <a-form-item class="login-view__submit">
          <a-button
            type="primary"
            html-type="submit"
            :loading="isLoading"
            size="large"
            block="true"
            >Войти</a-button
          >
        </a-form-item>
      </a-form>
    </AuthContent>
  </div>
</template>

<style scoped lang="scss">
.login-view {
  &__recovery {
    text-align: right;
  }

  &__submit {
    text-align: center;
  }
}
</style>

<style lang="scss">
.login-view {
  &__form-item label:before {
    content: none !important;
  }
}
</style>
