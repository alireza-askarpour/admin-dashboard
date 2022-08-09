import { useDispatch, useSelector } from 'react-redux'

import { classNames } from 'utils/classNames'
import { useAddTodoModal } from 'providers/AddTodoModeal'
import { filterTodoListAction } from 'store/actions/todo'
import { listGroupFilters, listGroupLabels } from 'constants/todo_list_group'

import ListGroupItem from './ListGroupItem'
import AddTodoModal from './AddTodoModal'

interface ITodoSidebarProps {
  width?: boolean
  className?: string
  onClickItem?: () => any
}

const TodoSidebar = ({ width, className, onClickItem }: ITodoSidebarProps) => {
  const dispatch = useDispatch()

  const { filter } = useSelector((state: any) => state.todo)

  const { openAddModal } = useAddTodoModal()

  const handleListGroupItemClick = (filter: string) => {
    dispatch(filterTodoListAction(filter))
    onClickItem && onClickItem()
  }

  return (
    <section
      className={classNames(
        'h-full border-r border-r-[#3b4253]',
        'bg-[#283046] overflow-y-auto',
        width ? width : 'w-[260px]',
        className,
      )}
    >
      {/* Add task sidebar modal */}
      <AddTodoModal />

      <div className="p-5">
        {/* Add task button */}
        <button
          className={classNames(
            'px-5 py-[9px]',
            'w-full bg-[#7367f0]',
            'text-white font-medium text-sm',
            'rounded-md hover:shadow-indigo',
            'transition-shadow duration-300',
          )}
          onClick={openAddModal}
        >
          Add Task
        </button>
      </div>

      <section>
        {/* List group filters */}
        <ul className="text-sm mb-11">
          {listGroupFilters.map((item, index) => (
            <ListGroupItem
              key={index}
              icon={item.icon}
              title={item.title}
              active={item.value === filter}
              value={item.value}
              onClick={handleListGroupItemClick}
            />
          ))}
        </ul>

        <div>
          <h6 className="uppercase text-[#676d7d] text-[11px] mb-4 font-medium px-5">
            Tags
          </h6>
        </div>

        {/* List group labels */}
        <ul className="text-sm mb-6">
          {listGroupLabels.map((item, index) => (
            <ListGroupItem
              key={index}
              color={item.color}
              title={item.title}
              active={item.value === filter}
              value={item.value}
              onClick={handleListGroupItemClick}
            />
          ))}
        </ul>
      </section>
    </section>
  )
}

export default TodoSidebar
