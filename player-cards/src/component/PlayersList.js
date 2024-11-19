import Player from "./Player";
import players from "../players";
import React from "react";

const PlayersList = () => {
  return (
    <section className="container">
      <div className="row">
        {players.map((player) => {
          return (
            <Player
              name={player.name}
              team={player.team}
              nationality={player.nationality}
              jerseyNumber={player.jerseyNumber}
              age={player.age}
              key={player.name}
              imageURL={player.imageURL}
              position={player.position}
              PAC={player.PAC}
              SHO={player.SHO}
              PAS={player.PAS}
              DRI={player.DRI}
              DEF={player.DEF}
              PHY={player.PHY}
            />
          );
        })}
      </div>
    </section>
  );
};

export default PlayersList;
