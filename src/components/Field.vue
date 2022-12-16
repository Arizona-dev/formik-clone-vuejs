<script setup lang="ts">
defineProps({
  component: {
    type: String,
    required: false,
    default: "input",
  },
  type: {
    // define type as html input type
    type: String,
    required: false,
    default: "text",
  },
  value: {
    type: String,
    required: false,
    default: "",
  },
});
</script>

<template>
  <component
    :is="component"
    :type="type"
    :value="value"
    :checked="value"
    @input="$emit('update:value', $event)"
  >
    <slot></slot>
  </component>
</template>
