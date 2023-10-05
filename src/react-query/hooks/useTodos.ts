import axios from "axios";
import APIClient from "../services/apiClient";
import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../constants";

export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}
const apiClient = new APIClient<Todo>("/todos");

const useTodo = () =>
  useQuery<Todo[], Error>({
    queryKey: CACHE_KEY_TODOS,
    queryFn: () => apiClient.getAll(),
    staleTime: 1 * 60 * 1000,
  });

export default useTodo;
