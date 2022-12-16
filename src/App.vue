<script setup>
import Formik from "./components/Formik.vue";
const validate = (values) => {
  return {};
};
</script>

<template>
  <Formik
    :initialValues="{ username: 'test' }"
    :validate="validate"
  >
    <template #default="{ values, errors, submitted, handleSubmit }">
      <form @submit.prevent="handleSubmit(values)">
        <Field name="username" component="select">
          <option value="1">Farid</option>
          <option value="1">Oliwier</option>
        </Field>
        <button type="submit" :disabled="submitted">Submit</button>
      </form>
    </template>
  </Formik>
</template>

<style scoped></style>
