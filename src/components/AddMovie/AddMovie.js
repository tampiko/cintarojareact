import React, { Component } from 'react';
import axios from "axios";
import Swal from "sweetalert2";

export default class AddMovie extends Component {

  state = {
    // movieId: "333",
    title: "Matrix3",
    year: "2012",
    description: "Experto en Informatica Descubre Matrix",
    image: ["https://vignette.wikia.nocookie.net/matrix/images/d/df/Thematrixincode99.jpg"],
    theme: "accion",
    director: "Wachowsky"
  }

  handleChange(event) {
    event.preventDefault();
    console.log(event.target);
    console.log(event.target.id);

    this.setState({
      [event.target.id]: event.target.value
    })
  }

  saveMovie(state) {
    console.log(state);
    axios.post('https://cintaroja32.herokuapp.com/api/v1/pelicula', state)
      .then(() => {
        Swal.fire("Pelicula Guardada", "", "success")
          .then(() => window.location.assign('/'))
      }
      )
      .catch(err => Swal.fire("Error", "", "Error"))
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="title">Nombre</label>
          <input id="title" type="text" value={this.state.title} onChange={this.handleChange.bind(this)}></input>
          <br />
          <label htmlFor="year">Year</label>
          <input id="year" type="number" min="0" value={this.state.year} onChange={this.handleChange.bind(this)}></input>
          <br />
          <label htmlFor="description">description</label>
          <input id="description" type="text" value={this.state.description} onChange={this.handleChange.bind(this)}></input>
          <br />
          <label htmlFor="theme">theme</label>
          <select id="theme" name="theme" onChange={this.handleChange.bind(this)}>
            <option value="accion">accion</option>
            <option value="drama">drama</option>
            <option value="comedia">comedia</option>
            <option value="terror">terror</option>
          </select>
          <br />
          <label htmlFor="director">director</label>
          <input id="director" type="text" value={this.state.director} onChange={this.handleChange.bind(this)}></input>
          <br />
          <button type="button" className="btn btn-outline-primary" onClick={() => this.saveMovie(this.state)}>Guardar</button>

        </form>
      </div>
    )
  }
}
