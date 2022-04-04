import * as types from '../types'
import { ITodoListAction, ITodoItem } from '../state'

const initialValue = {
  todoList: [],
  search: '',
  filter: '',
}

export const todoReducer = (state = initialValue, action: ITodoListAction) => {
  switch (action.type) {
    case types.ADD_TASK:
      return {
        ...state,
        todoList: [action.task, ...state.todoList],
      }

    case types.EDIT_TASK:
      const updatedTask: ITodoItem = action.editTask

      const editTaskIndex = state.todoList.findIndex(
        (item: ITodoItem) => item.id === updatedTask.id,
      )

      const todoListUpdated = [...state.todoList]
      const prevTask: ITodoItem = todoListUpdated[editTaskIndex]

      prevTask.tag = updatedTask.tag
      prevTask.title = updatedTask.title
      prevTask.checked = updatedTask.checked
      prevTask.important = updatedTask.important
      prevTask.description = updatedTask.description

      return {
        ...state,
        todoList: todoListUpdated,
      }

    case types.CHECKED_TASK:
      const checkeTaskIndex = state.todoList.findIndex(
        (item: ITodoItem) => item.id === action.id,
      )

      const updatedTodoList = [...state.todoList]
      const previousTask: ITodoItem = updatedTodoList[checkeTaskIndex]

      if (action.checked) {
        previousTask.checked = true
      } else {
        previousTask.checked = false
      }

      return { ...state, todoList: updatedTodoList }

    case types.REMOVE_TASK:
      const updatedTodos = state.todoList.filter(
        (item: ITodoItem) => item.id !== action.id,
      )

      return {
        ...state,
        todoList: updatedTodos,
      }

    case types.SEARCH_TASK:
      return {
        ...state,
        search: action.search,
      }

    case types.FILTER_TODO_LIST:
      return {
        ...state,
        filter: action.filter,
      }

    default:
      return state
  }
}
