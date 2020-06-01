import React from 'react';
import './AboutUs.css';
import Slideshow from '../Slideshow/Slideshow';
import { NavLink } from 'react-router-dom';

class AboutUs extends React.Component {
    render() {
        return (
            <div>
                <head>
                    <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet" />
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"
                    integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous" />
                    <link rel="stylesheet" href="https://use.fontwesome.com/releases/v5.4.1/css/all.css" />
                </head>
                <Slideshow />
                <section className="aboutUs">
                    <img src="img/About.jpg" alt="AboutUs" />
                    <h1>About Us</h1>
                    <p>Welcome to Switch It Up! We are a retailer dedicated to selling Nintendo Switch products. We offer a variety
                    of items, including Swtich systems and video games. Founded in 2020 by CEO David Garcia, this project was
                    started in Charlotte, North Carolina as a passion product stemming from his love for Nintendo products. </p>
                    <NavLink className="btn-shop" exact={true} to="/Product">Shop Now!</NavLink>
                </section>
            </div>
        )
    };
};

export default AboutUs;