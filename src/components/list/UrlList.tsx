import { useSelector } from "react-redux"
import { RootState } from "../../app/store"
import List from "./List"

const UrlList = () => {
  const { url } = useSelector((state: RootState) => state.shorterUrl)

  interface UrlDataType {
    id: number
    shortUrl: string
    longUrl: string
  }
  return (
    <div className=" bg-slate-200">
      <div className="max-w-screen-xl   mx-auto p-4 py-20 ">
        <div className=" space-y-10">
          {url.length > 0 ? (
            <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-5 lg:gap-10 ">
              {url.map((u: UrlDataType) => {
                return <List key={u.id} data={u} />
              })}
            </div>
          ) : (
            <div className=" bg-red-600/25 p-5 rounded-md">
              <p className=" text-center text-lg font-semibold">
                Sorry!!! Url Not Found{" "}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default UrlList
