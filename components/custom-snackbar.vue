<template>
  <v-snackbar :color="color" v-model="state" :timeout="2000">
    <v-icon v-if="color == 'red'" icon="mdi-alert-circle"></v-icon>
    {{ message }}
  </v-snackbar>
</template>
<script setup lang="ts">
const { state, message, color } = useSnackbar()
</script>