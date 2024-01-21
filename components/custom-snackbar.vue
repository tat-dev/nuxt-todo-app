<template>
  <v-snackbar v-model="state" :timeout="2000">{{ message }}</v-snackbar>
</template>
<script setup lang="ts">
const { state, message } = useSnackbar()
</script>