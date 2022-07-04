<template>
  <main class="container">
    <h1>Hey! Welcome back, what do you want today?</h1>
    <form @submit.prevent="handleSubmit">
      <h2>Login</h2>
      <label for="email">E-mail:</label>
      <input
        type="email"
        name="email"
        placeholder="Type your e-mail"
        v-model="email"
        required
      />
      <label for="password">Password:</label>
      <input
        type="password"
        name="password"
        placeholder="Typing your password"
        v-model="password"
        required
      />
      <button>Enter</button>
      <div v-if="error" class="error">{{ error }}</div>
    </form>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import useLogin from "../composables/useLogin";

const { login, error } = useLogin();
const router = useRouter();
const email = ref("");
const password = ref("");
const handleSubmit = async () => {
  await login(email.value, password.value);
  if (!error.value) {
    router.push("/");
  }
};
</script>

<style lang="scss">
@import "../assets/base.scss";
</style>
