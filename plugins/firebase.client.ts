import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore"
export default defineNuxtPlugin(nuxtApp => {
  const config = useRuntimeConfig()
  // Webで見かけたコードではconfig.publicは付けずにそのままプロパティ指定していた・・・
  const firebaseConfig = {
    apiKey: config.public.FIREBASE_API_KEY,
    authDomain: config.public.FIREBASE_AUTH_DOMAIN,
    projectId: config.public.FIREBASE_PROJECT_ID,
    appId: config.public.FIREBASE_APP_ID,
  }
  const app = initializeApp(firebaseConfig)
  getFirestore(app)
})