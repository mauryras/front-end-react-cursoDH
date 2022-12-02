import { Component } from "react";


class LastProduct extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ultimo:[],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3003/api/products")
      .then((response) => response.json())
      .then((ultimo) => {
        this.setState({
          ultimo: ultimo.data.pop(),
        });
        console.log(ultimo.data.pop());
      });
  }

  render(){
    console.log(this.state.ultimo.image);
    return (
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">
              Último producto ingresado
            </h5>
          </div>
          <div className="card-body">
            <div className="text-center">


            {this.state.ultimo.image ? (
              <img
                className= "img-fluid px-3 px-sm-4 mt-3 mb-4"
                style={{ width: "40rem" }}
                src={`http://localhost:3003/bancoimagenes/${this.state.ultimo.image}`}
                alt=" Ultimo producto"
                />
                ) : (
                <p>Cargando ...</p>
                )}
            </div>
            <p>
            {this.state.ultimo.description}
            </p>
          
          </div>
        </div>
      </div>
    );
  }
}

export default LastProduct;
