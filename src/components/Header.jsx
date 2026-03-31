export default function Header({ savedCount }) {
    return (
        <header className="header">
            <div className="header-inner">
                <div className="brand">
                    <span className="logo">⚡</span>
                    <div>
                        <h1 className="title">JobSpark</h1>
                        <p className="subtitle">Find your next opportunity</p>
                    </div>
                </div>
                {savedCount > 0 && (
                    <div className="saved-badge">🔖 {savedCount} saved</div>
                )}
            </div>
        </header>
    )
}