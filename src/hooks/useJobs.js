import { useState, useEffect } from "react"
import { mapPostsToJobs } from "../data/constants"

export function useJobs() {
    const [allJobs, setAllJobs] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchJobs() {
            try {
                setLoading(true)
                setError(null)
                const res = await fetch("https://jsonplaceholder.typicode.com/posts")
                if (!res.ok) throw new Error("Failed to fetch jobs")
                const data = await res.json()
                setAllJobs(mapPostsToJobs(data))
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        fetchJobs()
    }, [])

    return { allJobs, loading, error }
}