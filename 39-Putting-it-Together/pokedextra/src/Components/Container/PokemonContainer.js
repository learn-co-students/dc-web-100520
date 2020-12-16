import React, { Component } from 'react'
//Components
import { Card } from '../Presentational/Card'

export default class PokemonContainer extends Component {
    render() {
        return (
            <div className="row justify-content-center">
                {this.props.pokemonData.map(
                    pokemon => <Card key={pokemon.id} handleAction={this.props.addToTeam} pokeData={pokemon}/>
                )}
            </div>
        )
    }
}
