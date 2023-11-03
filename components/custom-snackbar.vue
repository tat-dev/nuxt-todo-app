<template>
  <v-snackbar v-model="isSnackbar" :timeout="2000">{{ "TEST" }}</v-snackbar>
</template>
<script setup lang="ts">
const isSnackbar = ref(true)
</script>