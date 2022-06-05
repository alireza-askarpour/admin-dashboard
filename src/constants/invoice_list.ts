export interface IInvoice {
  id: string
  name: string
  email: string
  avatar: any
  total: number
  issuedDate: string
  balance: string
  status: 'downloaded' | 'draft' | 'paid' | 'partial-payment' | 'past-due'
}

export const INVOICE_LIST: IInvoice[] = [
  {
    id: '#5037',
    name: 'Andrew Burns',
    email: 'pwillis@cross.org',
    avatar: '/images/man-2.png',
    total: 3171,
    issuedDate: '19 Apr 2019',
    balance: '53',
    status: 'downloaded',
  },
  {
    id: '#5038',
    name: 'Dana Carey',
    email: 'jamesjoel@chapman.net',
    avatar: '/images/user.png',
    total: 525,
    issuedDate: '10 Jul 2019',
    balance: '36',
    status: 'paid',
  },
  {
    id: '#5039',
    name: 'Tammy Sanchez',
    email: 'don85@johnson.com',
    avatar: '/images/woman-1.png',
    total: 3608,
    issuedDate: '30 Oct 2022',
    balance: '9263',
    status: 'draft',
  },
  {
    id: '#5035',
    name: 'Nicholas Tanner',
    email: 'guerrerobrandy@gmail.com',
    avatar: '/images/man-2.png',
    total: 5096,
    issuedDate: '10 May 2022',
    balance: '25',
    status: 'partial-payment',
  },
  {
    id: '#5083',
    name: 'Mary Garcia',
    email: 'williamshenry@smith.com',
    avatar: '/images/woman-3.png',
    total: 79,
    issuedDate: '24 Feb 2021',
    balance: '649',
    status: 'partial-payment',
  },
  {
    id: '#5803',
    name: 'Monica Fuller',
    email: 'jgutierrez@jackson.com',
    avatar: '/images/woman-2.png',
    total: 881,
    issuedDate: '21 Aug 2018',
    balance: '265',
    status: 'downloaded',
  },
  {
    id: '#5083',
    name: 'Laurie Summers',
    email: 'hunter14@jones.com',
    avatar: '/images/man-2.png',
    total: 5451,
    issuedDate: '13 Jan 2020',
    balance: '73',
    status: 'draft',
  },
  {
    id: '#5081',
    name: 'Kelly Smith',
    email: 'perrydavid@rogers.com',
    avatar: '/images/woman-2.png',
    total: 238,
    issuedDate: '14 Feb 2021',
    balance: '51',
    status: 'paid',
  },
  {
    id: '#5814',
    name: 'Ruben Garcia',
    email: 'leahgriffin@carpenter.com',
    avatar: '/images/woman-3.png',
    total: 546,
    issuedDate: '22 Mar 2022',
    balance: '6148',
    status: 'partial-payment',
  },
  {
    id: '#5254',
    name: 'Jamie Jones',
    email: 'todd34@morgan.com',
    avatar: '/images/man-1.png',
    total: 92,
    issuedDate: '05 Feb 2020',
    balance: '5154',
    status: 'past-due',
  },
]
