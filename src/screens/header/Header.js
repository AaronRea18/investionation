import './Header.css';
import { Link, } from "react-router-dom";
function Header({strings}) {
  return (
    <div className="header">

      <div>

        <input type="text" placeholder={strings.searchCompanies} />
        <button type="submit" >
          <i className="fa fa-search"><Link to="/stockScreen"> {strings.search}</Link></i>
        </button>
      </div>

      <div >
        <button > <Link to="/"> {strings.logout}</Link></button>
      </div>

    </div>
  );
}

export default Header;
