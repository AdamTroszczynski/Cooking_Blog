<template>
  <h3>{{ msg }}</h3>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';

const msg: Ref<string> = ref('Hello World');
</script>
