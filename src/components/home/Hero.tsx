import illustrationWorking from "../../images/illustration-working.svg"
const Hero = () => {
  return (
    <>
      <div className="max-w-screen-xl lg:mb-48 my-20 flex flex-wrap items-center justify-between mx-auto p-4">
        <div className=" grid lg:grid-cols-2 gap-10">
          <div className=" space-y-5 md:mt-20 lg:mt-0">
            <h1 className=" text-primary text-[35px] sm:text-[58px] text-center lg:text-left md:text-[85px] lg:text-[60px] font-bold md:leading-[90px] lg:leading-[65px] xl:text-[85px] xl:leading-[90px]">
              More than just shorter links
            </h1>
            <p className=" sm:text-[25px] md:text-2xl lg:text-[18px] xl:text-[23px] text-gray-400 text-center lg:text-left">
              Build your brand's recognition and get detailed insights on how
              your links are performing
            </p>

            <div className=" flex items-center justify-center lg:justify-start">
              <button className=" sm:text-[22px] lg:text-[18px] bg-secondary px-7 py-3 rounded-full text-white font-semibold">
                Get Started
              </button>
            </div>
          </div>
          <div className="  order-first lg:order-last lg:ml-14">
            <img src={illustrationWorking} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
