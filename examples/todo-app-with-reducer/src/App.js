import { useReducer } from 'react';
import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';

const ACTION_TYPES = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_DONE: 'TOGGLE_DONE',
  REMOVE_TODO: 'REMOVE_TODO',
};

function reducer(state, action) {
  switch(action.type) {
    case ACTION_TYPES.ADD_TODO: {
      return {
        todos: [...state.todos, action.payload],
      };
    }
    case ACTION_TYPES.TOGGLE_DONE: {
      return {
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              is_done: !todo.is_done,
            };
          }
          return todo;
        })
      };
    }
    case ACTION_TYPES.REMOVE_TODO: {
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    }
    case 'FILTER_DONE': {
      return {
        todos: state.todos.filter((todo) => !todo.is_done),
      };
    }
    case 'MARK_ALL_DONE': {
      return {
        todos: state.todos.map((todo) => {
          if (!todo.is_done) {
            return {
              ...todo,
              is_done: true,
            };
          }
          return todo;
        }), 
      };
    }
    default:
      return state;
  }
}

const initialState = {
  todos: [],
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <NewTodoForm addTodo={(newTodo) => dispatch({ type: ACTION_TYPES.ADD_TODO, payload: newTodo })} />
      <button onClick={() => dispatch({ type: 'MARK_ALL_DONE' })}>Mark All Done</button>
      <button onClick={() => dispatch({ type: 'FILTER_DONE' })}>Remove Done</button>
      <TodoList
        todos={state.todos}
        toggleDone={(id) => dispatch({ type: ACTION_TYPES.TOGGLE_DONE, payload: id })}
        removeTodo={(id) => dispatch({ type: ACTION_TYPES.REMOVE_TODO, payload: id })}
      />
    </div>
  );
}

export default App;
