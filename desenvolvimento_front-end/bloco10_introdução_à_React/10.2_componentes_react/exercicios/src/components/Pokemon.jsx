import React, { Component } from "react";
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render() {
    const { pokemon: { name, type, averageWeight: { value, measurementUnit }, image }} = this.props;
    return (
      <main>
        <h3>{ name }</h3>
        <li>{ type }</li>
        <li>{ `${value} ${measurementUnit}` }</li>
        <img src={ image } alt={ name } />
      </main>
    )
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string
    
  }).isRequired
}

export default Pokemon;
