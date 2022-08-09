import { Dispatch } from 'redux'
import * as types from '../types'
import { ITodoItem, IRootState } from '../state'

export const addTaskAction =
  (todoItem: ITodoItem) => (dispatch: Dispatch, getState: () => IRootState) => {
    dispatch({ type: types.ADD_TASK, task: todoItem })

    localStorage.setItem('todoList', JSON.stringify(getState().todo.todoList))
  }

export const editTaskAction =
  (editTask: ITodoItem) => (dispatch: Dispatch, getState: () => IRootState) => {
    dispatch({ type: types.EDIT_TASK, editTask })

    localStorage.setItem('todoList', JSON.stringify(getState().todo.todoList))
  }

export const checkedTaskAction =
  (id: string, checked: boolean) => (dispatch: Dispatch, getState: () => IRootState) => {
    dispatch({ type: types.CHECKED_TASK, id, checked })

    localStorage.setItem('todoList', JSON.stringify(getState().todo.todoList))
  }

export const removeTaskAction =
  (id: string) => (dispatch: Dispatch, getState: () => IRootState) => {
    dispatch({ type: types.REMOVE_TASK, id })

    localStorage.setItem('todoList', JSON.stringify(getState().todo.todoList))
  }

export const searchTaskAction =
  (search: string) => (dispatch: Dispatch, getState: () => IRootState) => {
    dispatch({ type: types.SEARCH_TASK, search })

    localStorage.setItem('todoList', JSON.stringify(getState().todo.todoList))
  }

export const filterTodoListAction =
  (filter: string) => (dispatch: Dispatch, getState: () => IRootState) => {
    dispatch({ type: types.FILTER_TODO_LIST, filter })

    localStorage.setItem('todoList', JSON.stringify(getState().todo.todoList))
  }
