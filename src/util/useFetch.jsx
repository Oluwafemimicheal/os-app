import { useEffect, useState } from "react"

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        setLoading(true)
        const response = await fetch(url)
        if (!response.ok) throw new Error("Failed to fetch data")
        const data = await response.json()
        if (isMounted) setData(data);
      } catch (err) {
        if (isMounted) setError(err.message)
      } finally {
        if (isMounted) setLoading(false)
      }
    }

    fetchData()

    return () => {
      isMounted = false
    }
  }, [url])



  return { data, loading, error };
}

export default useFetch;