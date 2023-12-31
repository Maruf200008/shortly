import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit"
import { useEffect, useState } from "react"
import { MdDeleteForever } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { RootState } from "../../app/store"
import { apiSlice } from "../../features/api/apiSlice"
import { getUrl, removeUrl } from "../../features/shortUrl/shorterUrlSlice"

const EditOrDeliteUrl = () => {
  interface EditUrl {
    editUrl: EditUrl
    id: number
    longUrl: string
    shortUrl: string
  }

  const { editUrl } = useSelector(
    (state: { shorterUrl: EditUrl }) => state.shorterUrl,
  )
  const { id, longUrl, shortUrl } = editUrl as EditUrl
  const { urlId } = useParams()
  const [input, setInput] = useState<string>("")
  const dispatch: ThunkDispatch<RootState, any, AnyAction> = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(getUrl(urlId))
    setInput(longUrl)
  }, [setInput, urlId, dispatch, longUrl, editUrl])
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(apiSlice.endpoints.editShortUrl.initiate({ url: input, id }))
  }
  const handleDeleteUrl = (id: number) => {
    dispatch(removeUrl(id))
    navigate("/")
  }

  return (
    <div className=" bg-slate-200">
      <div className="max-w-screen-xl  flex flex-wrap items-center justify-between mx-auto p-4 py-20 ">
        <div className=" w-full lg:flex-row flex-col flex gap-10 items-center justify-center">
          <form
            className=" bg-white p-4 rounded-md flex md:flex-row flex-col items-center gap-5 w-full justify-center "
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Shorten a link here..."
              className=" w-full focus:outline-none text-lg font-semibold rounded-md p-4 border-2 border-orange-500"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              type="submit"
              className=" w-full md:w-[150px] text-lg font-semibold bg-secondary hover:bg-[#069e9e] transition p-4 rounded-md text-white"
            >
              Edit Now
            </button>
          </form>

          <div className="bg-white rounded-md p-5 flex sm:flex-row flex-col  items-center sm:gap-20  space-y-5 md:space-y-0">
            <div>
              <p className=" text-lg font-medium  text-center text-secondary">
                {shortUrl}
              </p>
            </div>
            <div className=" flex md:flex-row flex-col  items-center gap-5">
              <button
                className=" bg-red-600/25 hover:bg-red-600 hover:text-white transition p-3 rounded-md text-red-500 font-bold w-full"
                onClick={() => handleDeleteUrl(id)}
              >
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
