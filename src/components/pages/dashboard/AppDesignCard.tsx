const AppDesignCard = () => {
  return (
    <div className="relative p-5 rounded-md bg-[#283046] h-full">
      <span className="text-xs text-[#7367f0] bg-[#7367f01f] px-2 py-1 rounded-md font-semibold">
        03 Sep, 20
      </span>
      <h4 className="text-[#d0d2d6] font-semibold my-4">App design</h4>
      <p className="text-xs text-[#b4b7bd] mb-5">
        You can Find Only Post and Quotes Related to IOS like ipad app design, iphone app
        design
      </p>

      <div className="mb-8">
        <h6 className="text-xs uppercase mb-2 text-[#676d7d]">Team</h6>
        <span className="py-[3px] px-2 mr-3 text-[#ff9f43] bg-[#ff9f431f] rounded-md text-[13px] font-semibold">
          Figma
        </span>
        <span className="py-[3px] px-2 mr-3 text-[#7367f0] bg-[#7367f01f] rounded-md text-[13px] font-semibold">
          Wireframe
        </span>
      </div>

      <div className="mb-8">
        <h6 className="text-xs uppercase mb-2 text-[#676d7d]">Members</h6>
        <div className="flex">
          <span className="rounded-full mr-[14px] cursor-pointer">
            <img src="/images/man-1.png" className="w-[35px]" />
          </span>

          <span className="relative mr-[14px] border-2 border-[#283046] rounded-full cursor-pointer">
            <img src="/images/woman-1.png" className="w-[35px]" />
          </span>

          <span className="relative mr-[14px] border-2 border-[#283046] rounded-full cursor-pointer">
            <img src="/images/man-2.png" className="w-[35px]" />
          </span>

          <span className="relative mr-[14px] border-2 border-[#283046] rounded-full cursor-pointer">
            <img src="/images/woman-2.png" className="w-[35px]" />
          </span>

          <span className="relative mr-[14px]2 border-2 border-[#283046] rounded-full cursor-pointer">
            <img src="/images/woman-3.png" className="w-[35px]" />
          </span>
        </div>
      </div>

      <div className="flex items-center justify-start mb-16">
        <div className="rounded-md px-2 py-1 mr-2 bg-[#161d31] text-sm w-24 text-[13px] text-center">
          <p className="text-[#b4b7bd]">Due Date</p>
          <h6 className="text-[#d0d2d6] font-semibold">12 Apr, 21</h6>
        </div>

        <div className="rounded-md px-2 py-1 mr-2 bg-[#161d31] text-sm w-24 text-[13px] text-center">
          <p className="text-[#b4b7bd]">Budget</p>
          <h6 className="text-[#d0d2d6] font-semibold">$49251.91</h6>
        </div>

        <div className="rounded-md px-2 py-1 mr-2 bg-[#161d31] text-[13px] w-24 text-center">
          <p className="text-[#b4b7bd]">Cost</p>
          <h6 className="text-[#d0d2d6] font-semibold">$840.99</h6>
        </div>
      </div>
      <button className="px-5 py-[9px] w-full bg-[#7367f0] text-white font-medium text-sm rounded-md hover:shadow-indigo transition-shadow duration-300">
        Join Team
      </button>
    </div>
  )
}

export default AppDesignCard
