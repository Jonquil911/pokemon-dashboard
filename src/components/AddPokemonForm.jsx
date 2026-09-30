import { useState } from "react";
import { TYPES } from "../data/pokemon";

export default function AddPokemonForm({ onAdd }) {
  console.log("AddPokemonForm render");

  const [name, setName] = useState("");
  const [dex, setDex] = useState("");
  const [type, setType] = useState(TYPES[0]);
  const [level, setLevel] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    onAdd({
      name: name.trim(),
      dex: Number(dex),
      type,
      level: Number(level),
      status: "Wild",
    });

    setName("");
    setDex("");
    setLevel(5);
  };

  return (
    <form className="panel add-form" onSubmit={handleSubmit}>
      <label className="field">
        Name
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Snorlax" required />
      </label>

      <label className="field">
        Pokédex #
        <input type="number" min="1" max="1025" value={dex} onChange={(e) => setDex(e.target.value)} placeholder="143" required />
      </label>

      <label className="field">
        Type
        <select value={type} onChange={(e) => setType(e.target.value)}>
          {TYPES.map((t) => <option key={t}>{t}</option>)}
        </select>
      </label>

      <label className="field">
        Level
        <input type="number" min="1" max="100" value={level} onChange={(e) => setLevel(e.target.value)} required />
      </label>

      <button className="btn btn-primary" type="submit">Add Pokémon</button>
    </form>
  );
}