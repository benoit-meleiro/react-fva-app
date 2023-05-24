import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Deconnexion from "../../component/Deconnexion";
import Menuconnex from "../../component/Menuconnex"
import MembreEq from "../../component/MembreEq";
import Compomatch from "../../component/Compomatch";
import RequireAuth from "../../component/RequireAuth";

const Compointerclub = () => {
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
      <RequireAuth/>
        <Deconnexion/>
        <div className="separator"></div>
        <Menuconnex/>
        <div className="separator"></div>
      <p className="text-center text-uppercase fw-bold color-fvaBleu">tu es captaine de l’équipe 1 des fous du volants</p>
      <div className="separator"></div>
      <div className="d-flex flex-row flex-wrap justify-content-center align-items-center gap-2">
        
      {clubsData.map((club) => {
          const PlayerEquip = 1;
          if (club.equipe === PlayerEquip) {
            return <Compomatch club={club} key={club.id} />;
          }
          return null; // Ignorer les matchs des autres équipes
        })}


       
      </div></div>
    <div className="separator"></div>
    </main>
    <Footer/>
    </>
  );
};

export default Compointerclub;