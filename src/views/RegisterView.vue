<template>
  <main class="container">
    <form @submit.prevent="handleSubmit">
      <h2>Create user</h2>
      <label for="email">E-mail:</label>
      <input
        type="email"
        name="email"
        placeholder="Typing your the best e-mail"
        v-model="email"
        required
      />
      <label for="password">Password:</label>
      <input
        type="password"
        name="password"
        placeholder="Choose your password"
        v-model="password"
        required
      />
      <button>Sign up</button>
      <p v-if="error" class="error">{{ error }}</p>
    </form>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import useSignup from "../composables/useSignup";

const email = ref("");
const password = ref("");
const { signup, error } = useSignup();
const router = useRouter();

const handleSubmit = async () => {
  await signup(email.value, password.value);
  if (!error.value) {
    router.push("/");
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/base.scss";
</style>
