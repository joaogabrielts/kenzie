import { useContext } from "react";
import { createContext, useState } from "react";
import { UserContext } from "./UserContext";
import { api } from "../services/api";
import { useQuery } from "@tanstack/react-query";

export const PostContext = createContext({});

export const PostProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const [editingPost, setEditingPost] = useState(null);

  const { data: postList } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const { data } = await api.get("/news");
      return data;
    },
  });

  console.log(editingPost);

  const postCreate = async (formData) => {
    try {
      const newPost = { ...formData, author: user.name };

      const token = localStorage.getItem("@TOKEN");

      const { data } = await api.post("/news", newPost, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setPostList([...postList, data]);
    } catch (error) {
      console.log(error);
    }
  };

  const postUpdate = async (formData) => {
    try {
      const token = localStorage.getItem("@TOKEN");

      const { data } = await api.patch(`/news/${editingPost.id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const newPostList = postList.map((post) => {
        if (post.id === editingPost.id) {
          return data;
        } else {
          return post;
        }
      });

      setPostList(newPostList);
      setEditingPost(null);
    } catch (error) {
      console.log(error);
    }
  };

  const postDelete = async (deletingId) => {
    try {
      const token = localStorage.getItem("@TOKEN");

      await api.delete(`/news/${deletingId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const newPostList = postList.filter((post) => post.id !== deletingId);

      alert("Exclusão realizada com sucesso!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PostContext.Provider
      value={{
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
  );
};
