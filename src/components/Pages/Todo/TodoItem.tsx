import { MouseEvent } from 'react'

import { ITodoItem } from 'store/state'
import { classNames } from 'utils/classNames'

import Badge from './Badge'
import Checkbox from '../../Shared/Checkbox'

interface ITodoListItemProps {
  todoItem: ITodoItem
  onClick: (data: ITodoItem) => void
  onChecked: (id: string, checked: boolean) => void
}

const TodoListItem = ({ todoItem, onClick, onChecked }: ITodoListItemProps) => {
  const { id, title, tag, date, checked } = todoItem

  const handleClickTask = (e: MouseEvent<HTMLLIElement>) => {
    onClick(todoItem)
    e.stopPropagation()
  }

  const handleChangeTask = (input: any) => {
    onChecked(id, input.checked)
  }

  return (
    <li
      className={classNames(
        'last-of-type:border-none border-b border-b-[#3b4253]',
        'lg:flex lg:justify-between lg:items-center hover:bg-[#3b4253]',
        'py-4 px-7 cursor-pointer transition-colors overflow-auto',
      )}
      onClick={handleClickTask}
    >
      <div className="flex items-start">
        <div className="flex items-center">
          <Checkbox
            checked={checked}
            onChange={handleChangeTask}
            onClick={(e) => e.stopPropagation()}
          />
          <small
            className={classNames(
              'text-sm mx-[14px] transition-colors duration-150',
              'select-none line-clamp line-clamp-6',
              checked ? 'text-[#676d7d] line-through' : 'text-[#b4b7bd]',
            )}
          >
            {title}
          </small>
        </div>
      </div>

      <div className="flex justify-between mt-4 lg:mt-0 items-center">
        <div className="flex items-center justify-end">
          {tag.length > 0 && tag.map((item: any) => <Badge key={item} text={item} />)}
        </div>
        <small className="badge-wrapper text-xs text-[#676d7d] px-3">{date}</small>
      </div>
    </li>
  )
}

export default TodoListItem
