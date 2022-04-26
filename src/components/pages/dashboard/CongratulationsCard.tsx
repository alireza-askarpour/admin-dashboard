import Icon from '../../shared/Icon'

const CongratulationsCard = () => {
  return (
    <div className="relative h-full">
      <div className="h-full p-5 bg-gradient-to-r from-[#7367f0] to-[#7367f0b3] rounded-md flex flex-col items-center justify-center">
        <img src="/images/banner2.png" className="w-36 sm:w-48 absolute top-0 left-0" />
        <img src="/images/banner1.png" className="w-36 sm:w-48 absolute top-0 right-0" />

        <div className="rounded-full shadow-main mb-5 bg-[#7367f0]">
          <div className="w-[70px] h-[70px] rounded-full flex items-center justify-center">
            <Icon name="Award" color="#fff" width={28} height={28} />
          </div>
        </div>

        <h1 className="text-[26px] font-medium text-white text-center mt-[7px] mb-3">
          Congratulations John,
        </h1>

        <p className="mx-14 text-sm text-white text-center">
          You have done <strong>57.6%</strong> more sales today. Check your new badge in
          your profile.
        </p>
      </div>
    </div>
  )
}

export default CongratulationsCard
