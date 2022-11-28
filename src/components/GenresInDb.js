import { Component } from "react";
import GenreCard from "./GenreCard";

class GenresInDb extends Component {

  constructor(props) {
    super(props);
    this.state = {
      categorias:[],
      cantCategorias:[],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3003/api/products")
      .then((response) => response.json())
      .then((productos) => {
        this.setState({
          categorias:productos.categorias,
          cantCategorias:productos.cantCategorias,
        });
      });
     
  }
  

  setColor() {
    const cardGenres = document.querySelector(".fondoCaja");
    cardGenres.classList.add("bg-secondary");
  }
  clearColor() {
    const cardGenres = document.querySelector(".fondoCaja");
    cardGenres.classList.remove("bg-secondary");
  }
  //{this.state.categorias.map((categoria, index) => (
   // <GenreCard key={index + categoria} genero={categoria.nombre}/>
  //))}
////////////////////////VER DE CAMBIAR PARA PODER REUTILIZAR COMPONENTE///////////////
  render() {
    return (
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5
              onMouseOver={() => this.setColor()}
              onMouseLeave={() => this.clearColor()}
              className="m-0 font-weight-bold text-gray-800"
            >
              Cantidad de productos por categorias
            </h5>
          </div>
          <div className="card-body fondoCaja">
            <div className="row">
        
            <GenreCard key={this.state.categorias[0]?.nombre} genero={this.state.categorias[0]?.nombre} cant={this.state.cantCategorias?.velas}/>
            <GenreCard key={this.state.categorias[1]?.nombre} genero={this.state.categorias[1]?.nombre} cant={this.state.cantCategorias?.velones}/>
            <GenreCard key={this.state.categorias[2]?.nombre} genero={this.state.categorias[2]?.nombre} cant={this.state.cantCategorias?.accesorios}/>
            <GenreCard key={this.state.categorias[3]?.nombre} genero={this.state.categorias[3]?.nombre} cant={this.state.cantCategorias?.otra}/>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GenresInDb;
