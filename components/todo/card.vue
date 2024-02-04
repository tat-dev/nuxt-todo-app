<template>
  <v-card class="my-3">
    <template v-if="isEdit">
      <v-card-text>
        <!-- <todo-form is-edit :value="inputVal" @update="update($event)" @blur="isInput = false"></todo-form> -->
        <v-text-field label="TODOを編集" variant="underlined" :autofocus="isEdit" v-model="inputVal" ref="input" @keyup.enter="$event.target.blur()" @blur="update"></v-text-field>
      </v-card-text>
    </template>
    <template v-else>
      <v-card-title>
        <span class="cursor-pointer" @click="isOpenDialog = true">{{ inputVal }}</span>
      </v-card-title>
    </template>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn icon><v-icon icon="mdi-check" color="green-darken-2" variant="text" @click="$emit('done', todo.id!)" /></v-btn>
      <v-btn icon><v-icon icon="mdi-pencil" variant="text" @click="isEdit = !isEdit"/></v-btn>
      <v-btn icon><v-icon icon="mdi-delete" variant="text" @click="$emit('delete', todo.id!)" /></v-btn>
    </v-card-actions>
  </v-card>
  <todo-detail-dialog v-model="isOpenDialog"></todo-detail-dialog>
</template>
<script setup lang="ts">
import { Todo } from '~/interfaces/todo';

const props = defineProps<{ todo: Todo }>()
const emits = defineEmits<{
  (e: 'done', id: string): void
  (e: 'update', value: any): void
  (e: 'delete', id: string): void
}>()
/** 編集判定 */
const isEdit = ref(false)
const isOpenDialog = ref(false)
const inputVal = ref(props.todo.name)

/** 編集時 */
function update() {
  emits('update', inputVal.value)
  isEdit.value = false
}

</script>