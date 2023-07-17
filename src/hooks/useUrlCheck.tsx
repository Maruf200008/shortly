import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { addUrl } from "../features/shortUrl/shorterUrlSlice"

const useUrlCheck = () => {
  const dispatch = useDispatch()
  const [urlCheck, setUrlCheck] = useState(false)

  interface urlDataType {
    id: number
    longUrl: string
    shortUrl: string
  }

  useEffect(() => {
    const localUrl = localStorage?.getItem("url")

    if (localUrl) {
      const urls = JSON.parse(localUrl)
      urls.forEach((u: urlDataType) => {
        dispatch(addUrl(u))
      })
    }
    setUrlCheck(true)
  }, [])

  return urlCheck
}

export default useUrlCheck
