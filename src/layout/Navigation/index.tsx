import { useNavigate } from 'react-router-dom'
import { classNames } from 'utils/classNames'
import NavigationList from './NavigationList'
import Icon from 'components/Shared/Icon'

interface IProps {
  sideDrawerMenu?: boolean
  closeMenu?: () => void
}

const Navigation = ({ sideDrawerMenu, closeMenu }: IProps) => {
  const navigate = useNavigate()

  const handleLogoClick = () => navigate('/')

  return (
    <section
      className={classNames(
        'w-64 h-full bg-[#283046]',
        sideDrawerMenu ? 'z-40' : 'fixed top-0 left-0 hidden xl:inline-block',
      )}
    >
      {/* Logo */}

      <div className="flex items-center justify-between py-6 px-6">
        <div
          className="flex items-center justify-start cursor-pointer"
          onClick={handleLogoClick}
        >
          <img src="/images/logo.svg" alt="Logo" className="w-9" />
          <span className="text-[#7367f0] text-xl ml-3 font-semibold">Vuexy</span>
        </div>
        {sideDrawerMenu && (
          <div className="cursor-pointer" onClick={closeMenu}>
            <Icon name="Close" color="#7367f0" />
          </div>
        )}
      </div>

      {/* Navigation List Items */}
      <div>
        <div className="mx-6 mb-3">
          <p className="uppercase text-[11px] font-semibold tracking-widest text-[#676d7d]">
            Items
          </p>
        </div>
        <NavigationList />
      </div>

      {/* User Info */}
      <div className="absolute left-0 bottom-0 right-0 flex justify-between items-center">
        <div>
          <div className="flex items-center justify-start cursor-pointer px-4 pb-4 pt-2">
            <img src="/images/user.png" className="w-10 mr-2" alt="John Doe" />
            <div className="mr-2 flex flex-col items-start justify-center">
              <p className="text-[#d0d2d6] font-semibold tracking-wider text-[14px]">
                John Doe
              </p>
              <span className="text-[11px] text-[#d0d2d6] leading-3">
                johndoe@gmail.com
              </span>
            </div>
          </div>
        </div>
        <div className="mr-6 cursor-pointer">
          <Icon name="LogOut" color="#d0d2d6" width={18} height={18} />
        </div>
      </div>
    </section>
  )
}

export default Navigation
