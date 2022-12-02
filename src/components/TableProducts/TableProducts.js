import { Component } from "react";

class TableProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productos:[],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3003/api/products")
      .then((response) => response.json())
      .then((productos) => {
        this.setState({
          productos:productos.data,
        });
      });  
  }

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Descuento</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {this.state.productos.map((row) => {
            return (
              <tr key={row.name}>
                <td>{row.name}</td>
                <td>{row.description}</td>
                <td>${row.price}</td>
                <td>{row.discount}%</td>
                <td>{row.stock} u.</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Descuento</th>
            <th>Stock</th>
          </tr>
        </tfoot>
      </table>
    );
  }
}

export default TableProducts;
