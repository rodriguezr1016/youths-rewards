import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import Cart from "../Cart";



function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to={{pathname: "/orderHistory", state: {scrollTo: ".container my-1"}}}>
              Order History
            </Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
       <div className="dropdown">
        <button id="hamburger">&#9776;</button> 
<div id="dropdown">
<ul >
          <li className="mx-1">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login">
              Login
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/orderHistory">
              Order History
            </Link>
          </li>
          </ul>
</div>
</div>


      );
    }
  }

  return (
    <div>
    <header className="flex-row header">
            <img className='logo'src='images/none.PNG'></img>
      <h1>
        <Link to="/">
    

          Youths Reward
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
    <img className='coolWebsite'src='images/nothing_2796305478.png'></img>
    </div>
  );
}

export default Nav;
