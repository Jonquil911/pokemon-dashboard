import { STATUSES } from "../data/pokemon";

export default function Toolbar({
  statusFilter, onStatusFilterChange,
  search, onSearchChange,
  counts,
  onSortName, onSortLevel, onReverse,
}) {
  console.log("Toolbar render");

  return (
    <section className="panel toolbar">
      <div className="tabs">
        {["All", ...STATUSES].map((s) => (
          <button
            key={s}
            className={`tab ${statusFilter === s ? "active" : ""}`}
            onClick={() => onStatusFilterChange(s)}
          >
            {s} <span className="count">{counts[s]}</span>
          </button>
        ))}
      </div>

      <input
        className="search"
        type="search"
        placeholder="Search by name…"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      <div className="sort">
        <button className="btn btn-ghost" onClick={onSortName}>A–Z</button>
        <button className="btn btn-ghost" onClick={onSortLevel}>By level</button>
        <button className="btn btn-ghost" onClick={onReverse}>⇅ Reverse</button>
      </div>
    </section>
  );
}