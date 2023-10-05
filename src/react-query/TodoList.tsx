import useTodo from './hooks/useTodos';

const TodoList = () => {
  const { data, error } = useTodo()

  return (
    <ul className="list-group">
      {data?.map((todo) => (
        <li key={todo.id} className="list-group-item">
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
