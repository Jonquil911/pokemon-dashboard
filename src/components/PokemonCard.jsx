import { useState } from "react";
import HpBar from "./HpBar";
import { STATUSES, TYPE_COLORS, spriteUrl } from "../data/pokemon";

export default function PokemonCard({
  pokemon, isVisible, onStatusChange, onRemove, onReset,
}) {
  const { id, dex, name, type, level, status } = pokemon;
  const maxHp = 30 + level * 2;

  console.log(`PokemonCard render: ${name}`);

  const [hp, setHp] = useState(() => {
    console.log(`%cMOUNT ${name}: local state created`, "color: #2e9e4f");
    return maxHp;
  });
  const [showDetails, setShowDetails] = useState(false);

  const changeHp = (delta) =>
    setHp((h) => Math.min(maxHp, Math.max(0, h + delta)));

  const isFainted = hp === 0;

  return (
    <li
      className={`card ${status.toLowerCase().replace(" ", "-")} ${isFainted ? "fainted" : ""}`}
      hidden={!isVisible}
    >
      <div className="card-top">
        <span className="dex">#{String(dex).padStart(3, "0")}</span>
        <span className="type" style={{ background: TYPE_COLORS[type] }}>{type}</span>
      </div>

      <img className="sprite" src={spriteUrl(dex)} alt={name} loading="lazy" />

      <h3>
        {name} <span className="level">Lv. {level}</span>
        {status === "In Team" && <span className="star" title="In team">★</span>}
      </h3>

      <label className="status-select">
        Status
        <select value={status} onChange={(e) => onStatusChange(id, e.target.value)}>
          {STATUSES.map((s) => <option key={s}>{s}</option>)}
        </select>
      </label>

      <HpBar hp={hp} maxHp={maxHp} />

      {isFainted && <p className="fainted-msg">{name} fainted!</p>}

      <div className="hp-buttons">
        <button className="btn btn-ghost" onClick={() => changeHp(-10)} disabled={isFainted}>
          Damage −10
        </button>
        <button className="btn btn-ghost" onClick={() => changeHp(10)} disabled={hp === maxHp}>
          Heal +10
        </button>
      </div>

      {showDetails && (
        <dl className="details">
          <div><dt>Max HP</dt><dd>{maxHp}</dd></div>
          <div><dt>Level</dt><dd>{level}</dd></div>
          <div><dt>Pokédex</dt><dd>#{dex}</dd></div>
        </dl>
      )}

      <div className="card-actions">
        <button className="link" onClick={() => setShowDetails((v) => !v)}>
          {showDetails ? "Hide details" : "Details"}
        </button>
        <button className="link" onClick={() => onReset(id)} title="Reset HP and details">
          Reset
        </button>
        <button className="link danger" onClick={() => onRemove(id)}>
          Release
        </button>
      </div>
    </li>
  );
}