<template>
  <v-app>
    <!-- TODO: ヘッダー部コンポーネント化 -->
    <v-app-bar color="primary" density="comfortable" elevation="1">
      <v-app-bar-nav-icon color="background" @click="drawer = !drawer" />
      <v-app-bar-title>TODO APP</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn>a</v-btn>
      <login-button />
    </v-app-bar>
    <!-- TODO: サイドメニューコンポーネント化 -->
    <v-navigation-drawer v-model="drawer">
      <v-list>
        <v-list-item v-for="menu in sideMenus" :prepend-icon="menu.icon" :title="menu.title" :value="menu.value" :to="menu.path"></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container class="w-75">
        <slot />
      </v-container>
    </v-main>
    <v-footer app>2023-HELLCAT</v-footer>
    <v-overlay class="align-center justify-center" v-model="isLoading" close-on-back="false">
      <v-progress-circular color="primary" indeterminate size="50"></v-progress-circular>
    </v-overlay>
    <custom-snackbar />
  </v-app>
</template>
<script setup lang="ts">
const sideMenus = [
  { icon: 'mdi-view-dashboard', title: 'TODO', value: 'home', path: '/' },
  { icon: 'mdi-archive', title: 'アーカイブ', value: 'archive', path: '/archive' },
  { icon: 'mdi-cog', title: '設定', value: 'setting', path: '/' },
  
]
/** ローディングオーバーレイ表示用 */
const isLoading = utilFunc().isLoading
const drawer = ref(false)
</script>