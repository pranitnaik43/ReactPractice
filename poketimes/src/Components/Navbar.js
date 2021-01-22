import React from 'react';
import {Link, NavLink, withRouter} from 'react-router-dom';

const Navbar = (props) => {
    setTimeout(()=>{
        props.history.push('/about');
    }, 3000);
    return (
        <nav className="nav-wrapper red darken-3">
            <a href="/" className="brand-logo">Poke'Times</a>
            <ul className="right">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul>
        </nav>
    )
}

export default withRouter(Navbar);