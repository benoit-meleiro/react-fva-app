import React from "react";

const Matchinter = () => {
    return (
        <div className="creneau-de-badInter col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 bg-fva-bleu bg-fva-terrain">
        <p className="text-white text-center mt-2 fw-bold"><span className="bg-fva-bleu-f px-1">MATCH #1<span className="fs-6">- à domicile</span></span> </p>
        <h2 className="text-white text-center mb-2">LUNDI 10 AVRIL</h2>
        <h4 className="text-white fw-normal text-center m-0">LES BAUZIBADS</h4>
        <p className="text-white fw-normal text-center">20 heures 30</p>
        <p className="text-white fw-normal text-center">COLLEGE GERMAINE TILLION - 31840 AUSSONNE</p>
        <div className="text-center mt-3">
          <label className="switch">
          <input type="checkbox"></input>
          <span className="slider-cap"></span>
          <span className="text" data-checked-text="Ok en mode ninja " data-unchecked-text="Je ne suis pas la "></span>
          </label>
        </div>
        <h3 className="text-white text-center">QUI SERA LA ?</h3>
            <div className="row justify-content-center text-white gap-1">
              <div className="joueur-dispo-creneaux col-3 col-sm-2 col-md-2 col-lg-2 text-center mb-1">
                <img src="/img/Oscar_Ibou.jpg" alt="icone de jeune joueuse symbolisant l'âge des adhérents" width="48" height="48" className="d-inline-block align-text-top rounded-pill"/>
                <p className=" mb-0 lh-1 fs-6 text-center">Oscar</p>
              </div>
              

            </div>
        </div>
  );
};

export default Matchinter;