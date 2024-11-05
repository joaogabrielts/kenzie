import { atom } from "jotai";


const savedTheme = localStorage.getItem("darkMode") === "true";

export const darkModeAtom = atom<boolean>(savedTheme)