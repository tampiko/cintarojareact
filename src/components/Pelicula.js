import React from 'react';
import Swal from 'sweetalert2';
import Axios from 'axios';

const removeMovie = (pelicula) => {
	Swal.fire({
		title: `¿Estas seguro de borrar la película ${pelicula.title}?`,
		text: "No podrás recuperar la informacion",
		type: 'warning',
		showCancelButton: true,
		confirmButtonText: 'Si',
		cancelButtonText: 'No',
		confirmButtonColor: '#ff0055',
		reverseButtons: true
	})
		.then((res) => {
			if (res.value) {
				Axios.delete(`https://cinta-roja32.herokuapp.com/api/v1/peliculas/delete?id=${pelicula._id}`)
					.then(() => {
						Swal.fire('Pelicula Eliminada', '', 'success')
							.then(() => window.location.reload())
					})
					.catch(err => Swal.fire('Elemento no Eliminado', err, "warning"))
			}
		})
}

const Pelicula = ({ pelicula }) => (
	<div className="col-sm-4">
		<div className="card">
			<img src={pelicula.image} className="card-img-top" alt="..."></img>
			<div className="card-body">
				<h5 className="card-title">{pelicula.title}</h5>
				<p className="card-text">Año: {pelicula.year}</p>
				<p className="card-text">Descipción: {pelicula.description}</p>
				<p className="card-text">Género: {pelicula.theme}</p>
				<p className="card-text">Director: {pelicula.director}</p>
				<button onClick={() => removeMovie(pelicula)} className="btn btn-primary">Eliminar</button>
			</div>
		</div>
	</div>
);

export default Pelicula
