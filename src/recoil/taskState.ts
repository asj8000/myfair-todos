import { atom } from "recoil";
import { TodoTask } from "../types/todoTask";

export const todoState = atom<TodoTask[]>({
  key: "todoState",
  default: [],
});
