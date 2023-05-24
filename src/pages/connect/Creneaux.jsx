import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Menuconnex from "../../component/Menuconnex"
import Creneaubad from "../../component/Creneaubad"
import Creneaubadclosed from "../../component/Creneaubadclosed"
import Deconnexion from "../../component/Deconnexion";
import RequireAuth from "../../component/RequireAuth";


const Creneaux = () => {
  // créé un state creneauxData pour pouvoir stocker les données récupérées
  // depuis l'API, à savoir la liste des creneaux
  // par défaut (donc au premier chargement du composant), le state
  // contient un tableau vide
  const [creneauxData, setCreneauxData] = useState([]);

  // je récupère la fonction navigate du react router
  const navigate = useNavigate();

  // je fais l'appel fetch vers l'url de mon api (qui est en local)
  // et qui renvoie un json contenant la liste des creneaux en BDD
  // quand l'appel est terminé, je stocke les données récupérées
  // dans le state, ce qui force mon composant à se recharger
  const jwt = localStorage.getItem("jwt");
  useEffect(() => {
    fetch("http://localhost:3002/sessions",{
     
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${jwt}` // Ajouter le JWT au header "Authorization"
      },
      body: JSON.stringify(),
            })
    
      .then((creneauxDataJson) => {
        return creneauxDataJson.json();
      })
      .then((creneauxDataJs) => {
        setCreneauxData(creneauxDataJs.data);
        
      });
  }, []);
    
  return (
    
    <>
    <Header/>
    <RequireAuth/>
    <main className="flex-shrink-0">
      <div className="container">
        <h1 className="text-uppercase text-center my-lg-2">espaces licenciés</h1>
      
        <Deconnexion/>
        <div className="separator"></div>
        <Menuconnex/>
        <div className="separator"></div>
        <div className=" text-center separator">Cliquez sur le bouton pour indiquer si vous allez à l'AquaPoney ou si vous venez au Bad</div>
        <div className="d-flex flex-row flex-wrap justify-content-center align-items-center gap-2">

        {creneauxData.map((creneau) => {
            return creneau.disponibiliteSession ?
            (
            <Creneaubad creneau={creneau} key={creneau.id} />
            ) : (
            <Creneaubadclosed creneau={creneau} key={creneau.id} />
            );
            })}




          
        </div>  
      </div>
    </main>
    <Footer/>
    </>

  );
};

export default Creneaux;