import React, { Component } from 'react'
import FruitBasket from './FruitBasket'

class Fruits extends Component {
  state = {
    favorite: '',
    second: '',
    third: '',
  }

  handleChange = (e, attr) => {
    this.setState({
      [attr]: e.target.value,
    })
  }

  renderFruits = () => {
    return <h2>{this.state.favorite} {this.state.second} {this.state.third}</h2>
  }

  render() {
    const {favorite, second, third } = this.state
    return (
      <div className='fruit-basket' style={{marginLeft: '100px', marginTop: '50px'}}>
        <h2>Picnic</h2>
        <FruitBasket 
          attr='favorite'
          type='text'
          label='Pick your favorite fruit'
          value={favorite}
          handleChange={this.handleChange}
        />
        <FruitBasket 
          attr='second'
          type='text'
          label='Second favorite'
          value={second}
          handleChange={this.handleChange}
        />
        <FruitBasket 
          attr='third'
          type='text'
          label='Third favorite'
          value={third}
          handleChange={this.handleChange}
        />
        <br />
        <h1>Fruits:</h1>
        {this.renderFruits()}
      </div>
    )
  }
}

export default Fruits