import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

class PokemonCollection extends React.Component {
  render() {
    // console.log(this.props.query);
    return (
      <Card.Group itemsPerRow={6}>
        {this.props.pokemon.map(pokemon => {
          /* else if (pokemon.name.includes(this.props.query)){} */
          if (pokemon.name.includes(this.props.query)) {
            return (
              <PokemonCard
                pokemon={pokemon}
                id={pokemon.id}
                handleClick={this.props.handleClick}
              />
            );
          }
        })}
        <h1>Hello From Pokemon Collection</h1>
      </Card.Group>
    );
  }
}

export default PokemonCollection;
