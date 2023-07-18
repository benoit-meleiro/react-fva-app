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
  
  const [creneauxData, setCreneauxData] = useState([]);

  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");
  useEffect(() => {
    fetch("http://localhost:3002/sessions",{
     
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${jwt}`
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