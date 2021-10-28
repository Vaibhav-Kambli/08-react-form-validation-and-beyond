function TodoItem({
  todo,
  toggleDone,
  removeTodo,
}) {
  return (
    <li className={todo.is_done ? 'done' : ''}>
      {todo.title}
      <button onClick={() => toggleDone(todo.id)}>Toggle Done</button>
      <button onClick={() => removeTodo(todo.id)}>Remove</button>
    </li>
  );
}

export default TodoItem;
