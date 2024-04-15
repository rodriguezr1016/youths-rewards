import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import Cart from "../Cart";



function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div className="flex">
        <div className= "container">
	<div className= "tabs">
		<input type="radio" id="radio-1" name="tabs"/>
		<label className= "tab" for="radio-1"><Link to={{pathname: "/orderHistory"}}>
              Order History
            </Link></label>
		<input type="radio" id="radio-2" name="tabs"/>
		<label className= "tab" for="radio-2"><a href="/" onClick={() => Auth.logout()}>
              Logout
            </a></label>
		<input type="radio" id="radio-3" name="tabs"/>

	</div>
</div>
</div>
      );
    } else {
      return (
        <div className="flex">
        <div className= "container">
	<div className= "tabs">
		<input type="radio" id="radio-1" name="tabs" />
		<label className= "tab" for="radio-1"><Link to={{pathname: "/login"}}>
              Login
            </Link></label>
		<input type="radio" id="radio-2" name="tabs"/>
		<label className= "tab" for="radio-2"><Link to={{pathname: "/signup"}}>
              Register
            </Link></label>
	</div>
</div>
</div>

      );
    }
  }

  return (
    <div>
    <header className="flex-row header">
            <img className='logo'src='https://youths-rewards.s3.us-west-1.amazonaws.com/IMG_8462+(1).png'></img>
      <h1>
        <Link to="/">
    

          Youths Reward
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
    <img className='coolWebsite'src='https://youths-rewards.s3.us-west-1.amazonaws.com/nothing_2796305478.png'></img>
    </div>
  );
}

export default Nav;
