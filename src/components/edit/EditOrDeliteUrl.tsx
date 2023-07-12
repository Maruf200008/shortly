import { MdDeleteForever, MdEditDocument } from "react-icons/md"

const EditOrDeliteUrl = () => {
  return (
    <div className=" bg-slate-200">
      <div className="max-w-screen-xl  flex flex-wrap items-center justify-between mx-auto p-4 py-20 ">
        <div className=" w-full lg:flex-row flex-col flex gap-10 items-center justify-center">
          <div className="bg-white rounded-md p-5 flex sm:flex-row flex-col  items-center sm:gap-20  space-y-5 md:space-y-0">
            <div>
              <p className=" text-lg font-medium  text-center">
                https://react-icons.github.io/react-icons/search?q=insta
              </p>
            </div>
            <div className=" flex md:flex-row flex-col  items-center gap-5">
              <button className=" bg-secondary/25 p-3 rounded-md text-secondary font-bold w-full">
                <MdEditDocument size={25} />
              </button>
            </div>
          </div>
          <div className="bg-white rounded-md p-5 flex sm:flex-row flex-col  items-center sm:gap-20  space-y-5 md:space-y-0">
            <div>
              <p className=" text-lg font-medium  text-center text-secondary">
                https://rel.ink/k4lkyk
              </p>
            </div>
            <div className=" flex md:flex-row flex-col  items-center gap-5">
              <button className=" bg-red-600/25 p-3 rounded-md text-red-500 font-bold w-full">
                <MdDeleteForever size={25} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditOrDeliteUrl
