import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import { Search } from "semantic-ui-react";
import _ from "lodash";
const API = "http://localhost:3000/pokemon";

class PokemonPage extends React.Component {
  state = {
    pokemon: [],
    query: ""
  };
  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(data =>
        this.setState({
          pokemon: data
        })
      );
  }

  handleClick = (event, front, back) => {
    // console.log(event.target.src);
    // console.log(front);
    // console.log(back);
    if (event.target.src === front) {
      event.target.src = back;
    } else {
      event.target.src = front;
    }
  };

  handleSearch = (e, { value }) => {
    this.setState(
      {
        query: value
      }
      // ,console.log(this.state)
    );
  };

  addPokemon = pokemon => {
    this.setState({
      pokemon: [...this.state.pokemon, pokemon]
    });
  };

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search
          onSearchChange={_.debounce(this.handleSearch, 500)}
          showNoResults={false}
        />
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
        <br />
        <PokemonCollection
          pokemon={this.state.pokemon}
          handleClick={this.handleClick}
          query={this.state.query}
        />
      </div>
    );
  }
}

export default PokemonPage;
