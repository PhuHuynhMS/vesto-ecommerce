<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Form, ErrorMessage, Field } from 'vee-validate';
import { getSubmitFn } from '@/helper';
import * as yup from 'yup';

const loginForm = yup.object().shape({
  phoneNumber: yup.string().required('Phone number is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, ' Password must be at least 8 characters'),
});

const emit = defineEmits<{
  (e: 'submitForm', phoneNumber: string, password: string): void;
}>();

const submitForm = getSubmitFn(loginForm, (values) => {
  emit('submitForm', values.phoneNumber, values.password);
});
</script>
<template>
  <div class="form-container bg-white rounded shadow-sm p-4">
    <div class="text-center mb-4">
      <h1 class="text-primary">Login</h1>
      <p class="text-secondary">Access your account</p>
    </div>
    <Form @submit="submitForm" :validation-schema="loginForm">
      <!-- Phone Number -->
      <div class="mb-3">
        <label for="phone-number" class="form-label text-muted"
          >Phone Number</label
        >
        <Field
          type="text"
          class="form-control"
          name="phoneNumber"
          id="phone-number"
          placeholder="Enter your phone number"
        />
        <ErrorMessage name="phoneNumber" class="error-message" />
      </div>
      <!-- Password -->
      <div class="mb-3">
        <label for="password" class="form-label text-muted">Password</label>
        <Field
          type="password"
          class="form-control"
          name="password"
          id="password"
          placeholder="Enter your password"
        />
        <ErrorMessage name="password" class="error-message" />
      </div>
      <!-- Forgot Password -->
      <div class="text-end">
        <a href="#" class="text-decoration-none text-primary small"
          >Forgot password?</a
        >
      </div>
      <!-- Login Button -->
      <div class="d-grid mt-4">
        <button class="btn btn-primary btn-login">Login</button>
      </div>
      <!-- Divider -->
      <div class="text-center my-3">
        <span class="text-muted">or</span>
      </div>
      <!-- Google Login -->
      <div class="d-grid">
        <button class="btn btn-outline-secondary">
          <FontAwesomeIcon :icon="faGoogle" class="me-2" />
          Continue with Google
        </button>
      </div>
      <!-- Register -->
      <div class="row mt-3 text-end text-muted">
        <p>
          You don't have an account?
          <a href="/register" class="text-primary">Register</a>
        </p>
      </div>
    </Form>
  </div>
</template>
<style scoped>
.form-container {
  max-width: 400px;
  width: 100%;
  margin: auto;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: #fff;
}

/* Header */
h1 {
  font-size: 1.75rem;
  font-weight: 700;
  color: #007bff;
}

p {
  font-size: 0.875rem;
}

/* Login Button */
.btn-login {
  font-size: 1rem;
  font-weight: 600;
  padding: 0.75rem;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;
}

/* Google Button */
.btn-outline-secondary {
  font-size: 0.9rem;
  padding: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
