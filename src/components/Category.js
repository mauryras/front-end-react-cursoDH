import { Component } from "react";
import CategoriasCard from "./CategoriasCard";

class Category extends Component {

  constructor(props) {
    super(props);
    this.state = {
      categorias:[],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3003/api/products")
      .then((response) => response.json())
      .then((productos) => {
        
        let categorias = productos.categorias
        const cantCategorias = productos.cantCategorias
        categorias = categorias.map((categoria)=>{
          return{
            ...categoria,
            cant:cantCategorias[categoria.nombre],
          }
        })
        this.setState({
          categorias:categorias,
        });
      });
     
  }
  repetir(){

  }

  setColor() {
    const cardGenres = document.querySelector(".fondoCaja");
    cardGenres.classList.add("bg-secondary");
  }
  clearColor() {
    const cardGenres = document.querySelector(".fondoCaja");
    cardGenres.classList.remove("bg-secondary");
  }
 
////////////////////////VER DE CAMBIAR PARA PODER REUTILIZAR COMPONENTE///////////////
  render() {
  console.log(this.state.categorias)
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
              
              {this.state.categorias.map((categoria, index) => (
              <CategoriasCard key={index + categoria} genero={categoria.nombre} cant={categoria.cant}/>
                                                          ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Category;
