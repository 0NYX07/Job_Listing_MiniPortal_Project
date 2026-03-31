import { useState, useEffect } from "react"

export function useSavedJobs() {
    const [savedJobs, setSavedJobs] = useState(() => {
        const stored = localStorage.getItem("savedJobs")
        return stored ? JSON.parse(stored) : []
    })

    useEffect(() => {
        localStorage.setItem("savedJobs", JSON.stringify(savedJobs))
    }, [savedJobs])

    const saveJob = (job) => setSavedJobs((prev) => [...prev, job])
    const removeJob = (id) => setSavedJobs((prev) => prev.filter((j) => j.id !== id))
    const isSaved = (id) => savedJobs.some((j) => j.id === id)

    return { savedJobs, saveJob, removeJob, isSaved }
}