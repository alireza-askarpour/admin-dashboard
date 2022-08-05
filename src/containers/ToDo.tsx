import { FC, useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import TodoSidebar from '../components/Pages/Todo/TodoSidebar'
import TodoContent from '../components/Pages/Todo/TodoContent'

import { ITodoItem } from '../store/state'
import { classNames } from '../utils/classNames'

const ToDo: FC = () => {
  const { todoList, search, filter } = useSelector((state: any) => state.todo)

  const [todos, setTodos] = useState(todoList)

  useEffect(() => {
    setTodos(todoList)
  }, [todoList])

  const updateTodoList = useCallback(() => {
    let temp = todoList

    if (search) {
      temp = temp.filter((item: ITodoItem) =>
        item.title.toLowerCase().includes(search.toLowerCase()),
      )
    }

    switch (filter) {
      case 'important':
        temp = temp.filter((item: ITodoItem) => item.important)
        break

      case 'completed':
        temp = temp.filter((item: ITodoItem) => item.checked)
        break

      case 'team':
      case 'low':
      case 'medium':
      case 'high':
      case 'update':
        temp = temp.filter((item: ITodoItem) => item.tag.includes(filter))
        break

      default:
        break
    }

    setTodos(temp)
  }, [search, todoList, filter])

  useEffect(() => {
    updateTodoList()
  }, [updateTodoList])

  return (
    <section
      className={classNames(
        'w-full flex bg-[#283046]',
        'border border-[#3b4253] rounded-md',
        'h-todo-content min-h-todo-content',
      )}
    >
      <TodoSidebar className="hidden lg:block" />
      <TodoContent todoList={todos} />
    </section>
  )
}

export default ToDo
