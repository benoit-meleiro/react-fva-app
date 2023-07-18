import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Compomatch = props => {
const { club } = props
  const navigate = useNavigate();
  const [isClubUpdated, setClubUpdated] = useState(false);

const jwt = localStorage.getItem("jwt");
const [presentInterData, setPresentInterData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3002/clubs/${club.id}/presentinter`,{
      headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${jwt}` 
            },
      body: JSON.stringify(),
                })
      .then((presentInterDataJson) => {
        return presentInterDataJson.json();
      })
      .then((presentInterDataJs) => {
        setPresentInterData(presentInterDataJs.data);
        
      });
  }, []);
  
    const formatDate = (dateString) => {
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const date = new Date(dateString);
      return date.toLocaleDateString('fr-FR', options);
    };

    const handleSubmit = (event) => {
    
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
      const jwt = localStorage.getItem("jwt");
      fetch(`http://localhost:3002/clubs/${club.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${jwt}`, // Ajouter le JWT au header "Authorization"
        },
        body: JSON.stringify(
       
          {
            equipe,  numeroMatch,  dateInter,
            jourInter, heureInter, receptionInter,
            adversaireInter, lieuInter, joueursDisposEq,
            joueursNonDisposEq, joueurSh1, joueurSh2,
            joueurSd, joueur1Dh, joueur2Dh,
            joueur1Dd, joueur2Dd, joueur1Dm1,
            joueur2Dm1, joueur1Dm2, joueur2Dm2,} )                  
        })
      
      .then((response) => {
        if (response.status === 200) {
          console.log("Club modifié");
          setClubUpdated(true);
          setTimeout(() => {
            navigate("/espace/compointerclub");
          }, 2000); 
                    
        } else {
          console.log("erreur");
        }
      });
    };
    
  const recDep= club.receptionInter == true ? "Domicile" : "Déplacement";
  
      return (
      
        <div className="creneau-de-bad col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 bg-fva-bleu-f bg-fva-terrain">
        <p className="text-white text-center mt-2 fw-bold"><span className="bg-fva-bleu-f px-1"><span className="fs-6 fw-light"> Equipe {club.equipe} - </span>MATCH #{club.numeroMatch}<span className="fs-6 fw-light"> - {recDep}</span></span> </p>
        <h2 className="text-white text-center mt-1 text-uppercase">{formatDate(club.dateInter)}</h2>
        <h4 className="text-white fw-bold text-center m-0">{club.adversaireInter}</h4>
        <p className="text-white fw-normal text-center">{club.heureInter} - {club.lieuInter}</p>
        <h3 className="text-white text-center text-uppercase my-2">JOUEURS disponibles</h3>
        <div className=" d-flex flex-row  flex-wrap justify-content-around text-white">
          <div className="row justify-content-center text-white gap-1 min-inter">
            
            {presentInterData.map((present) =>
            (
              <div className="joueur-dispo-creneaux col-3 col-sm-2 col-md-2 col-lg-2 text-center mb-1">
              <img src={`/img/${present.photos}`} alt="icone de jeune joueuse symbolisant l'âge des adhérents" width="48" height="48" className="d-inline-block align-text-top rounded-pill "/>
              <p className=" mb-0 lh-1 fs-6 text-center">{present.firstName}</p>
            </div>
            ))}
            
            
        </div>
        </div>
        <h3 className="text-white text-center text-uppercase mt-2 mb-3">sélection des joueurs</h3>
        
        <div className="d-flex flex-row flex-wrap justify-content-center align-items-center gap-2">
        <form onSubmit={handleSubmit} className="row  px-4 g-3 justify-content-center align-items-center">
        {/* <form  className="row  px-4 g-3"> */}
        
        <div className="d-none row col-md-3 mb-3 me-2">
        <label htmlFor="equipe" className="px-0">Equipe</label>
        <input type="number" className="form-control" name="equipe" defaultValue={club?.equipe}/>
      </div>
        
        <div className="d-none row col-md-3 mb-3 me-2">
          <label htmlFor="numeroMatch" className="px-0">Numéro du match</label>
          <input type="number" className="form-control" name="numeroMatch" defaultValue={club?.numeroMatch}/>
        </div>
       
        <div className="d-none row col-md-3 mb-3 me-2 justify-content-around">
        <label htmlFor="receptionInter" className="px-0">Réception (1) ou déplacement(0)</label>
          <input type="text" className="form-control" name="receptionInter" defaultValue={club?.receptionInter}/>
        </div>
   
        
        <div className="d-none row col-md-3 mb-3 me-2">
          <label htmlFor="dateInter">Date</label>
          <input type="date" id="start" name="dateInter"  min="2022-09-01" max="2024-12-31" defaultValue={club?.dateInter} />
        </div>
        
        <div className="d-none row col-md-3 mb-3 me-2">
          <label htmlFor="heureInter" className="px-0">Heure</label>
          <input type="text" className="form-control" name="heureInter" defaultValue={club?.heureInter}/>
        </div>
        
        <div className="d-none row col-md-3 mb-3 me-2">
          <label htmlFor="adversaireInter" className="px-0">Adversaire</label>
          <input type="text" className="form-control" name="adversaireInter" defaultValue={club?.adversaireInter}/>
        </div>
        
        <div className="d-none row col-md-3 mb-3 me-2">
          <label htmlFor="lieuInter" className="px-0">Lieu</label>
          <input type="text" name="lieuInter" className="form-control" defaultValue={club?.lieuInter}/>
        </div>

        <div className="d-none d-none row col-md-3 mb-3 me-2">
          <label htmlFor="joueursDisposEq" className="px-0">joueurs dispos</label>
          <input type="text" name="joueursDisposEq" className="form-control" defaultValue={club?.joueursDisposEq}/>
        </div>

        <div className="d-none row col-md-3 mb-3 me-2">
          <label htmlFor="joueursNonDisposEq" className="px-0">Joueurs non dispos</label>
          <input type="text" name="joueursNonDisposEq" className="form-control" defaultValue={club?.joueursNonDisposEq}/>
        </div> 
        <div className=" row col-5 col-sm-5 col-md-5 col-lg-5 mb-3 me-2">
          <label htmlFor="joueurSh1" className="px-0 text-white">Simple Homme 1</label>
          <input type="text" name="joueurSh1"  className=" bg-fva-bleu fwq-bold form-control" defaultValue={club?.joueurSh1}/>
        </div> 
        <div className=" row col-5 col-sm-5 col-md-5 col-lg-5 mb-3 me-2">
          <label htmlFor="joueurSh2" className="px-0 text-white">Simple Homme 2</label>
          <input type="text" name="joueurSh2" className=" bg-fva-bleu fwq-bold form-control" defaultValue={club?.joueurSh2}/>
        </div> 
        <div className=" row col-8 col-sm-8 col-md-8 col-lg-8 mb-3 me-2">
          <label htmlFor="joueurSd" className="px-0 text-white">Simple Dame</label>
          <input type="text" name="joueurSd" className=" bg-fva-bleu fwq-bold form-control" defaultValue={club?.joueurSd}/>
        </div> 
        <div className="row col-5 col-sm-5 col-md-5 col-lg-5 mb-3 me-2">
          <label htmlFor="joueur1Dh" className="px-0 text-white">Joueur 1 Double Hommes</label>
          <input type="text" name="joueur1Dh" className=" bg-fva-bleu fwq-bold form-control" defaultValue={club?.joueur1Dh}/>
        </div> 
        <div className="row col-5 col-sm-5 col-md-5 col-lg-5 mb-3 me-2">
          <label htmlFor="joueur2Dh" className="px-0 text-white">Joueur 2 Double Hommes</label>
          <input type="text" name="joueur2Dh" className=" bg-fva-bleu fwq-bold form-control" defaultValue={club?.joueur2Dh}/>
        </div> 
        <div className="row col-5 col-sm-5 col-md-5 col-lg-5 mb-3 me-2">
          <label htmlFor="joueur1Dd" className="px-0 text-white">Joueur 1 Double Dames</label>
          <input type="text" name="joueur1Dd" className=" bg-fva-bleu fwq-bold form-control" defaultValue={club?.joueur1Dd}/>
        </div> 
        <div className="row col-5 col-sm-5 col-md-5 col-lg-5 mb-3 me-2">
          <label htmlFor="joueur2Dd" className="px-0 text-white">Joueur 2 Double Dames</label>
          <input type="text" name="joueur2Dd" className=" bg-fva-bleu fwq-bold form-control" defaultValue={club?.joueur2Dd}/>
        </div> 
        <div className="row col-5 col-sm-5 col-md-5 col-lg-5 mb-3 me-2">
          <label htmlFor="joueur1Dm1" className="px-0 text-white">Joueur 1 Double Mixte 1</label>
          <input type="text" name="joueur1Dm1" className=" bg-fva-bleu fwq-bold form-control" defaultValue={club?.joueur1Dm1}/>
        </div> 
        <div className="row col-5 col-sm-5 col-md-5 col-lg-5 mb-3 me-2">
          <label htmlFor="joueur2Dm1" className="px-0 text-white">Joueur 2 Double Mixte 1</label>
          <input type="text" name="joueur2Dm1" className=" bg-fva-bleu fwq-bold form-control" defaultValue={club?.joueur2Dm1}/>
        </div> 
        
        <div className="row col-5 col-sm-5 col-md-5 col-lg-5 mb-3 me-2">
          <label htmlFor="joueur1Dm2" className="px-0 text-white">Joueur 1 Double Mixte 2</label>
          <input type="text" name="joueur1Dm2" className=" bg-fva-bleu fwq-bold form-control" defaultValue={club?.joueur1Dm2}/>
        </div> 
        <div className="row col-5 col-sm-5 col-md-5 col-lg-5 mb-3 me-2">
          <label htmlFor="joueur2Dm2" className="px-0 text-white">Joueur 2 Double Mixte 2</label>
          <input type="text" name="joueur2Dm2" className=" bg-fva-bleu fwq-bold form-control" defaultValue={club?.joueur2Dm2}/>
        </div> 
        <div className="d-none row col-md-3 mb-3 me-2">
          <label htmlFor="jourInter" className="px-0">jourInter</label>
          <input type="text" name="jourInter" className=" bg-fva-bleu fwq-bold form-control" defaultValue={club?.jourInter}/>
        </div>        
        <div className="row col-12 col-sm-12 col-md-12 col-lg-12 mb-3 me-2">
        <button type="submit" className="btn btn-fva-rouge">Composer l'équipe</button>
        </div>
      </form>
        </div>
      </div>
  );
};

export default Compomatch;