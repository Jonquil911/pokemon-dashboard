export default function HpBar({ hp, maxHp }) {
  const percent = Math.round((hp / maxHp) * 100);
  const tone = percent > 50 ? "high" : percent > 20 ? "mid" : "low";

  return (
    <div className="hp">
      <div className="hp-label">
        <span>HP</span>
        <span>{hp} / {maxHp}</span>
      </div>
      <div className="hp-track">
        <div className={`hp-fill ${tone}`} style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}