import logoDH from "../assets/images/logoC.png";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <ul
      className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {/* <!-- Sidebar - Brand --> */}
      <Link
        className="sidebar-brand d-flex align-items-center justify-content-center"
        to={"/"}
      >
        <div className="sidebar-brand-icon">
          <img className="w-100" src={logoDH} alt="Ceramique" />
        </div>
      </Link>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider my-0" />

      {/* <!-- Nav Item - Dashboard --> */}
      <li className="nav-item active">
        <Link className="nav-link" to={"/"}>
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard - Ceramique</span>
        </Link>
      </li>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider" />

      {/* <!-- Heading --> */}
      <div className="sidebar-heading">Actions</div>

      {/* <!-- Nav Item - Pages --> */}
      <li className="nav-item">
        <Link className="nav-link collapsed" to={"/peliculas"}>
          <i className="fas fa-fw fa-folder"></i>
          <span>Productos/Usuarios</span>
        </Link>
      </li>

      {/* <!-- Nav Item - Charts --> */}
      <li className="nav-item">
        <Link className="nav-link" to={"/ultima"}>
          <i className="fas fa-fw fa-chart-area"></i>
          <span>Último Producto</span>
        </Link>
      </li>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider d-none d-md-block" />
    </ul>
  );
}

export default Sidebar;
