import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Deconnexion from "../../component/Deconnexion";
import Menuconnex from "../../component/Menuconnex";
import RequireAuth from "../../component/RequireAuth";


const Intercrud = () => {

  //! Message delete
  const [isClubDeletedMessageVisible, setIsClubDeletedMessageVisible] = useState(false);
  const [isClubDeleted, setIsClubDeleted] = useState(false);
  // ! Message create 
  const [isClubCreatedMessageVisible, setIsClubCreatedMessageVisible] = useState(false);
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
        
      })

      .finally(() => {
        setIsClubDeletedMessageVisible(false); // Réinitialisation de l'état du message
      });

  }, [isClubDeleted]);

//* FONCTION POUR LE CREATE
const handleSubmit = (event) => {
  
event.preventDefault();

    const equipe = event.target.equipe.value;
    const numeroMatch = event.target.numeroMatch.value;
    const dateInter =  event.target.dateInter.value;
    const jourInter = "pas de jour";
    const heureInter =  event.target.heureInter.value;
    const receptionInter =  event.target.receptionInter.value;
    const adversaireInter =  event.target.adversaireInter.value;
    const lieuInter =  event.target.lieuInter.value;    
    const joueursDisposEq = "ns";
    const joueursNonDisposEq = "ns";
    const joueurSh1 = "non choisi";
    const joueurSh2 = "non choisi";
    const joueurSd = "non choisi";
    const joueur1Dh = "non choisi";
    const joueur2Dh = "non choisi";
    const joueur1Dd = "non choisi";
    const joueur2Dd = "non choisi";
    const joueur1Dm1 = "non choisi";
    const joueur2Dm1 = "non choisi";
    const joueur1Dm2 = "non choisi";
    const joueur2Dm2 = "non choisi";
    

fetch("http://localhost:3002/clubs", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${jwt}` 
  },
  body: JSON.stringify(
    
{
  equipe,
  numeroMatch,
  dateInter,  
  jourInter,
  heureInter,
  receptionInter,
  adversaireInter,
  lieuInter,    
  joueursDisposEq,
  joueursNonDisposEq,
  joueurSh1,
  joueurSh2,
  joueurSd,
  joueur1Dh,
  joueur2Dh,
  joueur1Dd,
  joueur2Dd,
  joueur1Dm1,
  joueur2Dm1,
  joueur1Dm2,
  joueur2Dm2,

}


  ),
        })

.then((response) => {
  if (response.status === 200) {
    console.log("Player crée");
      setIsClubCreatedMessageVisible(true);    
    setTimeout(() => {setIsClubCreatedMessageVisible(true);}, 2000);
    setTimeout(() => {
      setIsClubCreatedMessageVisible(false);
      navigate(0);
    }, 2000);
    
 
  } else {
    console.log("erreur dans la création");
  }
  
});

};

  // * FONCTION POUR LE DELETE
  const handleDeleteClick = (club) => {
   
    const jwt = localStorage.getItem("jwt");
    fetch("http://localhost:3002/clubs/" + club.id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${jwt}`
      },
      body: JSON.stringify(),
      
    })
      
      .then(() => {
        console.log("Interclub supprimé");
        setIsClubDeleted(true);
        setIsClubDeletedMessageVisible(true);
        
        setTimeout(() => {
          setIsClubDeletedMessageVisible(true);;
        }, 2000);
        
        setTimeout(() => {
          setIsClubDeletedMessageVisible(false);
          navigate(0);
        }, 2000);
        
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    
    <>
    <Header/>
    <main className="flex-shrink-0">
      <div className="container">
      <RequireAuth/>
        <h1 className="text-uppercase text-center my-lg-2">espaces licenciés</h1>
      
        <Deconnexion/>
        <div className="separator"></div>
        <Menuconnex/>
        <div className="separator"></div>
      <p className="text-center text-uppercase fw-bold ">CRéATION - MODIFICATION - SUPPRESSION DES INTERCLUBS</p>
      <div className="separator"></div>
      <form onSubmit={handleSubmit} className="row g-3">
        
        <div className="row col-md-3 mb-3 me-2">
        <label htmlFor="equipe" className="px-0">Equipe</label>
        <input type="number" className="form-control" name="equipe"/>
      </div>
        
        <div className="row col-md-3 mb-3 me-2">
          <label htmlFor="numeroMatch" className="px-0">Numéro du match</label>
          <input type="number" className="form-control" name="numeroMatch"/>
        </div>
       
        <div className="row col-md-3 mb-3 me-2 justify-content-around">
        <label htmlFor="receptionInter" className="px-0">Réception (1) ou déplacement(0)</label>
          <input type="text" className="form-control" name="receptionInter"/>
        </div>
             
        
        <div className="row col-md-3 mb-3 me-2">
          <label htmlFor="dateInter">Date</label>
          <input type="date" id="start" name="dateInter"  min="2022-09-01" max="2024-12-31"/>
        </div>
        
        <div className="row col-md-3 mb-3 me-2">
          <label htmlFor="heureInter" className="px-0">Heure</label>
          <input type="text" className="form-control" name="heureInter"/>
        </div>
        
        <div className="row col-md-3 mb-3 me-2">
          <label htmlFor="adversaireInter" className="px-0">Adversaire</label>
          <input type="text" className="form-control" name="adversaireInter"/>
        </div>
        
        <div className="row col-md-3 mb-3 me-2">
          <label htmlFor="lieuInter" className="px-0">Lieu</label>
          <input type="text" className="form-control" id="lieuInter" required/>
        </div>
        
        
        <div className="row col-md-3 mb-3 me-2">
        <button type="submit" className="btn btn-fva-rouge">Créer l'interclub</button>
        </div>
      </form>
      <div className="separator"></div>
      {isClubDeletedMessageVisible && (
  <p className="text-success fs-3">L'interclub a été supprimé avec succès.</p>
)}
        {isClubCreatedMessageVisible && (
  <p className="text-success fs-3">Le joueur a été crée avec succès.</p>
)}
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
            const recDep= club.receptionInter === true ? "réception" : "déplacement";
                return (
                    <tr key={club.id}>
                            <th  scope="row">{club.id}</th>
                            <td>{club.equipe}</td>
                            <td>{club.numeroMatch}</td>
                            <td>{club.dateInter}</td>
                            <td>{club.heureInter}</td>
                            <td>{recDep}</td>
                            <td><button className="btn btn-fva-rouge-petit text-white text-decoration-none"><Link className=" text-white text-decoration-none" to={`/espace/admin/clubs/${club.id}/update`}>Modifier</Link></button></td>
                            
                            <td><button onClick={() => handleDeleteClick(club)}  className="btn btn-fva-rouge-petit">Supprimer</button></td>
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