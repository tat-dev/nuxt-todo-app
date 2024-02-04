<template>
  <h1>TODO一覧</h1>
  <todo-form :is-edit="false" @add="onAdd" />
  <todo-card v-for="todo in todos" :todo="todo" @done="onDone" @update="onUpdate()" @delete="onDelete" />
</template>
<script setup lang="ts">
import { Todo } from '~/interfaces/todo';

const statusObj = commonConstants().STATUS_CD
const { todos, addTodo, doneTodo, deleteTodo } = useFirestore()
const snackbar = useSnackbar()

onMounted(() => {

})

watch(todos, () => console.log('watch'))

/** TODO追加 */
function onAdd(value: string) {
  const todo: Todo = { name: value, statusCd: statusObj.NOT_YET }
  addTodo(todo).then(() => snackbar.add('TODOを登録しました'))
}

/** TODO実行 */
function onDone(id: string) {
  doneTodo(id).then(() => snackbar.add('TODOを完了しました'))
}

/** TODO編集 */
function onUpdate() {
  console.log('update')
}

/** TODO削除 */
function onDelete(id: string) {
  deleteTodo(id).then(() => snackbar.add('TODOを削除しました'))
}

</script>