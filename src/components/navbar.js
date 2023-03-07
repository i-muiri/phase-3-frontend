import React, {useState} from "react";
import { Link } from "react-router-dom";
import Homepage from "./homepage";




function Navbar({ onSearch }) {


     const [query, setQuery] = useState('');
  
    function handleQuery(e) {
      e.preventDefault() 
  
      onSearch(query)
    }


  return (
    <div>
      <nav class="navbar bg-dark">
        <div class="container-fluid">
          <Link to="/">
            <button class="btn btn-outline-success ml-10"> <h1 className="title">FMovies</h1></button></Link>
          <form class="d-flex" role="search">
            <input class="form-control me-2" value={query} onChange={ e => setQuery(e.target.value)} type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit" onClick={e => handleQuery(e)}>Search</button>
          </form>
        </div>
        <Link to="/register"><button class="btn btn-success">Register</button></Link> 
      
        <Link to="/login"><button class="btn btn-success">Sign In</button></Link>
      </nav>
      <Homepage />
    </div>
  )
}

export default Navbar