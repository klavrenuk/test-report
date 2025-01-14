<script setup lang="ts">
import { reactive } from "vue";

import AuthContent from "@/components/auth/AuthContent.vue";

interface FormState {
  username: string;
  password: string;
  remember: boolean;
}

const formState = reactive<FormState>({
  username: "",
  password: "",
  remember: true,
});

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
</script>

<template>
  <div class="recovery-view">
    <AuthContent title="Восстановление пароля">
      <a-form
        :model="formState"
        name="basic"
        :label-col="{ span: 8 }"
        :wrapper-col="{ span: 16 }"
        autocomplete="off"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <a-form-item
          label="Номер телефона"
          name="username"
          :rules="[{ required: true, message: 'Заполните логин!' }]"
        >
          <a-input v-model:value="formState.username" />
        </a-form-item>

        <a-form-item
          label="Код из смс"
          name="username"
          :rules="[{ required: true, message: 'Заполните логин!' }]"
        >
          <a-input v-model:value="formState.username" />
        </a-form-item>

        <a-form-item
          label="Пароль"
          name="password"
          :rules="[{ required: true, message: 'Пожалуйста заполните пароль!' }]"
        >
          <a-input-password v-model:value="formState.password" />
        </a-form-item>

        <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
          <a-checkbox v-model:checked="formState.remember"
            >Remember me</a-checkbox
          >
        </a-form-item>

        <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
          <a-button type="primary" html-type="submit"> Подтвердить </a-button>
          <a-button type="link"> Вернуться назад </a-button>
        </a-form-item>
      </a-form>
    </AuthContent>
  </div>
</template>

<style scoped lang="scss"></style>
