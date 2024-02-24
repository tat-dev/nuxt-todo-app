<template>
  <v-card class="my-3" @click="isOpenDialog = true">
    <template v-if="isEdit">
      <v-card-text>
        <v-text-field label="TODOを編集" variant="underlined" :autofocus="isEdit" v-model="todo.name" ref="input" @keyup.enter="$event.target.blur()" @blur="update"></v-text-field>
      </v-card-text>
    </template>
    <template v-else>
      <v-card-title>
        <span>{{ todo.name }}</span>
      </v-card-title>
    </template>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn icon @click.stop="$emit('done', todo.id!)"><v-icon icon="mdi-check" color="green-darken-2" variant="text" /></v-btn>
      <v-btn icon @click.stop="isEdit = !isEdit"><v-icon icon="mdi-pencil" variant="text" /></v-btn>
      <v-btn icon @click.stop="$emit('delete', todo.id!)"><v-icon icon="mdi-delete" variant="text" /></v-btn>
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

/** 編集時 */
function update() {
  emits('update', props.todo.name)
  isEdit.value = false
}

</script>