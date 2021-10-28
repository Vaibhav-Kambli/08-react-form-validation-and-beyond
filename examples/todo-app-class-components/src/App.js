import { Component } from 'react';
import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }

  addTodo = (newTodo) => {
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  };

  toggleDone = (id) => {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          is_done: !todo.is_done,
        };
      }
      return todo;
    });
    this.setState({
      todos: updatedTodos,
    });
  };

  removeTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  };

  removeDoneTodos = () => {
    this.setState({
      todos: this.state.todos.filter((todo) => !todo.is_done)
    });
  };

  markAllDone = () => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (!todo.is_done) {
          return {
            ...todo,
            is_done: true,
          };
        }
        return todo;
      })
    });
  };

  render() {
    return (
      <div>
        <NewTodoForm addTodo={this.addTodo} />
        <button onClick={this.markAllDone}>Mark All Done</button>
        <button onClick={this.removeDoneTodos}>Remove Done</button>
        <TodoList
          todos={this.state.todos}
          toggleDone={this.toggleDone}
          removeTodo={this.removeTodo}
        />
      </div>
    );
  } 
}

export default App;
