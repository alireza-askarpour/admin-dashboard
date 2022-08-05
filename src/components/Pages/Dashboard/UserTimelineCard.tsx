const UserTimelineCard = () => {
  return (
    <div className="relative p-5 rounded-md bg-[#283046] h-full">
      <div>
        <h4 className="text-[#d0d2d6] font-semibold mb-5">User Timeline</h4>
      </div>
      <ul className="ml-4">
        <li className="pl-[35px] pb-7 relative border-l border-l-[#3b4253]">
          <div className="absolute left-[-10px] top-[-4px] w-5 h-5 rounded-full bg-[#7367f01f]">
            <div className="absolute left-[4px] top-[4px] w-3 h-3 rounded-full bg-[#7367f0]"></div>
          </div>
          <div className="text-sm mb-2 sm:flex justify-between items-start">
            <h6 className="mb-1 font-semibold sm:w-[83.333333%]">
              12 Invoices have been paid
            </h6>
            <small className="text-[#676d7d] ml-3 sm:w-1/3 sm:text-right">
              12 min ago
            </small>
          </div>
          <p className="text-sm text-[#b4b7bd] mb-4">
            Invoices have been paid to the company.
          </p>
          <div className="flex justify-start items-center">
            <img src="/images/json-file.png" className="w-5 mr-3" />
            <h6 className="text-sm font-semibold">data.json</h6>
          </div>
        </li>

        <li className="pl-[35px] pb-7 relative border-l border-l-[#3b4253]">
          <div className="absolute left-[-10px] top-[-4px] w-5 h-5 rounded-full bg-[#ff9f431f]">
            <div className="absolute left-[4px] top-[4px] w-3 h-3 rounded-full bg-[#ff9f43]"></div>
          </div>
          <div className="text-sm mb-2 sm:flex justify-between items-start">
            <h6 className="mb-1 font-semibold sm:w-[83.333333%]">Client Meeting</h6>
            <small className="text-[#676d7d] ml-3 sm:w-1/3 sm:text-right">
              45 min ago
            </small>
          </div>
          <p className="text-sm text-[#b4b7bd] mb-4">
            Project meeting with john @10:15am
          </p>
          <div className="flex justify-start items-center">
            <img src="/images/man-1.png" className="w-[38px] mr-2" />
            <div className="text-[13px]">
              <h6 className="text-[13px] font-semibold">John Doe (Client)</h6>
              <p>CEO of Infibeam</p>
            </div>
          </div>
        </li>

        <li className="pl-[35px] pb-7 relative border-l border-l-[#3b4253]">
          <div className="absolute left-[-10px] top-[-4px] w-5 h-5 rounded-full bg-[#00d0e81f]">
            <div className="absolute left-[4px] top-[4px] w-3 h-3 rounded-full bg-[#00cfe8]"></div>
          </div>
          <div className="text-sm mb-2 sm:flex justify-between items-start">
            <h6 className="mb-1 font-semibold sm:w-[83.333333%]">
              Create a new project for client
            </h6>
            <small className="text-[#676d7d] ml-3 sm:w-1/3 sm:text-right">
              2 day ago
            </small>
          </div>
          <p className="text-sm text-[#b4b7bd] mb-4">Add files to new design folder</p>
          <div className="flex justify-start items-center">
            <span className="rounded-full cursor-pointer">
              <img src="/images/man-1.png" className="w-[35px]" />
            </span>

            <span className="relative -left-3 border-2 border-[#283046] rounded-full cursor-pointer">
              <img src="/images/woman-1.png" className="w-[35px]" />
            </span>

            <span className="relative -left-6 border-2 border-[#283046] rounded-full cursor-pointer">
              <img src="/images/man-2.png" className="w-[35px]" />
            </span>

            <span className="relative -left-9 border-2 border-[#283046] rounded-full cursor-pointer">
              <img src="/images/woman-2.png" className="w-[35px]" />
            </span>

            <span className="relative -left-12 border-2 border-[#283046] rounded-full cursor-pointer">
              <img src="/images/woman-3.png" className="w-[35px]" />
            </span>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default UserTimelineCard
