import React from "react";
// import { Link } from "react-router-dom";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Deconnexion from "../../component/Deconnexion";
import Menuconnex from "../../component/Menuconnex"
import MembreEq from "../../component/MembreEq";
import Matchinter from "../../component/Matchinter";


const Dispointerclub = () => {return (
 <>
    <Header/>
    <main className="flex-shrink-0">
      <div className="container">
        <h1 className="text-uppercase text-center my-lg-2">espaces licenciés</h1>
      
        <Deconnexion/>
        <div className="separator"></div>
        <Menuconnex/>
        <MembreEq/>
        <div className="separator"></div>
        <div className=" text-center separator">Cliquez sur le bouton pour indiquer si vous allez à l'AquaPoney ou si vous venez au Bad</div>
        <div className="d-flex flex-row flex-wrap justify-content-center align-items-center gap-2">
        <Matchinter/>
        
          
        
      </div>
    <div className="separator"></div>
    </div>
    </main>
    <Footer/>
    </>
  );
};

export default Dispointerclub;