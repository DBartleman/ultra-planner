import React from 'react';

//TODO: programmatically render the logged in and logged out stuff here, NOT in CSS

class Navbar extends React.Component{
  render() {
    return (
      <div>
        <ul id="navbar">
          <li className="navbar-left"><a href="/">Ultra Planner</a></li>
          <li className="navbar-left"><a href="#">Search</a></li>
          <li className="navbar-left"><a href="/tasks">Tasks</a></li>
          <li className="navbar-left"><a href="/lists">Lists</a></li>

          <li className="navbar-right hidden-if-logged-in"><a href="/login">Log in</a></li>
          <li className="navbar-right hidden-if-logged-in"><a href="/#">Sign up</a></li>
          <li className="navbar-right hidden-if-logged-out"><a href="#">[username]</a></li>
          <li className="navbar-right hidden-if-logged-out"><a href="/#">Sign out</a></li>
        </ul>
      </div>
    );
  }
}

export default Navbar;



    
