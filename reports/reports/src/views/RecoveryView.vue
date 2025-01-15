<script setup lang="ts">
import { ref, computed, reactive } from "vue";
import { useRouter } from "vue-router";
import { notification } from "ant-design-vue";

import { RecoveryStateLogin, RecoveryStatePassword } from "@/types/auth";

import AuthContent from "@/components/auth/AuthContent.vue";

const router = useRouter();

const step = ref<string>("login");

const formStateLogin = reactive<RecoveryStateLogin>({
  login: "",
});

const formStatePassword = reactive<RecoveryStatePassword>({
  password: "",
});

const handleSubmit = () => {
  try {
    switch (step.value) {
      case "login":
        if (formStateLogin.login) {
          step.value = "password";
        }
        break;

      case "password":
        if (
          formStatePassword.password &&
          formStatePassword.password.length >= 6
        ) {
          router.push("/login");
        }
        break;
    }
  } catch (err) {
    console.error(err);

    notification({
      message: "Ошибка",
      description: "Попробуйте еще раз",
      placement: "topRight",
    });
  }
};
</script>

<template>
  <div class="recovery-view auth-page">
    <AuthContent title="Восстановление пароля">
      <a-form
        :model="formStateLogin"
        name="login"
        autocomplete="off"
        layout="vertical"
        v-if="step === 'login'"
        @finish="handleSubmit"
      >
        <a-form-item
          label="Логин"
          name="login"
          :rules="[{ required: true, message: 'Заполните логин!' }]"
        >
          <a-input
            v-model:value="formStateLogin.login"
            size="large"
            placeholder="Введите логин"
          />
        </a-form-item>

        <a-form-item class="login-view__submit">
          <a-button
            type="primary"
            @click="handleSubmit"
            size="large"
            block="true"
            html-type="submit"
            >Войти</a-button
          >
        </a-form-item>
      </a-form>

      <a-form
        name="password"
        autocomplete="off"
        layout="vertical"
        :model="formStatePassword"
        @finish="handleSubmit"
        v-if="step === 'password'"
      >
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
            v-model:value="formStatePassword.password"
            size="large"
            placeholder="Введите пароль"
          />
        </a-form-item>

        <a-form-item class="login-view__submit">
          <a-button
            type="primary"
            @click="handleSubmit"
            size="large"
            block="true"
            html-type="submit"
            >Войти</a-button
          >
        </a-form-item>
      </a-form>
    </AuthContent>
  </div>
</template>
