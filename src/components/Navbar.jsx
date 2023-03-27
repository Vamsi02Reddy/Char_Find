import React from 'react'
import {NavLink,Link} from 'react-router-dom'      //NavLink has property for active className link underlining the current page    
import style from "../App.css";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg  bg-light bg-body-tertiary mb-4">
            <div className="container ">
                <Link to="/" className="text-center navbar-brand fs-3 fw-bold">
                    Rick & Morty <span className="text-primary">WiKi</span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <style jsx>
                        {`
                        button[aria-expanded="false"] > .close{
                            display:none;
                        }
                        button[aria-expanded="true"] > .open{
                            display:none;
                        }
                        `}
                    </style>
                    <i className='fas fa-bars open fw-bold text-dark'></i>
                    <i className='fas fa-times close fw-bold text-dark'></i>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink activeClassName="active" className="nav-link" to="/">Characters</NavLink>
                        <NavLink className="nav-link" to="/episode">Episodes</NavLink>
                        <NavLink className="nav-link" to="/location">Location</NavLink>
                        
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar