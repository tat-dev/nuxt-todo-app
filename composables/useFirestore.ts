import { getAuth } from "firebase/auth";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, getFirestore, onSnapshot, setDoc } from "firebase/firestore";
import { Todo } from "~/interfaces/todo";

export function useFirestore() {
  const db = getFirestore(getAuth().app)
  const todoRef = collection(db, 'todo')
  const todos = ref<Todo[]>([])

  /** TODO一覧取得 */
  const getTodos = () => getDocs(todoRef)
  /** TODO新規作成 */
  const addTodo = (body: Todo) => addDoc(todoRef, body)
  /** TODO編集 */
  const setTodo = (todoRef: any, body: Todo) => setDoc(todoRef, body)
  /** TODO削除 */
  const deleteTodo = (todoRef: any) => deleteDoc(todoRef)
  /** TODO一覧リアルタイム更新 */
  const updateTodos = onSnapshot(todoRef, (snapshot) => {
    todos.value = snapshot.docs.map(res => ({ ...res.data(), id: res.id } as Todo))
    console.log(todos.value)
  })

  onUnmounted(() => updateTodos())

  return { todos, todoRef, getTodos, addTodo, setTodo, deleteTodo }
}