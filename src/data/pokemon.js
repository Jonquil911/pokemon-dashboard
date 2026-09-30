export const STATUSES = ["Wild", "Caught", "In Team"];

export const TYPES = [
  "Electric", "Fire", "Water", "Grass",
  "Psychic", "Ghost", "Dragon", "Normal",
];

export const TYPE_COLORS = {
  Electric: "#d99a00",
  Fire: "#f05a28",
  Water: "#3b8fe8",
  Grass: "#4cad58",
  Psychic: "#e6598a",
  Ghost: "#6b5b95",
  Dragon: "#6c4fd6",
  Normal: "#8f96a3",
};

export const spriteUrl = (dex) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${dex}.png`;

export const initialPokemon = [
  { id: 1, dex: 25,  name: "Pikachu",    type: "Electric", level: 18, status: "In Team", resetKey: 0 },
  { id: 2, dex: 4,   name: "Charmander", type: "Fire",     level: 12, status: "Caught",  resetKey: 0 },
  { id: 3, dex: 7,   name: "Squirtle",   type: "Water",    level: 14, status: "In Team", resetKey: 0 },
  { id: 4, dex: 1,   name: "Bulbasaur",  type: "Grass",    level: 15, status: "Caught",  resetKey: 0 },
  { id: 5, dex: 92,  name: "Gastly",     type: "Ghost",    level: 9,  status: "Wild",    resetKey: 0 },
  { id: 6, dex: 133, name: "Eevee",      type: "Normal",   level: 10, status: "Wild",    resetKey: 0 },
  { id: 7, dex: 63,  name: "Abra",       type: "Psychic",  level: 8,  status: "Wild",    resetKey: 0 },
  { id: 8, dex: 147, name: "Dratini",    type: "Dragon",   level: 20, status: "Caught",  resetKey: 0 },
];