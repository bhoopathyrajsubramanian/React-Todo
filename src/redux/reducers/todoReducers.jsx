import {
  ADD_LIST,
  ADD_SUB_TODO,
  ADD_TODO,
  CHANGE_SUBTODO_STATE,
  CHANGE_TODO_IMPORTANT,
  CHANGE_TODO_STATE,
  COUNT_TODO,
  REMOVE_SUB_TODO,
  REMOVE_TODO,
  SET_DUE_DATE,
} from "../actions/actionType";

let todoList = [
  {
    id: 0,
    name: "My Day",
    todo: [],
    count: 0,
  },
  {
    id: 1,
    name: "Important",
    todo: [],
    count: 0,
  },
  {
    id: 2,
    name: "Planned",
    todo: [],
    count: 0,
  },
  {
    id: 3,
    name: "Assigned to me",
    todo: [],
    count: 0,
  },
  {
    id: 4,
    name: "Flagged email",
    todo: [],
    count: 0,
  },
  {
    id: 5,
    name: "Task",
    todo: [],
    count: 0,
  },
];

const data = localStorage.getItem("todoLists");
if (data !== todoList && data) {
  todoList = JSON.parse(data);
}

const todoReducer = (state = todoList, action) => {
  switch (action.type) {
    case ADD_LIST:
      return [...state , action.payload.list];
    case ADD_TODO:  
      return state.map((list) =>
        list.id === action.payload.id
          ? {
              ...list,
              todo: [...list.todo, action.payload.todoName],
            }
          : list
      );

    case ADD_SUB_TODO:
      return state.map((list) =>
        list.id === action.payload.listId
          ? {
              ...list,
              todo: list.todo.map((todo) =>
                todo.id === action.payload.todoId
                  ? {
                      ...todo,
                      subTodo: [...todo.subTodo, action.payload.subTodo],
                    }
                  : todo
              ),
            }
          : list
      );
    case CHANGE_TODO_STATE:
      return state.map((list) =>
        list.id === action.payload.listId
          ? {
              ...list,
              todo: list.todo.map((todo) =>
                todo.id === action.payload.todoId
                  ? {
                      ...todo,
                      isCompleted: !todo.isCompleted,
                    }
                  : todo
              ),
            }
          : list
      );
    case CHANGE_SUBTODO_STATE:
      return state.map((list) =>
        list.id === action.payload.listId
          ? {
              ...list,
              todo: list.todo.map((todo) =>
                todo.id === action.payload.todoId
                  ? {
                      ...todo,
                      subTodo: todo.subTodo.map((subTodo) =>
                        subTodo.id === action.payload.subTodoId
                          ? {
                              ...subTodo,
                              isCompleted: !subTodo.isCompleted,
                            }
                          : subTodo
                      ),
                    }
                  : todo
              ),
            }
          : list
      );

    case REMOVE_TODO:
      return state.map((list) =>
        list.id === action.payload.listId
          ? {
              ...list,
              todo: list.todo.filter(
                (todo) => todo.id !== action.payload.todoId
              ),
            }
          : list
      );
    case CHANGE_TODO_IMPORTANT:
      return state.map((list) =>
        list.id === action.payload.listId
          ? {
              ...list,
              todo: list.todo.map((todo) =>
                todo.id === action.payload.todoId
                  ? {
                      ...todo,
                      isImportant: !todo.isImportant,
                    }
                  : todo
              ),
            }
          : list
      );

    case COUNT_TODO:
      return state.map((list) =>
        list.id === action.payload.listId
          ? {
              ...list,
              count: action.payload.count,
            }
          : list
      );
    case REMOVE_SUB_TODO:
      return state.map((list) =>
        list.id === action.payload.listId
          ? {
              ...list,
              todo: list.todo.map((todo) =>
                todo.id === action.payload.todoId
                  ? {
                      ...todo,
                      subTodo: todo.subTodo.filter(
                        (subTodo) => subTodo.id !== action.payload.subTodoId
                      ),
                    }
                  : todo
              ),
            }
          : list
      );
    case SET_DUE_DATE:
     return state.map((list) =>
     list.id === action.payload.listId
       ? {
           ...list,
           todo: list.todo.map((todo) =>
             todo.id === action.payload.todoId
               ? {
                   ...todo,
                   dueDate : action.payload.dueDate
                 }
               : todo
           ),
         }
       : list
   );

    default:
      return state;
  }
};

export default todoReducer;
