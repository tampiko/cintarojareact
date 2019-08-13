import React, { Component } from 'react';
import Header from '../../components/Header';
import AddMovie from '../../components/AddMovie/AddMovie';

export default class AddMovieContainer extends Component {
  render() {
    return (
      <div>
        <Header titulo="Agregar Pelicula" />
        <AddMovie />
      </div>
    );
  }
}