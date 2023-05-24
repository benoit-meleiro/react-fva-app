import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Deconnexion from "../../component/Deconnexion";
import Menuconnex from "../../component/Menuconnex"
import MembreEq from "../../component/MembreEq";
import Matchinter from "../../component/Matchinter";


const Dispointerclub = () => {
  
  const [clubsData, setClubsData] = useState([]);
  const navigate = useNavigate();
 
  const jwt = localStorage.getItem("jwt");
  useEffect(() => {
    fetch("http://localhost:3002/clubs",{
      headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${jwt}` // Ajouter le JWT au header "Authorization"
            },
      body: JSON.stringify(),
                })
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

        {clubsData.map((club) => {
          const PlayerEquip = 1;
          if (club.equipe === PlayerEquip) {
            return <Matchinter club={club} key={club.id} />;
          }
          return null; // Ignorer les matchs des autres équipes
        })}
        
        
          
        
      </div>
    <div className="separator"></div>
    </div>
    </main>
    <Footer/>
    </>
  );
};

export default Dispointerclub;