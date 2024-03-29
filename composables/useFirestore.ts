import { getAuth } from "firebase/auth";
import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore, onSnapshot, orderBy, query, serverTimestamp, setDoc, updateDoc, where } from "firebase/firestore";
import { Todo } from "~/interfaces/todo";

export function useFirestore() {
  const db = getFirestore(getAuth().app)
  const todoRef = collection(db, 'todo')
  // const todosQuery = query(todoRef, where('statusCd', 'in', [commonConstants().STATUS_CD.NOT_YET, commonConstants().STATUS_CD.PROGRESS]), orderBy('createdAt'))
  const todosQuery = query(todoRef, orderBy('createdAt'))
  const todos = ref<Todo[]>([])
  const completedTodos = ref<Todo[]>([])

  /** TODO一覧取得 */
  const getTodos = () => getDocs(todosQuery)
  /** TODO新規作成 */
  const addTodo = (body: Todo) => addDoc(todoRef, { ...body, createdAt: serverTimestamp(), updateAt: serverTimestamp() })
  /** TODO編集 */
  const updateTodo = (id: string, body: Todo) => updateDoc(doc(db, 'todo', id), {...body})
  const doneTodo = (id: string) => updateDoc(doc(db, 'todo', id), { statusCd: commonConstants().STATUS_CD.COMPLETE })
  /** TODO削除 */
  const deleteTodo = (id: string) => deleteDoc(doc(db, 'todo', id))
  /** TODO一覧リアルタイム更新 */
  const updateTodos = onSnapshot(todosQuery, (snapshot) => {
    const _todos = snapshot.docs.map(res => ({ ...res.data(), id: res.id } as Todo)) 
    todos.value = _todos.filter(res => res.statusCd != commonConstants().STATUS_CD.COMPLETE)
    completedTodos.value = _todos.filter(res => res.statusCd == commonConstants().STATUS_CD.COMPLETE)
  })

  onUnmounted(() => updateTodos())

  return { todos, completedTodos, getTodos, addTodo, updateTodo, doneTodo, deleteTodo }
}