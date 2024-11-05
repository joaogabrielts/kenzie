import { useContext } from "react";
import { PostCreateForm } from "./components/PostCreateForm";
import { TodoList } from "./components/TodoList";
import { TodoContext } from "./providers/TodoContext";
import { EditList } from "./components/EditList";


function App() {
  const {editingPost} = useContext(TodoContext)
  return (
    <>
      <PostCreateForm />
      <TodoList />
      {editingPost ? <EditList/> : null }
     
    </>
  );
}

export default App;
