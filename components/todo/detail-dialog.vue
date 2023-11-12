<template>
  <v-dialog v-model="modelValue">
    <v-card>
      <v-card-item>
        <v-card-title>test</v-card-title>
      </v-card-item>
      <v-card-text>
        <bubble-menu v-if="editor" :editor="editor" :tippy-options="{ duration: 100 }">
          <v-btn size="small" rounded="0" icon="mdi-format-bold" @click="editor.chain().focus().toggleBold().run()"></v-btn>
          <v-btn size="small" rounded="0" icon="mdi-format-strikethrough-variant" @click="editor.chain().focus().toggleStrike().run()"></v-btn>
          <v-btn size="small" rounded="0" icon="mdi-format-italic" @click="editor.chain().focus().toggleItalic().run()"></v-btn>
        </bubble-menu>
        <editor-content :editor="editor"></editor-content>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script setup lang="ts">
import { BubbleMenu, Editor, EditorContent } from '@tiptap/vue-3'
import { StarterKit } from '@tiptap/starter-kit'
const props = defineProps<{ isOpen: boolean }>()
const editor = new Editor({
  content: 'aaa',
  extensions: [
    StarterKit
  ]
})
onBeforeUnmount(() => editor.destroy())
</script>