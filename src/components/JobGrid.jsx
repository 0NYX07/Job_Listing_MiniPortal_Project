import JobCard from "./JobCard"

export default function JobGrid({ jobs, viewMode, isSaved, onSave, onRemove, hasMore, onLoadMore }) {
    return (
        <>
            <div className="grid">
                {jobs.length === 0 ? (
                    <div className="empty">
                        <p style={{ fontSize: "48px", opacity: 0.4 }}>
                            {viewMode === "saved" ? "🔖" : "🔍"}
                        </p>
                        <p className="empty-title">
                            {viewMode === "saved" ? "No saved jobs yet" : "No jobs found"}
                        </p>
                        <p className="muted">
                            {viewMode === "saved"
                                ? "Browse and save jobs you like!"
                                : "Try a different search term."}
                        </p>
                    </div>
                ) : (
                    jobs.map((job) => (
                        <JobCard
                            key={job.id}
                            job={job}
                            saved={isSaved(job.id)}
                            onSave={onSave}
                            onRemove={onRemove}
                        />
                    ))
                )}
            </div>

            {viewMode === "all" && hasMore && (
                <button className="load-more-btn" onClick={onLoadMore}>
                    Load More Jobs ↓
                </button>
            )}
        </>
    )
}