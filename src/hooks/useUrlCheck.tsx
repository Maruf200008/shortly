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
        const { id, shortUrl, longUrl } = u
        dispatch(
          addUrl({
            id,
            shortUrl,
            longUrl,
          }),
        )
      })
    }

    setUrlCheck(true)
  }, [])

  return urlCheck
}

export default useUrlCheck
