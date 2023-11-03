<template>
  <v-card class="my-3">
    <template v-if="!isInput">
      <v-card-title>
        <span @click="isInput = true">
          {{ inputVal }}
          <!-- TODO: Hydration children mismatch warning出る -->
          <!-- <v-tooltip activator="parent" location="bottom" open-on-hover open-delay="200">クリックでTODOを編集</v-tooltip> -->
        </span>
      </v-card-title>
    </template>
    <template v-else>
      <v-card-text>
        <todo-form is-edit :value="inputVal" @update="update($event)" @blur="isInput = false"></todo-form>
      </v-card-text>
    </template>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn icon><v-icon icon="mdi-check" color="green-darken-2" variant="text" /></v-btn>
      <v-btn icon><v-icon icon="mdi-pencil" variant="text" /></v-btn>
      <v-btn icon><v-icon icon="mdi-delete" variant="text" @click="onDelete()" /></v-btn>
    </v-card-actions>
  </v-card>
</template>
<script setup lang="ts">
import { Todo } from '~/interfaces/todo';

const props = defineProps<{ todo: Todo }>()
const isInput = ref(false)
const inputVal = ref(props.todo.name)

/** TODO編集時 */
function update(value: string) {
  inputVal.value = value
  isInput.value = false
}
/** 削除ボタン押下時 */
function onDelete() {
  console.log('DELETE')
}

</script>