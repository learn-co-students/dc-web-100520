import React, { Component } from 'react'
//Components
import PokeContainer from './PokemonContainer'
import { Navbar } from '../Presentational/Navbar'
import { Form } from '../Presentational/Form'
import TeamContainer from './TeamContainer'


export default class App extends Component {

  state = {
    pokemon: [],
    team: [],
    showForm: false
  }

  async componentDidMount(){
    const response = await fetch('http://localhost:3001/pokemon')
    const data = await response.json()
    this.setState({pokemon: data})
  }

  handleShowForm = () => this.setState({showForm: !this.state.showForm})

  addToTeam = (id) => {
    if(this.state.team.length < 6 && !this.state.team.includes(id)) {
      this.setState({
        team: [...this.state.team, id]
      })
    }
  }

  removeFromTeam = (id) => {
    let newTeam = this.state.team.filter(pokeId => pokeId != id)
    this.setState({
      team: newTeam
    })
  }

  render() {

    const pokeTeamMonsters = this.state.pokemon.filter(pokemon => this.state.team.includes(pokemon.id))

    return (
      <div className="bg-dark">
      <Navbar 
        handleShowForm={this.handleShowForm}
      />
    
      {this.state.showForm ? <Form /> : null}
      <TeamContainer
        removeFromTeam={this.removeFromTeam}
        pokemonData={pokeTeamMonsters}
        removeFromTeam={this.removeFromTeam}
      />
      <div className="container">
        <PokeContainer
          pokemonData={this.state.pokemon}
          addToTeam={this.addToTeam}
        />
      </div>
      </div>
    )
  }
}

