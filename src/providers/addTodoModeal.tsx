import { createContext, useState, useContext, FC } from 'react'

interface IAddTodoModeal {
  isOpen: boolean
  openAddModal: () => void
  closeAddModal: () => void
}

const initialValue = {
  isOpen: false,
  openAddModal: () => {},
  closeAddModal: () => {},
}

const AddTodoModealContext = createContext<IAddTodoModeal>(initialValue)

export const AddTodoModealProvider: FC = ({ children }) => {
  const [openAddModal, setOpenAddModal] = useState(false)

  const handleOpenAddModal = () => setOpenAddModal(true)
  const handleCloseAddModal = () => setOpenAddModal(false)

  const value = {
    isOpen: openAddModal,
    openAddModal: handleOpenAddModal,
    closeAddModal: handleCloseAddModal,
  }

  return <AddTodoModealContext.Provider value={value} children={children} />
}

export const useAddTodoModal = () => useContext(AddTodoModealContext)
