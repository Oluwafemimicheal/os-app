
import { useState, useEffect } from "react"
import Loading from "../components/Loading"

function useLoading() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout()
  }, [loading])

  return { loading, LoadingComponent: Loading }
}
export default useLoading;