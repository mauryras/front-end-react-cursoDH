import React, { Component } from "react";
import RowItem from "./RowItem";

class ContentRowMovies extends Component {

  constructor(props) {
    super(props);
    this.state = {
      productos: {},
      usuarios: {},
      categorias:[],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3003/api/products")
      .then((response) => response.json())
      .then((productos) => {
        this.setState({
          productos: productos,
          categorias:productos.cantCategorias.total,
          
        });
        console.log(productos);
      });
      fetch("http://localhost:3003/api/users")
      .then((response) => response.json())
      .then((usuarios) => {
        this.setState({
          usuarios: usuarios,
          
        });
        console.log(usuarios);
      });
  
  }

  render(){
  return (
    <div className="row">
          
          <RowItem 
          key={this.state.productos.total}
          title={"Total de productos"}
          quantity={this.state.productos.total}
          color={"primary"}
          icon={"fa-list"}
          />
           <RowItem 
          key={this.state.usuarios.total}
          title={"Total de Usuarios"}
          quantity={this.state.usuarios.total}
          color={"success"}
          icon={"fa-users"}
          />
             <RowItem 
          key={this.state.categorias}
          title={"Total de Categorias"}
          quantity={this.state.categorias}
          color={"warning"}
          icon={"fa-list"}
          />
    </div>
  )
  };
}

export default ContentRowMovies;
