import { BiLinkExternal } from "react-icons/bi"
const List = () => {
  return (
    <div>
      <div className=" w-full lg:flex-row flex-col flex gap-10 items-center justify-center">
        <div className="bg-white rounded-md p-5 flex sm:flex-row flex-col  items-center sm:gap-20  space-y-5 md:space-y-0">
          <div>
            <p className=" text-lg font-medium  text-center text-primary">
              https://rel.ink/k4lkyk
            </p>
          </div>
          <div className=" flex md:flex-row flex-col  items-center gap-5">
            <button className=" bg-secondary/25 p-3 rounded-md text-secondary font-bold w-full">
              <BiLinkExternal size={25} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List
