<template>
  <h1>こんさん</h1>
  <todo-form :is-edit="false" @add="onAdd" />
  <todo-card v-for="todo in todos" :todo="todo" @done="onDone()" @update="onUpdate()" @delete="onDelete" />
</template>
<script setup lang="ts">
import { Todo } from '~/interfaces/todo';

const statusObj = commonConstants().STATUS_CD
const { todos, addTodo } = useFirestore()

onMounted(() => {

})

watch(todos, () => console.log('watch'))

/** TODO追加 */
function onAdd(value: string) {
  const todo: Todo = { name: value, statusCd: statusObj.NOT_YET }
  addTodo(todo).then(() => console.log('aaa'))
}

/** TODO実行 */
function onDone() {
  console.log('done')
}

/** TODO編集 */
function onUpdate() {
  console.log('update')
}

/** TODO削除 */
function onDelete() {
  console.log('delete')
}

</script>