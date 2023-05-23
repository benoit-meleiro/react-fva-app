import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Deconnexion from "../../component/Deconnexion";
import Menuconnex from "../../component/Menuconnex"



const Intercrud = () => {

  // //! Message delete
const [isCreneauDeletedMessageVisible, setIsCreneauDeletedMessageVisible] = useState(false);
const [isCreneauDeleted, setIsCreneauDeleted] = useState(false);
// // ! Message create 
// const [isClubCreatedMessageVisible, setIsClubCreatedMessageVisible] = useState(false);


const [creneauxData, setCreneauxData] = useState([]);
      // je récupère la fonction navigate du react router
  const navigate = useNavigate();
// je fais l'appel fetch vers l'url de mon api (qui est en local)
  // et qui renvoie un json contenant la liste des creneaux en BDD
  // quand l'appel est terminé, je stocke les données récupérées
  // dans le state, ce qui force mon composant à se recharger

  useEffect(() => {
    fetch("http://localhost:3002/sessions")
      .then((creneauxDataJson) => {
        return creneauxDataJson.json();
      })
      .then((creneauxDataJs) => {
        setCreneauxData(creneauxDataJs.data);
        
      })

      .finally(() => {
        setIsCreneauDeletedMessageVisible(false); // Réinitialisation de l'état du message
      });

  }, [isCreneauDeleted]);
    
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
      <p class="text-center text-uppercase fw-bold ">CRéATION - MODIFICATION - SUPPRESSION DES CRENEAUX</p>
      <div class="separator"></div>
      <form class="row g-3">

      <div class="row col-md-3 mb-3 me-2">
          <label for="dateSession">Date</label>
          <input type="date" name="dateSession" min="2023-09-01" max="2024-12-31"/>
        </div>

      <div class="row col-md-3 mb-3 me-2 justify-content-around">
          <label for="" class="px-0">Disponibilité</label>
          <div class="col-auto">
            <label class="form-check-label" for="flexRadioDefault1">
              Dispo
              </label>
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"checked/>
          </div> 
          <div class="col-auto">
            <label class="form-check-label" for="flexRadioDefault2">
              Non dispo
            </label>
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
          </div> 
        </div>  
                        
        <div class="row col-md-3 mb-3 me-2">
          <label for="nomResponsableOuverture" class="px-0">Nom responsable session</label>
          <input type="text" class="form-control" name="nomResponsableOuverture" />
        </div>

        <div class="row col-md-3 mb-3 me-2">
          <label for="prenomResponsableOuverture" class="px-0">Prénom responsable session</label>
          <input type="text" class="form-control" name="prenomResponsableOuverture" />
        </div>
       
        <div class="row col-md-3 mb-3 me-2 justify-content-around">
          <label for="" class="px-0">Réception ou déplacement</label>
          <div class="col-auto">
            <label class="form-check-label" for="flexRadioDefault1">
              Domicile
              </label>
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"checked/>
          </div> 
          <div class="col-auto">
            <label class="form-check-label" for="flexRadioDefault2">
              Déplacement
            </label>
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
          </div> 
        </div>
        
        <div class="row col-md-3 mb-3 me-2">
        <button type="submit" class="btn btn-fva-rouge">Créer le creneau</button>
        </div>
      </form>
      <div class="separator"></div>
      
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#id</th>
              <th scope="col">Date</th>
              <th scope="col">Dispo créneau</th>
              <th scope="col">nom resp</th>
              <th scope="col">prénom resp</th>
              <th scope="col">Adversaire</th>
              <th scope="col">
               <span class="color-fva-rouge">modification</span></th> 
              <th scope="col">
                <span class="color-fva-rouge">suppression</span></th>
              
            </tr>
          </thead>
          <tbody>
          {creneauxData.map((creneau) => {
            const dispo = creneau.disponibiliteSession === true ? "disponible" : "non disponible";
            const interM = creneau.matchsInterclubs === true ? "oui" : "non"
                return (
                    <tr key={creneau.id}>
                            <th  scope="row">{creneau.id}</th>
                            <td>{creneau.dateSession}</td>
                            <td>{dispo}</td>
                            <td>{creneau.nomResponsableOuverture}</td>
                            <td>{creneau.prenomResponsableOuverture}</td>
                            <td>{interM}</td>
                            
                            <td><button className="btn btn-fva-rouge-petit text-white text-decoration-none"><Link className=" text-white text-decoration-none" to={`/espace/admin/sessions/${creneau.id}/update`}>Modifier</Link></button></td>
                            
                            <td><button   className="btn btn-fva-rouge-petit">Supprimer</button></td>
                            {/* <td><button onClick={() => handleDeleteClick(club)}  className="btn btn-fva-rouge-petit">Supprimer</button></td> */}
                          </tr>
                );
              })}
            
          </tbody>
        </table>
      </div>
      </div>
    </main>
    <Footer/>
    </>

  );
};

export default Intercrud;