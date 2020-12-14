import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
  return <div className="ui cards">{this.props.pets.map(pet => <Pet onAdopt={this.props.onAdoptPet} key={pet.id} petData={pet}/>)}</div>
  }
}

export default PetBrowser
