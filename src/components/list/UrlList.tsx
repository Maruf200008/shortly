import { useSelector } from "react-redux"
import List from "./List"

const UrlList = () => {
  const { url } = useSelector((state) => state.shorterUrl)
  console.log(url)
  return (
    <div className=" bg-slate-200">
      <div className="max-w-screen-xl   mx-auto p-4 py-20 ">
        <div className=" space-y-10">
          <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-5 lg:gap-10 ">
            {url.map((u) => {
              return <List key={u.id} data={u} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UrlList
