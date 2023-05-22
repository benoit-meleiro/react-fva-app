import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Deconnexion from "../../component/Deconnexion";
import Menuconnex from "../../component/Menuconnex";


//* récupération de la liste des interclubs
const Intercrud = () => {

// !! liste de selection equipe  
  
  const [equipe, setEquipe] = useState("Equipe 1");
  const handleEquipeChange = (event) => {setEquipe(event.target.value)}
    
  // ! Bouton radio
  const [deplacement, setDeplacement] = useState(false);
  const handleDeplacementChange = (event) => {
    setDeplacement(event.target.checked);
  };
  //! Message delete
  const [isClubDeletedMessageVisible, setIsClubDeletedMessageVisible] = useState(false);
  const [isClubDeleted, setIsClubDeleted] = useState(false);
  // ! Message create 
  const [isClubCreatedMessageVisible, setIsClubCreatedMessageVisible] = useState(false);
  const [clubsData, setClubsData] = useState([]);
//! recep ou deplacement

  

  // je récupère la fonction navigate du react router
  const navigate = useNavigate();
 

  // je fais l'appel fetch vers l'url de mon api (qui est en local)
  // et qui renvoie un json contenant la liste des clubs en BDD
  // quand l'appel est terminé, je stocke les données récupérées
  // dans le state, ce qui force mon composant à se recharger

  useEffect(() => {
    fetch("http://localhost:3002/clubs")
      .then((clubsDataJson) => {
        return clubsDataJson.json();
      })
      .then((clubsDataJs) => {
        setClubsData(clubsDataJs.data);
        
      })

      .finally(() => {
        setIsClubDeletedMessageVisible(false); // Réinitialisation de l'état du message
      });

  }, [isClubDeleted]);


  return (
    
    <>
    <Header/>
    <main className="flex-shrink-0">
      <div className="container">
        <h1 className="text-uppercase text-center my-lg-2">espaces licenciés</h1>
      
        <Deconnexion/>
        <div className="separator"></div>
        <Menuconnex/>
        <div className="separator"></div>
      <p className="text-center text-uppercase fw-bold ">CRéATION - MODIFICATION - SUPPRESSION DES INTERCLUBS</p>
      <div className="separator"></div>
      <form className="row g-3">
        
        <div className="row col-md-3 mb-3 me-2">
        <label htmlFor="equipe" className="px-0">Equipe</label>
      <select
        className="form-select"
        id="equipe"
        value={equipe}
        onChange={handleEquipeChange}
        aria-label="Default select example"
      >
        <option value="Equipe 1">Equipe 1</option>
        <option value="Equipe 2">Equipe 2</option>
      </select>
      </div>
        
        <div className="row col-md-3 mb-3 me-2">
          <label htmlFor="numeroMatch" className="px-0">Numéro du match</label>
          <input type="number" className="form-control" name="numeroMatch"/>
        </div>
       
        <div className="row col-md-3 mb-3 me-2 justify-content-around">
        <label htmlFor="receptionInter" className="px-0">Réception ou déplacement</label>
        <div className="col-auto">
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Domicile
          </label>
          <input
            className="form-check-input"
            type="radio"
            name="receptionInter"
            id="flexRadioDefault1"
            checked={!deplacement}
            onChange={handleDeplacementChange}
          />
        </div>
        <div className="col-auto">
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Déplacement
          </label>
          <input
            className="form-check-input"
            type="radio"
            name="receptionInter"
            id="flexRadioDefault2"
            checked={deplacement}
            onChange={handleDeplacementChange}
          />
        </div>
      </div>
        
        <div className="row col-md-3 mb-3 me-2">
          <label htmlFor="dateInter">Date</label>
          <input type="date" id="start" name="dateInter" value="2023-05-01" min="2023-09-01" max="2024-12-31"/>
        </div>
        
        <div className="row col-md-3 mb-3 me-2">
          <label htmlFor="heureInter" className="px-0">Heure</label>
          <input type="time" className="form-control" name="heureInter"/>
        </div>
        
        <div className="row col-md-3 mb-3 me-2">
          <label htmlFor="adversaireInter" className="px-0">Adversaire</label>
          <input type="text" className="form-control" name="adversaireInter"/>
        </div>
        
        <div className="row col-md-3 mb-3 me-2">
          <label htmlFor="nomJoueurs" className="px-0">Lieu</label>
          <input type="text" className="form-control" id="nomJoueurs" required/>
        </div>
        
        
        <div className="row col-md-3 mb-3 me-2">
        <button type="submit" className="btn btn-fva-rouge">Créer l'interclub</button>
        </div>
      </form>
      <div className="separator"></div>
      
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#id</th>
              <th scope="col">Equipe</th>
              <th scope="col">numéro match</th>
              <th scope="col">reception</th>
              <th scope="col">date</th>
              <th scope="col">Réception</th>
              <th scope="col">
               <span className="color-fva-rouge">modification</span></th> 
              <th scope="col">
                <span className="color-fva-rouge">suppression</span></th>
              
            </tr>
          </thead>
          <tbody>
          {clubsData.map((club) => {
            const recDep= club.receptionInter == true ? "réception" : "déplacement";
                return (
                    <tr key={club.id}>
                            <th  scope="row">{club.id}</th>
                            <td>{club.equipe}</td>
                            <td>{club.numeroMatch}</td>
                            <td>{club.dateInter}</td>
                            <td>{club.heureInter}</td>
                            <td>{recDep}</td>
                            <td><button className="btn btn-fva-rouge-petit text-white text-decoration-none"><Link className=" text-white text-decoration-none" to={`/espace/admin/clubs/${club.id}/update`}>Modifier</Link></button></td>
                            
                            <td><button   className="btn btn-fva-rouge-petit">Supprimer</button></td>
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