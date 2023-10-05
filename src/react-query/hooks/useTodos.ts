
import axios from 'axios'
import { useQuery } from '@tanstack/react-query';
import { CACHE_KEY_TODOS } from '../constants';

export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const useTodo = () => useQuery<Todo[], Error>({
    queryKey: CACHE_KEY_TODOS,
    queryFn: () => axios
            .get(`https://jsonplaceholder.typicode.com/todos`)
            .then(res => res.data),
    staleTime: 1 * 60 * 1000,
})
 
export default useTodo;