import React from "react";
import {Link} from "react-router-dom";
function menu()
{
  return(
    <>
    <Link to="/" className="menu">1st page</Link>
    <Link to="/home" className="menu">Home</Link>
    
    
    </>
  )
}
export default Menu