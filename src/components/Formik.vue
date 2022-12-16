<template>
  <slot
    :values="state.values"
    :errors="state.errors"
    :submitted="submitted"
    :handleSubmit="handleSubmit"
  />
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";

const props = defineProps({
  initialValues: {
    type: Object,
    required: true,
  },
  validate: {
    type: Function,
    required: true,
  },
  submit: {
    type: Function,
    required: true,
  },
});

const state = reactive({
  values: props.initialValues,
  errors: {},
});

const submitted = ref(false);

const handleSubmit = async () => {
  submitted.value = true;
  state.errors = props.validate(state.values);
  if (Object.keys(state.errors).length) {
    submitted.value = false;
    return;
  }
  await props.submit(state.values);
  submitted.value = false;
};

</script>
