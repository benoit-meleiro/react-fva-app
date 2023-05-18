import React from "react";
// import { Link } from "react-router-dom";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Menuconnex from "../../component/Menuconnex"
import Creneaubad from "../../component/Creneaubad"
import Creneaubadclosed from "../../component/Creneaubadclosed"
import Deconnexion from "../../component/Deconnexion";

const Creneaux = () => {return (
    
    <>
    <Header/>
    <main class="flex-shrink-0">
      <div class="container">
        <h1 class="text-uppercase text-center my-lg-2">espaces licenciés</h1>
      
        <Deconnexion/>
        <div class="separator"></div>
        <Menuconnex/>
        <div class="separator"></div>
        <div class=" text-center separator">Cliquez sur le bouton pour indiquer si vous allez à l'AquaPoney ou si vous venez au Bad</div>
        <div class="d-flex flex-row flex-wrap justify-content-start align-items-center gap-2">
          <Creneaubad/>
          <Creneaubadclosed/>
          <Creneaubad/>
        </div>  
      </div>
    </main>
    <Footer/>
    </>

  );
};

export default Creneaux;