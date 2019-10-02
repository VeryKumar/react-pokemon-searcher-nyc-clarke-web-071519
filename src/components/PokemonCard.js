import React from "react";
import { Card } from "semantic-ui-react";

const PokemonCard = ({ pokemon, handleClick }) => {
  const { id, name, stats, sprites } = pokemon;
  const { front, back } = sprites;
  const hp = stats.find(stat => stat.name === "hp").value;
  // console.log(hp);
  // console.log(pokemon);
  return (
    <Card>
      <div>
        <div className="image">
          <img
            src={front}
            alt="oh no!"
            //send the event, and both images to PokemonIndex to handle with
            onClick={event => handleClick(event, front, back)}
          />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
};

export default PokemonCard;
