export default function Controls({ viewMode, setViewMode, filteredCount, savedCount, visibleCount, searchText }) {
    return (
        <div className="controls">
            <div className="tabs">
                <button
                    className={`tab ${viewMode === "all" ? "tab-active" : ""}`}
                    onClick={() => setViewMode("all")}
                >
                    All Jobs <span className="count">{filteredCount}</span>
                </button>
                <button
                    className={`tab ${viewMode === "saved" ? "tab-active" : ""}`}
                    onClick={() => setViewMode("saved")}
                >
                    Saved Jobs{" "}
                    <span className={`count ${savedCount > 0 ? "count-green" : ""}`}>
                        {savedCount}
                    </span>
                </button>
            </div>
            <p className="results-info">
                {viewMode === "all"
                    ? `Showing ${visibleCount} of ${filteredCount} jobs${searchText ? ` for "${searchText}"` : ""}`
                    : `${savedCount} saved job${savedCount !== 1 ? "s" : ""}`}
            </p>
        </div>
    )
}