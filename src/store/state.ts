export type Tags = 'team' | 'low' | 'medium' | 'high' | 'update'

export interface ITodoListAction {
  id: string
  type: string
  task: ITodoItem
  todoList: ITodoItem[]
  editTask: ITodoItem
  checked: boolean
  search: string
  filter: string
}

export interface ITodoItem {
  id: string
  title: string
  description: string
  date?: string
  tag: string[]
  checked: boolean
  important: boolean
}

export interface IEditTask {
  title: ''
  tag: []
  description: ''
  checked: false
  important: false
}

export interface ITodoList {
  todoList: ITodoItem[]
  search: string
  filter: string
}

export interface IRootState {
  todo: ITodoList
}
