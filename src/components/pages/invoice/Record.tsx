import Icon from '../../shared/Icon'

interface IRecordProps {
  name: string
  email: string
  image: string
  total: number
  issuedDate: string
  balance: string | number
  status: 'downloaded' | 'draft' | 'paid' | 'partial-payment' | 'past-due'
}

const getBadgeAvatarData = (status: string) => {
  switch (status) {
    case 'downloaded':
      return {
        color: '#00cfe8',
        bg: 'bg-[#00cfe81f]',
        icon: 'ArrowDownCircle',
      }
    case 'draft':
      return {
        color: '#7367f0',
        bg: 'bg-[#7367f01f]',
        icon: 'Save',
      }
    case 'paid':
      return {
        color: '#28c76f',
        bg: 'bg-[#28c76f1f]',
        icon: 'CheckCircle',
      }

    case 'partial-payment':
      return {
        color: '#ff9f43',
        bg: 'bg-[#ff9f431f]',
        icon: 'Chart',
      }

    case 'past-due':
      return {
        color: '#ea5455',
        bg: 'bg-[#ea54551f]',
        icon: 'Info',
      }

    default:
      throw new Error('Not found status!')
  }
}

const Record = (props: IRecordProps) => {
  const badgeAvatar = getBadgeAvatarData(props.status)

  return (
    <tr className="border-b bg-ebonyClay text-[#b4b7bd] border-gray-main whitespace-nowrap flex items-center justify-between">
      <td className="py-3 px-7 grow-[1]">
        <span className="text-indigo-main font-medium text-sm cursor-pointer">#5036</span>
      </td>

      <td className="py-3 px-7 grow-[1]">
        <div
          className={`w-8 h-8 grid place-content-center rounded-full ${badgeAvatar.bg}`}
        >
          <Icon
            name={badgeAvatar.icon}
            color={badgeAvatar.color}
            width={14}
            height={14}
          />
        </div>
      </td>

      <td className="py-3 px-7 grow-[4]">
        <div className="flex items-center">
          <div className="mr-3 w-8 h-8">
            <img src={props.image} alt={props.name} className="w-8 h-8" />
          </div>
          <div className="grid place-content-center">
            <span className="text-sm font-medium whitespace-nowrap">{props.name}</span>
            <small className="text-xs text-[#676d7d]">{props.email}</small>
          </div>
        </div>
      </td>

      <td className="py-3 px-7 grow-[1]">
        <span className="text-sm">${props.total}</span>
      </td>

      <td className="py-3 px-7 grow-[1]">
        <span className="text-sm">{props.issuedDate}</span>
      </td>

      <td className="py-3 px-7 grow-[1]">
        <span className="text-sm">${props.balance}</span>
      </td>

      <td className="py-3 px-7 grow-[1]">
        <div className="flex">
          <Icon name="Send" color="#b4b7bd" width={16} height={16} />
          <Icon name="Eye" color="#b4b7bd" width={16} height={16} className="mx-[14px]" />
          <Icon name="MoreVertical" color="#b4b7bd" width={16} height={16} />
        </div>
      </td>
    </tr>
  )
}

export default Record
