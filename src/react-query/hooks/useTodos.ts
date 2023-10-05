
import axios from 'axios'
import { useQuery } from '@tanstack/react-query';

export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const useTodo = () => useQuery<Todo[], Error>({
    queryKey: ['todos'],
    queryFn: () => axios
            .get(`https://jsonplaceholder.typicode.com/todos`)
            .then(res => res.data),
    staleTime: 1 * 60 * 1000,
})
 
export default useTodo;