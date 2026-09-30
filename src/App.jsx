import { useState } from "react";
import { initialPokemon, STATUSES } from "./data/pokemon";
import Toolbar from "./components/Toolbar";
import AddPokemonForm from "./components/AddPokemonForm";
import PokemonCard from "./components/PokemonCard";

export default function App() {
  console.log("%cApp render", "color: #e3350d; font-weight: bold");

  const [pokemon, setPokemon] = useState(initialPokemon);
  const [statusFilter, setStatusFilter] = useState("All");
  const [search, setSearch] = useState("");

  const addPokemon = (data) =>
    setPokemon((prev) => [
      { ...data, id: crypto.randomUUID(), resetKey: 0 },
      ...prev,
    ]);

  const removePokemon = (id) =>
    setPokemon((prev) => prev.filter((p) => p.id !== id));

  const changeStatus = (id, status) =>
    setPokemon((prev) => prev.map((p) => (p.id === id ? { ...p, status } : p)));

  const resetPokemon = (id) =>
    setPokemon((prev) =>
      prev.map((p) => (p.id === id ? { ...p, resetKey: p.resetKey + 1 } : p))
    );

  const sortByName = () =>
    setPokemon((prev) => [...prev].sort((a, b) => a.name.localeCompare(b.name)));

  const sortByLevel = () =>
    setPokemon((prev) => [...prev].sort((a, b) => b.level - a.level));

  const reverseList = () => setPokemon((prev) => [...prev].reverse());

  const matches = (p) =>
    (statusFilter === "All" || p.status === statusFilter) &&
    p.name.toLowerCase().includes(search.trim().toLowerCase());

  const visibleCount = pokemon.filter(matches).length;

  const counts = { All: pokemon.length };
  STATUSES.forEach((s) => {
    counts[s] = pokemon.filter((p) => p.status === s).length;
  });

  return (
    <div className="app">
      <header className="app-header">
        <div className="pokeball" aria-hidden="true" />
        <div>
          <h1>Trainer Dashboard</h1>
          <p>Track wild sightings, caught Pokémon and your active team.</p>
        </div>
        <div className="summary">
          <div><strong>{counts.All}</strong><span>Total</span></div>
          <div><strong>{counts["In Team"]}</strong><span>In team</span></div>
          <div><strong>{counts.Wild}</strong><span>Wild</span></div>
        </div>
      </header>

      <AddPokemonForm onAdd={addPokemon} />

      <Toolbar
        statusFilter={statusFilter}
        onStatusFilterChange={setStatusFilter}
        search={search}
        onSearchChange={setSearch}
        counts={counts}
        onSortName={sortByName}
        onSortLevel={sortByLevel}
        onReverse={reverseList}
      />

      <ul className="grid">
        {pokemon.map((p) => (
          <PokemonCard
            key={`${p.id}-${p.resetKey}`}
            pokemon={p}
            isVisible={matches(p)}
            onStatusChange={changeStatus}
            onRemove={removePokemon}
            onReset={resetPokemon}
          />
        ))}
      </ul>

      {visibleCount === 0 && (
        <p className="empty">
          {pokemon.length === 0
            ? "Your Pokédex is empty. Add your first Pokémon above!"
            : "No Pokémon match the current filter."}
        </p>
      )}
    </div>
  );
}