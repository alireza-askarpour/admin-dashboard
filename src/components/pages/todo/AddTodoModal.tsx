import React, { useState, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'

import Icon from '../../shared/Icon'
import Textarea from '../../shared/Textarea'
import TextField from '../../shared/TextField'
import MultiSelect from '../../shared/MultiSelect'
import SidebarModal from '../../shared/SidebarModal'

import { addTaskAction } from '../../../store/actions/todo'

import { useAddTodoModal } from '../../../providers/addTodoModeal'

import { classNames } from '../../../utils/classNames'

import { Tags } from '../../../store/state'

const selectOptions = ['team', 'low', 'medium', 'high', 'update']

const AddTodo = () => {
  const dispatch = useDispatch()

  const { isOpen, closeAddModal } = useAddTodoModal()

  const [title, setTitle] = useState('')
  const [tag, setTag] = useState<Tags[]>([])
  const [description, setDescription] = useState('')
  const [important, setImportant] = useState(false)
  const [titleFieldError, setTitleFieldError] = useState(false)

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const handleChangeDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value)
  }

  const handleChangeTag = (tags: Tags[]) => setTag(tags)

  const handleChangeImportant = () => setImportant(!important)

  const handleClearForm = () => {
    setTitle('')
    setTag([])
    setDescription('')
    setImportant(false)
    setTitleFieldError(false)
  }

  const handleSubmitForm = (e: React.SyntheticEvent) => {
    e.preventDefault()

    if (!title) {
      setTitleFieldError(true)
      return
    }

    dispatch(
      addTaskAction({
        id: uuidv4(),
        title,
        description: description,
        date: moment().format('MMM D'),
        tag: tag,
        checked: false,
        important,
      }),
    )

    handleClearForm()
    closeAddModal()
  }

  const closeModalHandler = () => {
    handleClearForm()
    closeAddModal()
  }

  return (
    <SidebarModal
      isOpen={isOpen}
      onCloseModal={closeModalHandler}
      direction="right"
      width="w-[280px] sm:w-[420px]"
    >
      <div
        className={classNames(
          'flex items-center justify-between py-3 px-5',
          ' bg-[#161d31] text-[14px] font-medium',
        )}
      >
        <h5>Add Task</h5>

        <div className="flex items-center justify-end p-[2px]">
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
          <div className="p-1 ml-1 sm:ml-3 cursor-pointer" onClick={closeAddModal}>
            <Icon name="Close" color="#d0d2d6" width={15} height={15} />
          </div>
        </div>
      </div>

      {/* Form */}
      <form className="p-5" onSubmit={handleSubmitForm}>
        {/* Title Field */}
        <TextField
          id="add-trask-title"
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
          <MultiSelect options={selectOptions} value={tag} onChange={handleChangeTag} />
        </div>

        {/* Description */}
        <Textarea
          id="add-description"
          value={description}
          onChange={handleChangeDescription}
          label="Description"
          name="description"
          placeholder="Write your description"
          rows={5}
        ></Textarea>

        {/* Button Container */}
        <div>
          <button
            type="submit"
            className={classNames(
              'bg-[#7367f0] text-white mr-5 px-6 py-[9px]',
              'rounded-md font-medium text-sm outline-0 ',
              'hover:shadow-indigo transition-shadow duration-300',
            )}
          >
            Add
          </button>
          <button
            type="reset"
            className={classNames(
              'text-[#82868b] font-medium text-sm',
              'py-[8px] px-6 rounded-md outline-0',
              'box-border border border-[#82868b]',
              'hover:bg-[#82868b0a] focus:bg-[#82868b33]',
              'transition-all duration-300',
            )}
            onClick={handleClearForm}
          >
            Reset
          </button>
        </div>
      </form>
    </SidebarModal>
  )
}

export default AddTodo
