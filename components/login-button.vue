<template>
  <template v-if="!user">
    <v-btn color="background" @click="isDialog = true">
      <v-icon start color="background" icon="mdi-login" />
      ログイン
    </v-btn>
  </template>
  <template v-else>
    <v-btn color="background" @click="onLogout()">
      ログアウト
    </v-btn>
  </template>
  <v-dialog v-model="isDialog" width="auto">
    <v-card>
      <v-card-title>TODO APPにログイン</v-card-title>
      <v-card-text>
        <v-form v-model="loginData.form" @keyup.enter="onLogin()">
          <v-text-field type="email" label="メールアドレス" v-model="loginData.email" :rules="[required]"></v-text-field>
          <v-text-field type="password" label="パスワード" v-model="loginData.password" :rules="[required]"></v-text-field>
          <v-btn :disabled="!loginData.form" @click="onLogin()">
            ログイン
          </v-btn>
          <v-btn>
            新規登録
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script setup lang="ts">
import { useAuth } from '~/composables/useAuth';
const { user } = useUser()
const { signIn, signOut } = useAuth()
const { required, email } = customValidator()
const isDialog = ref(false)
const loginData = ref({ form: false, email: '', password: '' })

// ダイアログ・ユーザー検知
watch([isDialog, user], (value) => {
  // ダイアログ表示時に初期化
  if (isDialog) loginData.value = { form: false, email: '', password: '' }
  // ユーザー情報がある場合、ダイアログ閉じる
  if (user && user.value) isDialog.value = false
})

/** ログインボタン押下時 */
const onLogin = () => {
  signIn(loginData.value.email, loginData.value.password)
}

/** ログアウトボタン押下時 */
const onLogout = () => {
  signOut()
}
</script>