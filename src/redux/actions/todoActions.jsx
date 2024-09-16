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
} from "./actionType";

/**
 * Action creator to add a new list.
 *
 * @param {Object} list - The list object to be added.
 * @returns {Object} The action object with type and payload.
 */
export const addList = (list) => ({
  type: ADD_LIST,
  payload: { list },
});

/**
 * Action creator to add a new todo item.
 *
 * @param {string} todoName - The name of the todo item.
 * @param {string} id - The unique identifier for the todo item.
 * @returns {Object} The action object with type and payload.
 */
export const addTodo = (todoName, id) => ({
  type: ADD_TODO,
  payload: { todoName, id },
});

/**
 * Action creator to add a new sub-todo item.
 *
 * @param {string} subTodo - The sub-todo item to be added.
 * @param {string} listId - The identifier for the list to which the sub-todo belongs.
 * @param {string} todoId - The identifier for the parent todo item.
 * @returns {Object} The action object with type and payload.
 */
export const addSubTodo = (subTodo, listId, todoId) => ({
  type: ADD_SUB_TODO,
  payload: { subTodo, todoId, listId },
});

/**
 * Action creator to change the status of a todo item.
 *
 * @param {string} listId - The identifier for the list containing the todo item.
 * @param {string} todoId - The identifier for the todo item whose status is to be changed.
 * @returns {Object} The action object with type and payload.
 */
export const changeTodoStatus = (listId, todoId) => ({
  type: CHANGE_TODO_STATE,
  payload: { listId, todoId },
});

/**
 * Action creator to change the status of a sub-todo item.
 *
 * @param {string} subTodoId - The identifier for the sub-todo item whose status is to be changed.
 * @param {string} todoId - The identifier for the parent todo item.
 * @param {string} listId - The identifier for the list containing the parent todo item.
 * @returns {Object} The action object with type and payload.
 */
export const changeSubTodoStatus = (subTodoId, todoId, listId) => ({
  type: CHANGE_SUBTODO_STATE,
  payload: { subTodoId, todoId, listId },
});

/**
 * Action creator to remove a todo item.
 *
 * @param {string} listId - The identifier for the list containing the todo item.
 * @param {string} todoId - The identifier for the todo item to be removed.
 * @returns {Object} The action object with type and payload.
 */
export const removeTodo = (listId, todoId) => ({
  type: REMOVE_TODO,
  payload: { listId, todoId },
});

/**
 * Action creator to count the number of todos in a list.
 *
 * @param {string} listId - The identifier for the list.
 * @param {number} count - The number of todos in the list.
 * @returns {Object} The action object with type and payload.
 */
export const countTodo = (listId, count) => ({
  type: COUNT_TODO,
  payload: { listId, count },
});

/**
 * Action creator to remove a sub-todo item.
 *
 * @param {string} subTodoId - The identifier for the sub-todo item to be removed.
 * @param {string} todoId - The identifier for the parent todo item.
 * @param {string} listId - The identifier for the list containing the parent todo item.
 * @returns {Object} The action object with type and payload.
 */
export const removeSubTodo = (subTodoId, todoId, listId) => ({
  type: REMOVE_SUB_TODO,
  payload: { subTodoId, todoId, listId },
});

/**
 * Action creator to change the importance of a todo item.
 *
 * @param {string} todoId - The identifier for the todo item whose importance is to be changed.
 * @param {string} listId - The identifier for the list containing the todo item.
 * @returns {Object} The action object with type and payload.
 */
export const changeTodoImportant = (todoId, listId) => ({
  type: CHANGE_TODO_IMPORTANT,
  payload: { todoId, listId },
});

/**
 * Action creator to set dueDate to each todo
 *
 * @param {string} todoId - The identifier for the todo item whose importance is to be changed.
 * @param {string} listId - The identifier for the list containing the todo item.
 * @param {string} dueDate -  the dueDate that has to be added
 * @returns {Object} The action object with type and payload.
 */

export const setDueDate = (todoId, listId, dueDate) => ({
  type: SET_DUE_DATE,
  payload: { todoId, listId, dueDate },
});
