import { ReactNode } from 'react'
import { classNames } from 'utils/classNames'

interface ISidebarTaskHandlerProps {
  isOpen: boolean
  onCloseModal: () => void
  children: ReactNode
  direction: 'right' | 'left'
  width: string
}

const SidebarModal = ({
  isOpen,
  onCloseModal,
  children,
  direction,
  width,
}: ISidebarTaskHandlerProps) => {
  return (
    <section
      className={classNames(
        'w-full h-screen transition',
        'fixed inset-0 z-40',
        !isOpen && 'invisible',
      )}
    >
      <section
        className={classNames(
          width,
          'h-screen bg-[#283046] transition-inset duration-300',
          'fixed top-0 bottom-0 z-20 shadow-xl',
          isOpen
            ? direction === 'right'
              ? 'right-0'
              : 'left-0'
            : direction === 'right'
            ? '-right-full'
            : '-left-full',
        )}
      >
        {children}
      </section>
      <section
        className="w-full h-screen fixed inset-0 bg-[#22292f80]"
        onClick={onCloseModal}
      ></section>
    </section>
  )
}

export default SidebarModal
