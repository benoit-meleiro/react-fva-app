import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Deconnexion from "../../component/Deconnexion";
import Menuconnex from "../../component/Menuconnex"
import MembreEq from "../../component/MembreEq";
import Compomatch from "../../component/Compomatch";


const Compointerclub = () => {
  const [clubsData, setClubsData] = useState([]);
  const navigate = useNavigate();
 
  useEffect(() => {
    fetch("http://localhost:3002/clubs")
      .then((clubsDataJson) => {
        return clubsDataJson.json();
      })
      .then((clubsDataJs) => {
        setClubsData(clubsDataJs.data);
        
      });
  }, []);
   
  
  
  
  return (
 <>
    <Header/>
    <main class="flex-shrink-0">
      <div class="container">
        <h1 class="text-uppercase text-center my-lg-2">espaces licenciés</h1>
      
        <Deconnexion/>
        <div class="separator"></div>
        <Menuconnex/>
        <div class="separator"></div>
      <p class="text-center text-uppercase fw-bold color-fvaBleu">tu es captaine de l’équipe 1 des fous du volants</p>
      <div class="separator"></div>
      <div class="d-flex flex-row flex-wrap justify-content-center align-items-center gap-2">
        
      {clubsData.map((club) => {
          const PlayerEquip = 1;
          if (club.equipe === PlayerEquip) {
            return <Compomatch club={club} key={club.id} />;
          }
          return null; // Ignorer les matchs des autres équipes
        })}


       
      </div></div>
    <div class="separator"></div>
    </main>
    <Footer/>
    </>
  );
};

export default Compointerclub;