import React from 'react'

import Pet from './Pet'


class PetBrowser extends React.Component {
  
  renderPets = () => {
    return this.props.pets.map(pet => <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet}/> )
  }
  
  render() {
    this.renderPets()
    return <div className="ui cards">
      {this.renderPets()}
    </div>
  }
}

export default PetBrowser
