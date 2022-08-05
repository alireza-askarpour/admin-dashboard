import { ChangeEvent, useState } from 'react'
import { useDispatch } from 'react-redux'

import TodoListItem from './TodoItem'
import Icon from '../../Shared/Icon'
import EditTodoModal from './EditTodoModal'
import TodoSidebar from './TodoSidebar'
import SidebarModal from '../../Shared/SidebarModal'

import { ITodoItem } from '../../../store/state'
import { checkedTaskAction, searchTaskAction } from '../../../store/actions/todo'

import { classNames } from '../../../utils/classNames'

interface ITodoContentProps {
  todoList: ITodoItem[]
}

const TodoContent = ({ todoList }: ITodoContentProps) => {
  const [openTodoSidebar, setOpenTodoSidebar] = useState(false)
  const [openEditModal, setOpenEditModal] = useState(false)
  const [getRecord, setGetRecord] = useState<ITodoItem>({
    id: '',
    title: '',
    tag: [],
    description: '',
    checked: false,
    important: false,
  })

  const dispatch = useDispatch()

  const handleCloseEditModal = () => setOpenEditModal(false)

  const handleOpenEditModal = () => setOpenEditModal(true)

  const handleOpenTodoSidebar = () => setOpenTodoSidebar(true)

  const handleCloseTodoMenu = () => setOpenTodoSidebar(false)

  const handleClickTask = (task: ITodoItem) => {
    setGetRecord(task)
    handleOpenEditModal()
  }

  const handleChangeTask = (id: string, checked: boolean) => {
    dispatch(checkedTaskAction(id, checked))
  }

  const handleChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(searchTaskAction(e.target.value))
  }

  return (
    <section
      className={classNames(
        'w-full lg:w-content-right relative',
        openTodoSidebar ? 'overflow-hidden' : 'overflow-auto',
      )}
    >
      <EditTodoModal
        isOpen={openEditModal}
        onCloseModal={handleCloseEditModal}
        getRecord={getRecord}
      />

      {/* Todo menu sidebar modal */}
      <SidebarModal
        isOpen={openTodoSidebar}
        onCloseModal={handleCloseTodoMenu}
        direction="left"
        width="w-auto"
      >
        <TodoSidebar className="lg:hidden z-50" onClickItem={handleCloseTodoMenu} />
      </SidebarModal>

      {/* Navbar menu */}
      <div className="sticky top-0 px-1 py-2 w-full flex border-b border-b-[#3b4253] bg-[#283046] z-10">
        <button
          className="ml-[2px] px-3 py-2 grid place-content-center lg:hidden"
          onClick={handleOpenTodoSidebar}
        >
          <Icon name="Menu" color="#d0d2d6" />
        </button>
        <div className="flex justify-start items-center">
          <div className="lg:pl-[14px] pr-[10px] py-2">
            <Icon name="Search" width={14} height={14} color="#676d7d" />
          </div>
          <div>
            <input
              type="text"
              className={classNames(
                'py-1 outline-none bg-transparent w-full',
                'placeholder:text-[#676d7d] text-sm',
                'border-0 focus:ring-transparent',
              )}
              placeholder="Search task"
              onChange={handleChangeSearchInput}
            />
          </div>
        </div>
      </div>

      {/* List Items */}
      <ul>
        {todoList.length > 0 ? (
          todoList.map((item: ITodoItem) => (
            <TodoListItem
              key={item.id}
              todoItem={item}
              onClick={handleClickTask}
              onChecked={handleChangeTask}
            />
          ))
        ) : (
          <p className="font-medium text-sm text-center my-6">No Items Found</p>
        )}
      </ul>
    </section>
  )
}

export default TodoContent
