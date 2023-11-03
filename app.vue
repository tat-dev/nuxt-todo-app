<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
import { getAuth, onAuthStateChanged, signInAnonymously } from '@firebase/auth';
import { collection, getFirestore, doc, getDoc } from '@firebase/firestore';
const { token } = useAuth()

onMounted(() => {
  const auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    // ログインしていない場合
    if (!user) {
      // 匿名ログイン
      // signInAnonymously(auth).then(res => console.log(res))
      console.log('ログインしていない')
    }
    // ログインしている場合
    else {
      // firestoreからユーザーのドキュメント情報取得
      // ドキュメント無ければ新規作成する（そのドキュメントをアプリのユーザー情報とする）
      const db = getFirestore(auth.app)
      const docRef = doc(db, 'todo/1')
      // getDoc(docRef).then(res => console.log(res))
      user.getIdToken().then(idToken => token.value = idToken)
    }
  })
})
</script>
