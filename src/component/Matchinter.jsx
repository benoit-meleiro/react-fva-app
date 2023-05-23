import React, { useEffect, useState } from 'react';

const Matchinter = ({club}) => {

  // const [presentsData, setpresentsData] = useState([]);
  // useEffect(() => {
  //   fetch(`http://localhost:3002/clubs/${club.id}/present`)
  //     .then((presentsDataJson) => {
  //       return presentsDataJson.json();
  //     })
  //     .then((presentsDataJs) => {
  //       setpresentsData(presentsDataJs.data);
        
  //     });
  // }, []);
  
    const formatDate = (dateString) => {
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const date = new Date(dateString);
      return date.toLocaleDateString('fr-FR', options);
    };
    // const GymnaseSession = (dayOfWeek) => {
    //   if (dayOfWeek === 'lun' || dayOfWeek === 'mar') {
    //     return 'Gymnase G Tillion 21h - 23h';
    //   } 
    //   if (dayOfWeek === 'mer') {
    //     return 'Gymnase G Tillion 20h30 - 22h30';
    //   } 
    //   if (dayOfWeek === 'jeu') {
    //     return 'Gymnase P Denis 21h - 23h';
    //   }  
    //   else {
    //      return 'Gymnase P Denis 19h - 21h';
    //   }
    // };
  // const dayOfWeek = formatDate(creneau.dateSession).substring(0, 3); // Récupère le jour de la semaine en 3 caractères
  const recDep= club.receptionInter == true ? "Domicile" : "Déplacement";
  
      return (
      
        <div key={club.id} className="creneau-de-badInter col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 bg-fva-bleu bg-fva-terrain">
        <p className="text-white text-center mt-2 fw-bold"><span className="bg-fva-bleu-f px-1"><span className="fs-6 fw-light"> Equipe {club.equipe} - </span>MATCH #{club.numeroMatch}<span className="fs-6 fw-light"> - {recDep}</span></span> </p>
        <h2 className="text-white text-center mb-2 text-uppercase">{formatDate(club.dateInter)}</h2>
        <h4 className="text-white fw-normal text-center m-0">{club.adversaireInter}</h4>
        <p className="text-white fw-normal text-center">{club.heureInter}</p>
        <p className="text-white fw-normal text-center">{club.lieuInter}</p>
        <div className="text-center mt-3">
          <label className="switch">
          <input type="checkbox"></input>
          <span className="slider-cap"></span>
          <span className="text" data-checked-text="Ok en mode ninja " data-unchecked-text="Je ne suis pas la "></span>
          </label>
        </div>
        <h3 className="text-white text-center text-uppercase">JOUEURS sélectionnés</h3>
          <div className="separator"></div>    
          <div className=" d-flex flex-row  flex-wrap justify-content-around text-white">
              <div className="col-3 col-sm-3 col-md-3 col-lg-3 py-2 text-center mb-2 bg-fva-bleu-f">
                <h5>SH 1</h5>
                <img src="/img/Franck_Fort.jpg" alt="icone de jeune joueuse symbolisant l'âge des adhérents" width="48" height="48" className="d-inline-block align-text-top rounded-pill "/>
                <p className=" mb-0 lh-1 fs-6 text-center">Franck</p>
              </div>
              <div className="col-3 col-sm-3 col-md-3 col-lg-3 py-2 text-center mb-2 bg-fva-bleu-f">
                <h5>SH 2</h5>
                <img src="/img/Mouss_Tache.jpg" alt="icone de jeune joueuse symbolisant l'âge des adhérents" width="48" height="48" className="d-inline-block align-text-top rounded-pill "/>
                <p className=" mb-0 lh-1 fs-6 text-center">Mouss</p>
              </div>
              <div className="col-3 col-sm-3 col-md-3 col-lg-3 py-2 text-center mb-2 bg-fva-bleu-f">
                <h5>SD 1</h5>
                <img src="/img/Tara_Clure.jpg" alt="icone de jeune joueuse symbolisant l'âge des adhérents" width="48" height="48" className="d-inline-block align-text-top rounded-pill "/>
                <p className=" mb-0 lh-1 fs-6 text-center">Tara</p>
              </div>
              <div className="col-5 col-sm-5 col-md-5 col-lg-5 py-2 text-center mb-2 bg-fva-bleu-f">
                <h5>DH</h5>
                <div className="d-flex flex-row justify-content-around">
                  <div><img src="/img/Jim_Nastique.jpg" alt="icone de jeune joueuse symbolisant l'âge des adhérents" width="48" height="48" className="d-inline-block align-text-top rounded-pill "/>
                  <p className=" mb-0 lh-1 fs-6 text-center">Jim</p></div>
                  <div><img src="/img/Sam_Soule.jpg" alt="icone de jeune joueuse symbolisant l'âge des adhérents" width="48" height="48" className="d-inline-block align-text-top rounded-pill "/>
                  <p className=" mb-0 lh-1 fs-6 text-center">Sam</p></div>
                 </div>
              </div>
              <div className="col-5 col-sm-5 col-md-5 col-lg-5 py-2 text-center mb-2 bg-fva-bleu-f">
                <h5>DD</h5>
                <div className="d-flex flex-row justify-content-around">
                  <div><img src="/img/Anne_Abolisant.jpg" alt="icone de jeune joueuse symbolisant l'âge des adhérents" width="48" height="48" className="d-inline-block align-text-top rounded-pill "/>
                  <p className=" mb-0 lh-1 fs-6 text-center">Anne</p></div>
                  <div><img src="/img/Sarah_Joute.jpg" alt="icone de jeune joueuse symbolisant l'âge des adhérents" width="48" height="48" className="d-inline-block align-text-top rounded-pill "/>
                  <p className=" mb-0 lh-1 fs-6 text-center">Sarah</p></div>
                 </div>
              </div>
              <div className="col-5 col-sm-5 col-md-5 col-lg-5 py-2 text-center mb-2 bg-fva-bleu-f">
                <h5>DM 1</h5>
                <div className="d-flex flex-row justify-content-around">
                  <div><img src="/img/Sam_Soule.jpg" alt="icone de jeune joueuse symbolisant l'âge des adhérents" width="48" height="48" className="d-inline-block align-text-top rounded-pill "/>
                  <p className=" mb-0 lh-1 fs-6 text-center">Sam</p></div>
                  <div><img src="/img/Lara_Clette.jpg" alt="icone de jeune joueuse symbolisant l'âge des adhérents" width="48" height="48" className="d-inline-block align-text-top rounded-pill "/>
                  <p className=" mb-0 lh-1 fs-6 text-center">Lara</p></div>
                 </div>
              </div>
              <div className="col-5 col-sm-5 col-md-5 col-lg-5 py-2 text-center mb-2 bg-fva-bleu-f">
                <h5>DM 2</h5>
                <div className="d-flex flex-row justify-content-around">
                  <div><img src="/img/Jean_Tourloupe.jpg" alt="icone de jeune joueuse symbolisant l'âge des adhérents" width="48" height="48" className="d-inline-block align-text-top rounded-pill "/>
                  <p className=" mb-0 lh-1 fs-6 text-center">Jean</p></div>
                  <div><img src="/img/Tara_Clure.jpg" alt="icone de jeune joueuse symbolisant l'âge des adhérents" width="48" height="48" className="d-inline-block align-text-top rounded-pill "/>
                  <p className=" mb-0 lh-1 fs-6 text-center">Tara</p></div>
                 </div>
              </div>
            </div>
        </div>
  );
};

export default Matchinter;