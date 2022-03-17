import React from "react";
import { Link } from "react-router-dom"
import logo from "../assets/logo.png"

const Navbar = () => {
    return (
        <header>
            <nav className="nav">
                <Link to="/"><img className="logo" src={logo}></img></Link >
                <Link to="/ShoppingCart" className="nav__icon"><span className="material-icons">shopping_cart</span></Link>
                <div className="nav__links">
                    <Link to="/categoria/electronics">Electronicos</Link>
                    <Link to="/categoria/jewelery">Joyas</Link>
                    <Link to="categoria/men's clothing">Ropa Hombre</Link>
                    <Link to="categoria/women's clothing">Ropa Mujer</Link>
                </div>
            </nav>
        </header >
    )
}
export default Navbar
