import { createContext, useState } from "react";
import { api } from "../services/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const TodoContext = createContext({});

export const TodoProvider = ({ children }) => {
  // const [todoList, SetTodoList] = useState([]);
  const [editingPost, setEditingPost] = useState(null);
  console.log(editingPost);

  const { data: todoList } = useQuery({
    queryKey: ["list"],
    queryFn: async () => {
      const { data } = await api.get("/todos");
      return data;
    },
  });

  //useEffect(() => {
  //const getPosts = async () => {
  //try {
  // const { data } = await api.get("/todos");
  // console.log(data);
  // SetTodoList(data);
  //} catch (error) {
  //  console.log(error);
  // }
  //};
  // getPosts();
  // }, []);

  const client = useQueryClient();

  const revalidate = () => {
    client.invalidateQueries({ queryKey: ["list"] });
  };

  const postCreate = useMutation({
    mutationFn: async (formData) => {
      return await api.post("/todos", formData);
    },
    onSuccess: revalidate
  });

  const listUpdate = useMutation({
    mutationFn: async (formData) => {
      return await api.patch(`/todos/${editingPost.id}`, formData);
    },
    onSuccess: () => {
      setEditingPost(null);
      revalidate();
    },
  });

  const postDelete = useMutation({
    mutationFn: async (Id) => {
      return api.delete(`/todos/${Id}`);
    },
    onSuccess: () => {
      revalidate();
    },
  });
  return (
    <TodoContext.Provider
      value={{
        todoList,
        postCreate,
        postDelete,
        setEditingPost,
        listUpdate,
        editingPost,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
