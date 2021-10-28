import TodoItem from './TodoItem';

function TodoList({ todos, toggleDone, removeTodo }) {
  return (
    <ul>
      {/* {todos.map((todo) => <li>{todo.title}</li>)} */}
      {/* iterate over todos... create an li for each... show the todo title inside... */}
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleDone={toggleDone}
          removeTodo={removeTodo}
        />
      ))}
    </ul>
  )
}

export default TodoList;