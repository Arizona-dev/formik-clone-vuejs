<script setup>
import Formik from "./components/Formik.vue";
import Field from "./components/Field.vue";
const validate = (values) => {
  if (!values.username) {
    return { username: "Username is required" };
  }
  if (!values.cgu) {
    return { cgu: "CGU is required" };
  }
  if (!values.date) {
    return { date: "Date is required" };
  }
  if (!values.user) {
    return { user: "User is required" };
  }
  return {};
};
const submit = (values) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
      alert(JSON.stringify(values));
    }, 2000);
  });
};
</script>

<template>
  <Formik
    :initialValues="{ username: 'Username', cgu: false, date: '2021-01-01', user: 1 }"
    :validate="validate"
    :submit="submit"
  >
    <template #default="{ values, errors, submitted, handleSubmit }">
      <form @submit.prevent="handleSubmit(values)">
        <div v-if="errors.username">{{ errors.username }}</div>
        <Field v-model="values.username" name="username" type="text">
        </Field>
        <div v-if="errors.cgu">{{ errors.cgu }}</div>
        <Field v-model="values.cgu" name="cgu" type="checkbox">
        </Field>
        <div v-if="errors.date">{{ errors.date }}</div>
        <Field v-model="values.date" name="date" type="date">
          <option value="1">Farid</option>
          <option value="2">Oliwier</option>
        </Field>
        <div v-if="errors.user">{{ errors.user }}</div>
        <Field v-model="values.user" name="user" component="select">
          <option value="1">Farid</option>
          <option value="2">Oliwier</option>
        </Field>
        <button type="submit" :disabled="submitted">Submit</button>
      </form>
    </template>
  </Formik>
</template>

<style scoped></style>
