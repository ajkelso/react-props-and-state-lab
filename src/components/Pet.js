import React from 'react'

class Pet extends React.Component {
  
  renderGender = (gender) => {
    return gender === 'male' ? '♂' : '♀'
  }

  handleClick = () => {
    this.props.onAdoptPet(this.props.pet.id)
  }
  
  adoptButton = (isAdopted, id) => {
    if(isAdopted){
      return  <button className="ui disabled button">Already adopted</button>
    } else {
      return  <button onClick={this.handleClick} className="ui primary button">Adopt pet</button>
    }
  }

  render() {
    const {name, gender, type, age, weight, isAdopted, id} = this.props.pet
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.renderGender(gender)}
            {name}
          </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.adoptButton(isAdopted, id)}
        </div>
      </div>
    )
  }
}

export default Pet
