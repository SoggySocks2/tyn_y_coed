import { Link } from "react-router-dom";
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
              <Link className="nav-link" to="/tariffs">Tariffs</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactUs">Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/guestBook">Guest Book</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/whatsOn">Whats On</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-expanded="false">Things To Do</Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link className="dropdown-item" to="/venueCymru">Venue Cymru</Link>
                <Link className="dropdown-item" to="/citySightseeing">City Sight Seeing</Link>
                <Link className="dropdown-item" to="/snowdonia">Snowdonia</Link>
                <Link className="dropdown-item" to="/greatOrme">Great Orme</Link>
                <Link className="dropdown-item" to="/castles">Castles</Link>
            </div>
      </li>
            <li className="nav-item">
                <Link className="nav-link disabled" to="/castles">Admin</Link>
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
  