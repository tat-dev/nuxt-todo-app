<template>
  <template v-if="isEdit">
    <v-text-field label="TODOを編集" variant="underlined" :autofocus="isEdit" v-model="inputVal"
    @keyup.enter="onEdit()" />
  </template>
  <template v-else>
    <v-text-field label="TODOを追加" variant="underlined" :autofocus="isEdit" v-model="inputVal" append-inner-icon="mdi-plus"
    @keyup.enter="onAdd()" @click:append-inner="onAdd()" />
  </template>
</template>
<script setup lang="ts">
const props = defineProps<{
  isEdit: boolean,
  value?: string,
}>()
const emits = defineEmits<{
  (e: 'update', value: string): void
  (e: 'add', value: string): void
}>()
const inputVal = ref(props.value)
/** TODO追加 */
function onAdd() {
  if (!inputVal.value) return
  emits('add', inputVal.value)
  inputVal.value = ''
}
/** TODO編集 */
function onEdit() {
  if (!inputVal.value) return
  emits('update', inputVal.value)
  inputVal.value = ''
}

</script>