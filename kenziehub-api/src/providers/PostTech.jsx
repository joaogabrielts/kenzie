import toast from "react-hot-toast";
import { createContext, useContext, useState } from "react";
import { UserContext } from "./UserTechContext";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "../services/api";
import style from "./style.module.scss";

export const PostContext = createContext({});

export const PostProvider = ({ children }) => {
  const { user, revalidateUser, setErro } = useContext(UserContext);
  const [editingPost, setEditingPost] = useState(null);

  const userId = localStorage.getItem("@USERID");

  const { data: postList, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const { data } = await api.get(`/users/${userId}`);
      return data;
    },
  });

  const client = useQueryClient();

  const revalidate = async () => {
    client.invalidateQueries({ queryKey: ["posts"] });
    await refetch();
    await revalidateUser();
  };

  const postCreate = useMutation({
    mutationFn: async (formData) => {
      const newPost = { ...formData, author: user.name };
      const token = localStorage.getItem("@TOKEN");
      return await api.post("/users/techs", newPost, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: async () => {
      toast.success(
        (t) => (
          <div className={style.customToast}>
            <div className={style.toastcontent}>
              <p>Tecnologia criada com sucesso !</p>
            </div>

            <button
              className={style.closeButton}
              onClick={() => toast.dismiss(t.id)}
            >
              X
            </button>
          </div>
        ),
        {
          duration: 5000,
          closeButton: false,
        }
      );
      setErro(false);

      await revalidate();
    },
  });

  const postUpdate = useMutation({
    mutationFn: async (formData) => {
      const token = localStorage.getItem("@TOKEN");
      return await api.put(`/users/techs/${editingPost.id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: async () => {
      toast.success(
        (t) => (
          <div className={style.customToast}>
            <div className={style.toastcontent}>
              <p>Tecnologia atualizada com sucesso!</p>
            </div>

            <button
              className={style.closeButton}
              onClick={() => toast.dismiss(t.id)}
            >
              X
            </button>
          </div>
        ),
        {
          duration: 5000,
          closeButton: false,
        }
      );
      setErro(false);
      setEditingPost(null);
      await revalidate();
    },
  });

  const postDelete = useMutation({
    mutationFn: async (deletingId) => {
      const token = localStorage.getItem("@TOKEN");
      return await api.delete(`/users/techs/${deletingId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: async () => {
      toast.success(
        (t) => (
          <div className={style.customToast}>
            <div className={style.toastcontent}>
              <p>tecnologia excluída com sucesso!</p>
            </div>

            <button
              className={style.closeButton}
              onClick={() => toast.dismiss(t.id)}
            >
              X
            </button>
          </div>
        ),
        {
          duration: 5000,
          closeButton: false,
        }
      );
      setErro(false);

      await revalidate();
    },
  });

  return (
    <>
      <PostContext.Provider
        value={{
          user,
          postCreate,
          postUpdate,
          postDelete,
          postList,
          editingPost,
          setEditingPost,
        }}
      >
        {children}
      </PostContext.Provider>
    </>
  );
};
