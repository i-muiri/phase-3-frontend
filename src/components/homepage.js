import React from "react"
import Register from "./register";
import Login from "./login";
import MoviesList from "./moviesList";
import AddMovie from "./addMovie";
import { Link, Routes, Route } from "react-router-dom";

function Homepage() {


    return (
        <div >
            <div class="container-lg">
                <p className="fs-4">Welcome home ...</p>
                <Link to="/addMovie"><button class="btn btn-success">Add Movies</button></Link>
            </div>

            <Routes>
                <Route path="/login" element= {<Login/>}></Route>
                <Route path="/addMovie" element= {<AddMovie/>}></Route>
                <Route path="/register" element= {<Register/>}></Route>
                <Route path="/moviesList" element= {<MoviesList/>}></Route>
            </Routes>
        </div>
    )
}


export default Homepage