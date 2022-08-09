import { useState, useEffect, ChangeEvent, SyntheticEvent } from 'react'
import { useDispatch } from 'react-redux'

import { editTaskAction, removeTaskAction } from 'store/actions/todo'
import { ITodoItem } from 'store/state'
import { classNames } from 'utils/classNames'

import Icon from '../../Shared/Icon'
import Textarea from '../../Shared/Textarea'
import TextField from '../../Shared/TextField'
import MultiSelect from '../../Shared/MultiSelect'
import SidebarModal from '../../Shared/SidebarModal'

const selectOptions = ['team', 'low', 'medium', 'high', 'update']

interface IEditTodoModalProps {
  isOpen: boolean
  getRecord: ITodoItem
  onCloseModal: () => void
}

const EditTodoModal = ({ isOpen, onCloseModal, getRecord }: IEditTodoModalProps) => {
  const dispatch = useDispatch()

  const record = getRecord

  const [title, setTitle] = useState('')
  const [tag, setTag] = useState<string[]>([])
  const [description, setDescription] = useState('')
  const [checked, setChecked] = useState<boolean | null>(null)
  const [important, setImportant] = useState(false)
  const [titleFieldError, setTitleFieldError] = useState(false)

  useEffect(() => {
    setTitle(record.title)
    setTag(record.tag)
    setDescription(record.description)
    setChecked(record.checked)
    setImportant(record.important)
  }, [isOpen, record, record.checked])

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const handleChangeTag = (selected: string[]) => {
    setTag(selected)
  }

  const handleChangeDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value)
  }

  const handleChangeChecked = () => setChecked(!checked)

  const handleChangeImportant = () => setImportant(!important)

  const handleRemoveTask = () => {
    dispatch(removeTaskAction(record.id))
    onCloseModal()
  }

  const handleResetForm = () => {
    setTitle(record.title)
    setTag(record.tag)
    setDescription(record.description)
    setImportant(record.important)
    setChecked(record.checked)
    setTitleFieldError(false)
  }

  const handleSubmitForm = (e: SyntheticEvent) => {
    e.preventDefault()

    if (!title) {
      setTitleFieldError(true)
      return
    }

    dispatch(
      editTaskAction({
        title,
        description: description,
        tag: tag,
        checked: checked ? checked : false,
        important,
        id: record.id,
      }),
    )

    onCloseModal()
  }

  return (
    <SidebarModal
      isOpen={isOpen}
      onCloseModal={onCloseModal}
      direction="right"
      width="w-[280px] sm:w-[420px]"
    >
      <div
        className={classNames(
          'flex items-center justify-between',
          'py-3 px-5 text-[14px] font-medium bg-[#161d31]',
        )}
      >
        <button
          type="button"
          className={classNames(
            'text-[13px] py-[3px] px-3 font-medium transition-colors',
            'duration-200 rounded-[5px] border',
            checked
              ? 'border-[#28c76f] text-[#28c76f] focus:bg-[#28c76f33]'
              : 'border-[#82868b] text-[#82868b] focus:bg-[#82868b33]',
          )}
          onClick={handleChangeChecked}
        >
          {checked ? 'Completed' : 'Mark Complete'}
        </button>

        <div className="flex items-center justify-end p-[2px]">
          <div className="p-1 ml-1 sm:ml-3 cursor-pointer" onClick={handleRemoveTask}>
            <Icon name="Trash" color="#d0d2d6" width={15} height={15} />
          </div>

          <div
            className="p-1 ml-1 sm:ml-3 cursor-pointer"
            onClick={handleChangeImportant}
          >
            <Icon
              name="Star"
              color={important ? '#ff9f43' : '#d0d2d6'}
              width={15}
              height={15}
              className="transition-colors duration-150"
            />
          </div>
          <div className="p-1 ml-1 sm:ml-3 cursor-pointer" onClick={onCloseModal}>
            <Icon name="Close" color="#d0d2d6" width={15} height={15} />
          </div>
        </div>
      </div>

      {/* Edit Task Form */}
      <form className="p-5" onSubmit={handleSubmitForm}>
        {/* Title Field */}
        <TextField
          id="edit-trask-title"
          value={title}
          onChange={handleChangeTitle}
          placeholder="Task Title"
          label="Title"
          error={titleFieldError}
          changeError={(error) => setTitleFieldError(error)}
          errorMessage="The Title field is required"
        />

        {/* Select Tag */}
        <div className="mb-[14px] flex flex-col items-start">
          <label className="text-xs mb-1">Title</label>
          <MultiSelect options={selectOptions} onChange={handleChangeTag} value={tag} />
        </div>

        {/* Description */}
        <Textarea
          id="edit-description"
          value={description}
          onChange={handleChangeDescription}
          name="description"
          label="Description"
          placeholder="Write your description"
          rows={5}
        ></Textarea>

        {/* Button Container */}
        <div>
          <button
            type="submit"
            className={classNames(
              'bg-[#7367f0] text-white py-[9px] px-6 mr-5',
              'hover:shadow-indigo transition-shadow duration-300',
              'rounded-md font-medium text-sm outline-0',
            )}
          >
            Update
          </button>

          <button
            type="reset"
            className={classNames(
              'py-[8px] px-6',
              'box-border border border-[#82868b] rounded-md',
              'text-[#82868b] hover:bg-[#82868b0a] focus:bg-[#82868b33]',
              'transition-colors duration-300 font-medium text-sm outline-0',
            )}
            onClick={handleResetForm}
          >
            Reset
          </button>
        </div>
      </form>
    </SidebarModal>
  )
}

export default EditTodoModal
