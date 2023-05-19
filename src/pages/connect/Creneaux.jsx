import React from "react";
import { Link } from "react-router-dom";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Menuconnex from "../../component/Menuconnex"
import Creneaubad from "../../component/Creneaubad"
import Creneaubadclosed from "../../component/Creneaubadclosed"
import Deconnexion from "../../component/Deconnexion";
//  import { Link, useNavigate } from "react-router-dom";
const Creneaux = () => {
  // // créé un state coworkingsData pour pouvoir stocker les données récupérées
  // // depuis l'API, à savoir la liste des coworkings
  // // par défaut (donc au premier chargement du composant), le state
  // // contient un tableau vide
  // const [creneauxData, setCreneauxData] = useState([]);

  // // je récupère la fonction navigate du react router
  // const navigate = useNavigate();

  // // je fais l'appel fetch vers l'url de mon api (qui est en local)
  // // et qui renvoie un json contenant la liste des coworkings en BDD
  // // quand l'appel est terminé, je stocke les données récupérées
  // // dans le state, ce qui force mon composant à se recharger

  // useEffect(() => {
  //   fetch("http://localhost:3002/api/coworkings")
  //     .then((creneauxDataJson) => {
  //       return creneauxDataJson.json();
  //     })
  //     .then((creneauxDataJs) => {
  //       setCoworkingsData(coworkingsDataJs.data);
  //     });
  // }, []);
    
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
        <div class=" text-center separator">Cliquez sur le bouton pour indiquer si vous allez à l'AquaPoney ou si vous venez au Bad</div>
        <div class="d-flex flex-row flex-wrap justify-content-start align-items-center gap-2">

        {/* {creneauxData.map((creneau) => {
        return (
          <div key={creneau.id}>
            <h2>{creneau.name}</h2>
            <p>Superficie : {coworking.superficy}</p>

            
            

            
          </div>
        );
      })} */}




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