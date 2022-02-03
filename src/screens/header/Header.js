import './Header.css';
import { Link, } from "react-router-dom";
function Header() {
  return (
    <div className="header">

      <div>

        <input type="text" placeholder="Search companies" />
        <button type="submit" >
          <i className="fa fa-search"><Link to="/stockScreen"> Search</Link></i>
        </button>
      </div>

      <div >
        <button > <Link to="/"> Log out</Link></button>
      </div>

    </div>
  );
}

export default Header;
