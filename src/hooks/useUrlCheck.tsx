import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { addUrl } from "../features/shortUrl/shorterUrlSlice"

const useUrlCheck = () => {
  const dispatch = useDispatch()
  const [urlCheck, setUrlCheck] = useState(false)

  useEffect(() => {
    const localUrl = localStorage?.getItem("url")

    if (localUrl) {
      const urls = JSON.parse(localUrl)
      urls.forEach((u) => {
        dispatch(addUrl(u))
      })
    }
    setUrlCheck(true)
  }, [])

  return urlCheck
}

export default useUrlCheck
