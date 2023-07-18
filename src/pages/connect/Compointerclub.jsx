import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Deconnexion from "../../component/Deconnexion";
import Menuconnex from "../../component/Menuconnex"
import MembreEq from "../../component/MembreEq";
import Compomatch from "../../component/Compomatch";
import RequireAuth from "../../component/RequireAuth";
import jwt_decode from "jwt-decode";

const Compointerclub = () => {
  const [playerInfo, setPlayerInfo] = useState(null);
  const [clubsData, setClubsData] = useState([]);
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");
  useEffect(() => {
    fetch("http://localhost:3002/clubs",{
      headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${jwt}` 
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
   // ! APPEL POUR AVOIR ID DU USER
useEffect (() => {
  
  
  const jwt = localStorage.getItem("jwt");
  const jwtToken = localStorage.getItem("jwt");
  const decodedToken = jwt_decode(jwtToken);
  const userId = decodedToken ? decodedToken.data : null;
  console.log(jwtToken)
  console.log(decodedToken)
  console.log(decodedToken.data)
  console.log(userId)
  
  fetch(`http://localhost:3002/players/${userId}`, {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
    body: JSON.stringify(),})
    .then((playerInfoDataJson) => {
      return playerInfoDataJson.json();
    })
    .then((playersDataJs) => {
      setPlayerInfo(playersDataJs.data);
      
    })
    .catch((error) => {
      console.log(error);
    });
  
}, []);



let PlayerEquip = "";

if (playerInfo?.joueur_interclubs) {
  PlayerEquip = playerInfo.joueur_interclubs.substring(7, 8);
}
  
  
  
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
      {/* <p className="text-center text-uppercase fw-bold color-fvaBleu">tu es captaine de l’équipe 1 des fous du volants</p> */}
      <div className="separator"></div>
      <div className="d-flex flex-row flex-wrap justify-content-center align-items-center gap-2">
        
      {clubsData.map((club) => {
          
          if (club.equipe == PlayerEquip) {
            return <Compomatch club={club} key={club.id} />;
          }
          return null; 
        })}


       
      </div></div>
    <div className="separator"></div>
    </main>
    <Footer/>
    </>
  );
};

export default Compointerclub;