import { useState, useEffect } from "react"
import "./App.css"

import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import Controls from "./components/Controls"
import JobGrid from "./components/JobGrid"

import { useJobs } from "./hooks/useJobs"
import { useSavedJobs } from "./hooks/useSavedJobs"
import { PAGE_SIZE } from "./data/constants"

export default function App() {
  const { allJobs, loading, error } = useJobs()
  const { savedJobs, saveJob, removeJob, isSaved } = useSavedJobs()
  const [searchText, setSearchText] = useState("")
  const [viewMode, setViewMode] = useState("all")
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

  useEffect(() => {
    setVisibleCount(PAGE_SIZE)
  }, [searchText])

  const filteredJobs = allJobs.filter((job) => {
    const q = searchText.toLowerCase()
    return (
      job.role.toLowerCase().includes(q) ||
      job.company.toLowerCase().includes(q) ||
      job.location.toLowerCase().includes(q)
    )
  })

  const visibleJobs = filteredJobs.slice(0, visibleCount)
  const hasMore = visibleCount < filteredJobs.length
  const displayedJobs = viewMode === "saved" ? savedJobs : visibleJobs

  return (
    <div className="app">
      <Header savedCount={savedJobs.length} />

      <main className="main">
        <SearchBar value={searchText} onChange={setSearchText} />

        <Controls
          viewMode={viewMode}
          setViewMode={setViewMode}
          filteredCount={filteredJobs.length}
          savedCount={savedJobs.length}
          visibleCount={visibleJobs.length}
          searchText={searchText}
        />

        {loading && (
          <div className="center">
            <div className="spinner" />
            <p className="muted">Fetching jobs...</p>
          </div>
        )}

        {error && (
          <div className="center">
            <p style={{ fontSize: "40px" }}>⚠️</p>
            <p className="error-text">Something went wrong: {error}</p>
          </div>
        )}

        {!loading && !error && (
          <JobGrid
            jobs={displayedJobs}
            viewMode={viewMode}
            isSaved={isSaved}
            onSave={saveJob}
            onRemove={removeJob}
            hasMore={hasMore}
            onLoadMore={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
          />
        )}
      </main>
    </div>
  )
}