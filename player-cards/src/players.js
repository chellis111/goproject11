// src/players.js
const players = [
  {
    name: "Dybala",
    team: "Roma",
    nationality: "Agentina",
    jerseyNumber: 10,
    age: 29,
    imageURL: `${require("./assets/dybala.webp")}`,
    position: "CAM",
    PAC: 80,
    SHO: 85,
    PAS: 84,
    DRI: 89,
    DEF: 41,
    PHY: 65,
  },
  {
    name: "MESSI",
    team: "Barcelona",
    nationality: "Agentina",
    jerseyNumber: 10,
    age: 30,
    imageURL: `${require("./assets/messi.webp")}`,
    position: "RWF",
    PAC: 79,
    SHO: 85,
    PAS: 87,
    DRI: 92,
    DEF: 33,
    PHY: 64,
  },
  {
    name: "Neymar",
    team: "PSG",
    nationality: "Brazil",
    jerseyNumber: 5,
    age: 25,
    imageURL: `${require("./assets/neymar.webp")}`,
    position: "LW",
    PAC: 85,
    SHO: 79,
    PAS: 84,
    DRI: 84,
    DEF: 37,
    PHY: 60,
  },
  {
    name: "Ronaldo",
    team: "Al Hilal",
    nationality: "Portugal",
    jerseyNumber: 7,
    age: 35,
    imageURL: `${require("./assets/ronaldo.webp")}`,
    position: "CF",
    PAC: 77,
    SHO: 88,
    PAS: 77,
    DRI: 80,
    DEF: 34,
    PHY: 77,
  },
];

export default players;