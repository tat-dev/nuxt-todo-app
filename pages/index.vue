<template>
  <h1>こんさん</h1>
  <todo-form :is-edit="false" @add="onAdd" />
  <todo-card v-for="todo in todos" :todo="todo" />
</template>
<script setup lang="ts">
import { Todo } from '~/interfaces/todo';

const statusObj = commonConstants().STATUS_CD
const { todos, addTodo } = useFirestore()

onMounted(() => {

})

watch(todos, () => console.log('watch'))

/** TODO追加時 */
function onAdd(value: string) {
  const todo: Todo = { name: value, statusCd: statusObj.NOT_YET }
  addTodo(todo).then(() => console.log('aaa'))
}

</script>