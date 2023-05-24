import React from "react";
import { Link } from "react-router-dom";

const Menuconnex = () => {return (
    <div className="d-flex flex-row flex-wrap justify-content-center align-items-center gap-3">
          <div className="col-5 col-sm-5 col-md-3 col-lg-3 col-xl-3 bg-fva-vert ">
            <Link className="text-decoration-none" to={`/espace/creneaux`}><h4 className="text-white fw-bold text-center text-uppercase px-2 py-4">S'inscrire à un créneau de jeu <br/><span className="fs-6 text-white fw-lighter text-lowercase fst-italic">pour tous les licenciés</span></h4></Link>
          </div>
          <div className="col-5 col-sm-5 col-md-3 col-lg-3 col-xl-3 bg-fva-bleu">
            <Link className="text-decoration-none" to={`/espace/dispointerclub`}><h4 className="text-white fw-bold text-center text-uppercase py-4">mes disponiblités interclubs<br/><span className="fs-6 text-white fw-lighter text-lowercase fst-italic">pour les joueurs d'équipes</span></h4></Link>
          </div>
          <div className="col-5 col-sm-5 col-md-3 col-lg-3 col-xl-3 bg-fva-bleu-f">
            <Link className="text-decoration-none" to={`/espace/compointerclub`}><h4 className="text-white fw-bold text-center text-uppercase py-4">créer mon équipe<br/><span className="fs-6 text-white fw-lighter text-lowercase fst-italic">pour les capitaines d'équipes</span></h4></Link>
          </div>
          <div className="col-5 col-sm-5 col-md-3 col-lg-3 col-xl-3 bg-fva-gris ">
            <Link className="text-decoration-none" to={`/espace/admin/players`}><h4 className="text-black fw-bold text-center text-uppercase px-2 py-4">création & modif de joueurs<br/><span className="fs-6 fw-lighter text-lowercase fst-italic">accès administrateurs</span></h4></Link>
          </div>
          <div className="col-5 col-sm-5 col-md-3 col-lg-3 col-xl-3 bg-fva-gris ">
            <Link className="text-decoration-none" to={`/espace/admin/sessions`}><h4 className="text-black fw-bold text-center text-uppercase px-2 py-4">création & modif créneaux<br/><span className="fs-6 fw-lighter text-lowercase fst-italic">accès administrateurs</span></h4></Link>
          </div>
          <div className="col-5 col-sm-5 col-md-3 col-lg-3 col-xl-3 bg-fva-gris ">
            <Link className="text-decoration-none" to={`/espace/admin/clubs`}><h4 className="text-black fw-bold text-center text-uppercase px-2 py-4">création & modif interclubs<br/><span className="fs-6 fw-lighter text-lowercase fst-italic">accès administrateurs</span></h4></Link>
          </div>
        </div>
  );
};

export default Menuconnex;