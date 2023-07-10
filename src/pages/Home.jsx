import React from "react";
import Header from "../components/Header";

// Logo
import BatManLogo from '../assets/img/batman.png';

const Home = () => {
    return (
        <div className="home-page">
            
            <Header />
        
            <div className="main-content">
                <div className="batman-logo-wrapper">
                    <img src={BatManLogo} alt="Batman Logo" />
                </div>
                <h1>
                    It's Batman
                    He is SuperHero
                </h1>
            </div>



        </div>
    )
};

export default Home;
