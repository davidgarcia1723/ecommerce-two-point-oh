import React from 'react';
import '../Navbar/Navbar.css';
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
    return (
        <div>
            <head>
            <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"
            integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous" />
            <link rel="stylesheet" href="https://use.fontwesome.com/releases/v5.4.1/css/all.css" />
            </head>
        <header>
        <nav id="navbar">
            <div className="container-nav">
                <h1 className="logo">
                    <div className="controller"><i className="fas fa-gamepad"></i></div> Switch <span className="blue">It</span> <span className="red">Up</span></h1>
                <ul>
                    <li>
                        <NavLink exact={true} to="/AboutUs">Home</NavLink>
                    </li>
                    <li>
                        <NavLink exact={true} to="/Product">Products</NavLink>
                    </li>
                    <li>
                        <NavLink exact={true} to="/Contact">Contact</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
        </header>
        </div>
        )   
    };
};

export default Navbar;