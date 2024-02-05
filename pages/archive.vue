<template>
  <h1>完了したTODO</h1>
  <v-list lines="two">
    <template v-for="todo in completedTodos">
      <v-list-item :title="todo.name" />
      <v-divider></v-divider>
    </template>
  </v-list>
</template>
<script setup lang="ts">
const { completedTodos } = useFirestore()
</script>