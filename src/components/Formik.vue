<template>
  <slot
    :values="state.values"
    :errors="state.errors"
    :isSubmitting="isSubmitting"
    :handleSubmit="handleSubmit"
    @update:values="state.values[$event.name] = $event.value"
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

const emit = defineEmits(["submit"]);

const handleSubmit = (values: Object) => {
  console.log("handleSubmit", values)
  state.errors = props.validate(values);
  if (Object.keys(state.errors).length) {
    return;
  }
  submitted.value = true;
  emit("submit", state.values, submitted);
};


</script>
