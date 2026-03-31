export default function JobCard({ job, saved, onSave, onRemove }) {
    return (
        <div className={`card ${saved ? "card-saved" : ""}`}>

            <div className="card-top">
                <div className="company-initial">{job.company[0]}</div>
                <div className="card-meta">
                    <p className="company-name">{job.company}</p>
                    <p className="posted">📅 {job.postedDaysAgo}d ago</p>
                </div>
                <span className="type-badge">{job.type}</span>
            </div>

            <h3 className="role">{job.role}</h3>

            <div className="info-row">
                <span className="info">📍 {job.location}</span>
                <span className="info">🎯 {job.experience}</span>
            </div>

            <p className="description">{job.description}</p>

            {job.tags.length > 0 && (
                <div className="tags">
                    {job.tags.map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                    ))}
                </div>
            )}

            <div className="card-btns">
                <button
                    className={`save-btn ${saved ? "save-btn-saved" : ""}`}
                    onClick={() => saved ? onRemove(job.id) : onSave(job)}
                >
                    {saved ? "🔖 Saved — Remove" : "🔖 Save Job"}
                </button>
            </div>

        </div>
    )
}