import { Link } from "react-router-dom";
import './navBar.css';
import Home from '../components/svg/home';

function navBar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="http://www.bbc.co.uk">
          <Home />
        </a>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactUs">Contact Us</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://www.bbc.co.uk">Retailers</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="http://www.bbc.co.uk" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-expanded="false">
                Markets
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="http://www.bbc.co.uk">Regions</a>
                <a className="dropdown-item" href="http://www.bbc.co.uk">Areas</a>
                <a className="dropdown-item" href="http://www.bbc.co.uk">Retailer Groups</a>
                <a className="dropdown-item" href="http://www.bbc.co.uk">Retailers</a>
                <a className="dropdown-item" href="http://www.bbc.co.uk">Brands</a>
                <a className="dropdown-item" href="http://www.bbc.co.uk">Retailer Sites</a>
                <a className="dropdown-item" href="http://www.bbc.co.uk">Retailer Codes</a>
            </div>
      </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="http://www.bbc.co.uk">Admin</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
      </nav>
    );
  }
  
  export default navBar;
  