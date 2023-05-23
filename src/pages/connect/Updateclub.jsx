import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Deconnexion from "../../component/Deconnexion";
import Menuconnex from "../../component/Menuconnex";




const Updateclub = () => {

// //* bouton radio
// const [receptionInter, setReceptionInter] = useState(club?.receptionInter || "");
 




  const navigate = useNavigate();
  const [isClubUpdated, setClubUpdated] = useState(false);
  // je créé un state pour stocker un interclub
  const [club, setClub] = useState(null);

  // je récupère l'id présent dans l'url
  const { id } = useParams();

  // j'utilise useEffect, pour executer l'appel à l'api
  // une seule fois, au chargement du composant
  useEffect(() => {
    // je fais un appel fetch, vers l'url de l'api pour récupérer
    //  un coworking en fonction de l'id présent dans l'url
    fetch(`http://localhost:3002/clubs/${id}`)
      .then((responseJson) => responseJson.json())
      .then((responseJs) => {
        // si j'ai une réponse de l'api, je stocke le coworking
        // renvoyé dans le state
        setClub(responseJs.data);
      });
  }, [id]);

  // je créé un event listener quand le formulaire est validé
  const handleSubmit = (event) => {
    // j'utilise l'objet event, fourni automatiquement par le navigateur
    // pour empêcher que la page soit rechargée (comportement par défaut)
    event.preventDefault();
    
    const equipe = event.target.equipe.value;
    const numeroMatch = event.target.numeroMatch.value;
    const dateInter =  event.target.dateInter.value;
    const jourInter = event.target.jourInter.value;
    const heureInter =  event.target.heureInter.value;
    const receptionInter =  event.target.receptionInter.value;
    const adversaireInter =  event.target.adversaireInter.value;
    const lieuInter =  event.target.lieuInter.value;    
    const joueursDisposEq = event.target.joueursDisposEq.value;
    const joueursNonDisposEq = event.target.joueursNonDisposEq.value;
    const joueurSh1 = event.target.joueurSh1.value;
    const joueurSh2 = event.target.joueurSh2.value;
    const joueurSd = event.target.joueurSd.value;
    const joueur1Dh = event.target.joueur1Dh.value;
    const joueur2Dh = event.target.joueur2Dh.value;
    const joueur1Dd = event.target.joueur1Dd.value;
    const joueur2Dd = event.target.joueur2Dd.value;
    const joueur1Dm1 = event.target.joueur1Dm1.value;
    const joueur2Dm1 = event.target.joueur2Dm1.value;
    const joueur1Dm2 = event.target.joueur1Dm2.value;
    const joueur2Dm2 = event.target.joueur2Dm2.value;
    console.log(event.target.dateInter.value);
    
    fetch(`http://localhost:3002/clubs/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
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
          joueur2Dm2,} )  
              
      
                       
      })
    
    .then((response) => {
      if (response.status === 200) {
        console.log("Club modifié");
        setClubUpdated(true);
        setTimeout(() => {
          navigate("/espace/admin/Intercrud");
        }, 2000); // Redirige après 2 secondes
        
        // sinon on affiche un message d'erreur
        // car cela veut dire que le coworking n'a pas été créé
      } else {
        console.log("erreur");
      }
    });
  };


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
        <p className="text-center text-uppercase fw-bold ">CRéATION - MODIFICATION - SUPPRESSION DES interclubs</p>
        <div className="separator"></div>
        <form onSubmit={handleSubmit} className="row g-3">
        
        <div className="row col-md-3 mb-3 me-2">
        <label htmlFor="equipe" className="px-0">Equipe</label>
        <input type="number" className="form-control" name="equipe" defaultValue={club?.equipe}/>
      </div>
        
        <div className="row col-md-3 mb-3 me-2">
          <label htmlFor="numeroMatch" className="px-0">Numéro du match</label>
          <input type="number" className="form-control" name="numeroMatch" defaultValue={club?.numeroMatch}/>
        </div>
       
        <div className="row col-md-3 mb-3 me-2 justify-content-around">
        <label htmlFor="receptionInter" className="px-0">Réception (1) ou déplacement(0)</label>
          <input type="text" className="form-control" name="receptionInter" defaultValue={club?.receptionInter}/>
        </div>

{/* <div className="row col-md-3 mb-3 me-2 justify-content-around">
  <label htmlFor="receptionInter" className="px-0">Réception ou déplacement</label>
  <div className="col-auto">
    <label className="form-check-label" htmlFor="receptionInterTrue">
      Domicile
    </label>
    <input
      className="form-check-input"
      type="radio"
      name="receptionInter"
      id="receptionInterTrue"
      value="true"
      checked={receptionInter === "true"}
      onChange={(e) => setReceptionInter(e.target.value)}
    />
  </div>
  <div className="col-auto">
    <label className="form-check-label" htmlFor="receptionInterFalse">
      Déplacement
    </label>
    <input
      className="form-check-input"
      type="radio"
      name="receptionInter"
      id="receptionInterFalse"
      value="false"
      checked={receptionInter === "false"}
      onChange={(e) => setReceptionInter(e.target.value)}
    />
  </div>
</div> */}


        
        
        <div className="row col-md-3 mb-3 me-2">
          <label htmlFor="dateInter">Date</label>
          <input type="date" id="start" name="dateInter"  min="2022-09-01" max="2024-12-31" defaultValue={club?.dateInter} />
        </div>
        
        <div className="row col-md-3 mb-3 me-2">
          <label htmlFor="heureInter" className="px-0">Heure</label>
          <input type="text" className="form-control" name="heureInter" defaultValue={club?.heureInter}/>
        </div>
        
        <div className="row col-md-3 mb-3 me-2">
          <label htmlFor="adversaireInter" className="px-0">Adversaire</label>
          <input type="text" className="form-control" name="adversaireInter" defaultValue={club?.adversaireInter}/>
        </div>
        
        <div className="row col-md-3 mb-3 me-2">
          <label htmlFor="lieuInter" className="px-0">Lieu</label>
          <input type="text" name="lieuInter" className="form-control" defaultValue={club?.lieuInter}/>
        </div>

        <div className="d-none row col-md-3 mb-3 me-2">
          <label htmlFor="joueursDisposEq" className="px-0">joueurs dispos</label>
          <input type="text" name="joueursDisposEq" className="form-control" defaultValue={club?.joueursDisposEq}/>
        </div>

        <div className="d-none row col-md-3 mb-3 me-2">
          <label htmlFor="joueursNonDisposEq" className="px-0">Joueurs non dispos</label>
          <input type="text" name="joueursNonDisposEq" className="form-control" defaultValue={club?.joueursNonDisposEq}/>
        </div> 
        <div className="d-none row col-md-3 mb-3 me-2">
          <label htmlFor="joueurSh1" className="px-0">Joueur SH 1</label>
          <input type="text" name="joueurSh1" className="form-control" defaultValue={club?.joueurSh1}/>
        </div> 
        <div className="d-none row col-md-3 mb-3 me-2">
          <label htmlFor="joueurSh2" className="px-0">Joueur SH 2</label>
          <input type="text" name="joueurSh2" className="form-control" defaultValue={club?.joueurSh2}/>
        </div> 
        <div className="d-none row col-md-3 mb-3 me-2">
          <label htmlFor="joueurSd" className="px-0">Joueur Sd</label>
          <input type="text" name="joueurSd" className="form-control" defaultValue={club?.joueurSd}/>
        </div> 
        <div className="d-none row col-md-3 mb-3 me-2">
          <label htmlFor="joueur1Dh" className="px-0">Joueur 1Dh</label>
          <input type="text" name="joueur1Dh" className="form-control" defaultValue={club?.joueur1Dh}/>
        </div> 
        <div className="d-none row col-md-3 mb-3 me-2">
          <label htmlFor="joueur2Dh" className="px-0">Joueur 2Dh</label>
          <input type="text" name="joueur2Dh" className="form-control" defaultValue={club?.joueur2Dh}/>
        </div> 
        <div className="d-none row col-md-3 mb-3 me-2">
          <label htmlFor="joueur1Dd" className="px-0">Joueur 1Dd</label>
          <input type="text" name="joueur1Dd" className="form-control" defaultValue={club?.joueur1Dd}/>
        </div> 
        <div className="d-none row col-md-3 mb-3 me-2">
          <label htmlFor="joueur2Dd" className="px-0">Joueur 2Dd</label>
          <input type="text" name="joueur2Dd" className="form-control" defaultValue={club?.joueur2Dd}/>
        </div> 
        <div className="d-none row col-md-3 mb-3 me-2">
          <label htmlFor="joueur1Dm1" className="px-0">joueur1Dm1</label>
          <input type="text" name="joueur1Dm1" className="form-control" defaultValue={club?.joueur1Dm1}/>
        </div> 
        <div className="d-none row col-md-3 mb-3 me-2">
          <label htmlFor="joueur2Dm1" className="px-0">joueur2Dm1</label>
          <input type="text" name="joueur2Dm1" className="form-control" defaultValue={club?.joueur2Dm1}/>
        </div> 
        
        <div className="d-none row col-md-3 mb-3 me-2">
          <label htmlFor="joueur1Dm2" className="px-0">joueur1Dm2</label>
          <input type="text" name="joueur1Dm2" className="form-control" defaultValue={club?.joueur1Dm2}/>
        </div> 
        <div className="d-none row col-md-3 mb-3 me-2">
          <label htmlFor="joueur2Dm2" className="px-0">joueur2Dm2</label>
          <input type="text" name="joueur2Dm2" className="form-control" defaultValue={club?.joueur2Dm2}/>
        </div> 
        <div className="d-none row col-md-3 mb-3 me-2">
          <label htmlFor="jourInter" className="px-0">jourInter</label>
          <input type="text" name="jourInter" className="form-control" defaultValue={club?.jourInter}/>
        </div>        
        <div className="row col-md-3 mb-3 me-2">
        <button type="submit" className="btn btn-fva-rouge">Modifier l'interclub</button>
        </div>
      </form>
        <div className="separator"></div>
        {isClubUpdated && (
  <p className="text-success fs-3">L'interclub a été a été modifié avec succès.</p>
)}
        
        
        </div>
    </main>
    <Footer/>
    </>

  );
};

export default Updateclub;