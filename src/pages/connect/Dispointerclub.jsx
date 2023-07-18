import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Deconnexion from "../../component/Deconnexion";
import Menuconnex from "../../component/Menuconnex"

import Matchinter from "../../component/Matchinter";
import jwt_decode from "jwt-decode";

const Dispointerclub = () => {
  const [playerInfo, setPlayerInfo] = useState(null);
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
   // ! APPEL POUR AVOIR ID DU USER
useEffect (() => {
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
const Captain = PlayerEquip == 1 ? (<><img src="/img/Jean_Tourloupe.jpg" alt="icone de jeune joueuse symbolisant l'âge des adhérents" width="48" height="48" className="d-inline align-text-top rounded-pill mx-3  border-fva-bleu border-2"/>
<p className="d-inline color-fvaBleu"><span className="fw-bold">Jean</span> est capitaine de l'équipe</p></>):(<><img src="/img/Elsa_Rose.jpg" alt="icone de jeune joueuse symbolisant l'âge des adhérents" width="48" height="48" className="d-inline align-text-top rounded-pill mx-3  border-fva-bleu border-2"/>
<p className="d-inline color-fvaBleu"><span className="fw-bold">Elsa</span> est capitaine de l'équipe</p></>);

  return (
 <>
    <Header/>
    <main className="flex-shrink-0">
      <div className="container">
        <h1 className="text-uppercase text-center my-lg-2">espaces licenciés</h1>
      
        <Deconnexion/>
        <div className="separator"></div>
        <Menuconnex/>
        <p className="text-center text-uppercase fw-bold color-fvaBleu">tu es un membre de l’équipe {PlayerEquip}  des fous du volants</p>
      <div className="d-flex align-items-center justify-content-center">
        {Captain}
      </div>
        <div className="separator"></div>
        <div className=" text-center separator">Cliquez sur le bouton pour indiquer si vous allez à l'AquaPoney ou si vous venez au Bad</div>
        <div className="d-flex flex-row flex-wrap justify-content-center align-items-center gap-2">

        {clubsData.map((club) => {
          
          
          
          
          if (club.equipe == PlayerEquip) {
            return <Matchinter club={club}  key={club.id} />;
          }
          return null; 
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