import brandRecognition from "../../images/icon-brand-recognition.svg"
import detailRecognition from "../../images/icon-detailed-records.svg"
import fulyCustomizable from "../../images/icon-fully-customizable.svg"
const AdvancedStatistics = () => {
  return (
    <div className=" bg-gray-200 mt-[150px] mb-20 py-10  ">
      <div className="max-w-screen-xl  flex flex-wrap items-center  mx-auto p-4">
        <div className=" bg-primary w-full py-20 rounded-md mt-[-150px]">
          <div className="lg:top-20 flex items-center justify-center">
            <form className=" flex md:flex-row flex-col items-center gap-5 w-full justify-center px-5 sm:px-10 ">
              <input
                type="text"
                placeholder="Shorten a link here..."
                className=" w-full focus:outline-none text-lg font-semibold rounded-md p-4 border-2 border-orange-500"
              />
              <button
                type="submit"
                className=" w-full md:w-[150px] text-lg font-semibold bg-secondary hover:bg-[#069e9e] transition p-4 rounded-md text-white"
              >
                Shorten it!
              </button>
            </form>
          </div>
        </div>

        <div className=" pt-[150px]  w-full">
          <div className=" flex items-center justify-center flex-col space-y-5">
            <h1 className=" text-gray-800 text-[35px] sm:text-[58px] text-center lg:text-left md:text-[65px] lg:text-[60px] font-bold lg:leading-[65px] xl:text-[85px] xl:leading-[90px]">
              Advanced Statistics
            </h1>
            <p className=" md:w-[500px] sm:text-[25px] md:text-xl lg:text-[18px] font-medium  text-gray-400 text-center  ">
              Build your brand's recognition and get detailed insights on how
              your links are performing
            </p>

            <div className=" w-full relative ">
              <div className=" w-full h-[7px] bg-secondary  absolute top-[280px] " />
              <div className=" grid md:grid-cols-3   mt-[100px] gap-5 lg:gap-10 ">
                <div className=" bg-white p-8 rounded-md shadow-xl shadow-gray-200 z-20 ">
                  <div className=" mt-[-80px] w-[100px] flex items-center justify-center h-[100px] mb-10 bg-primary  rounded-full p-2">
                    <img
                      src={brandRecognition}
                      alt="brandRecognition"
                      className=" "
                    />
                  </div>
                  <div className=" space-y-5">
                    <h2 className="text-[25px] sm:text-[35px] md:text-[25px] lg:text-3xl font-bold text-gray-800">
                      Brand Recognition
                    </h2>
                    <p className="text-[16px] sm:text-[18px] md:text-[16px] lg:text-[18px]  text-gray-500 font-medium">
                      Boost your brand recognition with each click. Generic
                      links don't mean a thing. Branded links help instil
                      confidence in your content
                    </p>
                  </div>
                </div>
                <div className=" bg-white p-8 rounded-md shadow-xl shadow-gray-200 z-20 mt-10 ">
                  <div className=" mt-[-80px] w-[100px] flex items-center justify-center h-[100px] mb-10 bg-primary  rounded-full p-2">
                    <img
                      src={detailRecognition}
                      alt="brandRecognition"
                      className=" "
                    />
                  </div>
                  <div className=" space-y-5">
                    <h2 className="text-[25px] sm:text-[35px] md:text-[25px] lg:text-3xl font-bold text-gray-800">
                      Detailed Records
                    </h2>
                    <p className="text-[16px] sm:text-[18px] md:text-[16px] lg:text-[18px]  text-gray-500 font-medium">
                      Gain insights into who is clicking your links. Knowing
                      when and where people engage with your content helps
                      inform better decisions
                    </p>
                  </div>
                </div>
                <div className=" bg-white p-8 rounded-md shadow-xl shadow-gray-200 z-20 mt-20 ">
                  <div className="mt-[-80px] w-[100px] flex items-center justify-center h-[100px] mb-10 bg-primary  rounded-full p-2">
                    <img
                      src={fulyCustomizable}
                      alt="brandRecognition"
                      className=" "
                    />
                  </div>
                  <div className=" space-y-5">
                    <h2 className="text-[25px] sm:text-[35px] md:text-[25px] lg:text-3xl font-bold text-gray-800">
                      Fully Customizable
                    </h2>
                    <p className="text-[16px] sm:text-[18px] md:text-[16px] lg:text-[18px]  text-gray-500 font-medium">
                      Improve brands awareness and content discoverability
                      throught customizable links. Supercharging audience
                      engagement
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdvancedStatistics