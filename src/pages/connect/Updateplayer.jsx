import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Deconnexion from "../../component/Deconnexion";
import Menuconnex from "../../component/Menuconnex";
import RequireAuth from "../../component/RequireAuth";

const Updateplayer = () => {
  const navigate = useNavigate();
  const [isPlayerUpdated, setPlayerUpdated] = useState(false);

  const [player, setPlayer] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    fetch(`http://localhost:3002/players/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`, // Ajouter le JWT au header "Authorization"
      },
      body: JSON.stringify(),
    })
      .then((responseJson) => responseJson.json())
      .then((responseJs) => {
        setPlayer(responseJs.data);
      });
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const emailPlayer = event.target.emailPlayer.value;
    const password = event.target.password.value;
    const sexe = event.target.sexe.value;
    const joueur_interclubs = event.target.joueur_interclubs.value;
    const joueur_capitaine = event.target.joueur_capitaine.value;
    const roles = event.target.roles.value;
    const jour_ouverture = event.target.jour_ouverture.value;
    const photos = event.target.photos.value;

    const jwt = localStorage.getItem("jwt");
    fetch(`http://localhost:3002/players/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify({
        firstName,
        lastName,
        emailPlayer,
        password,
        sexe,
        joueur_interclubs,
        joueur_capitaine,
        roles,
        jour_ouverture,
        photos,
      }),
    }).then((response) => {
      if (response.status === 200) {
        console.log("Player modifié");
        setPlayerUpdated(true);
        setTimeout(() => {
          navigate("/espace/admin/players");
        }, 2000);
      } else {
        console.log("erreur");
      }
    });
  };
  return (
    <>
      <Header />
      <main className="flex-shrink-0">
        <div className="container">
          <RequireAuth />
          <h1 className="text-uppercase text-center my-lg-2">
            espaces licenciés
          </h1>

          <Deconnexion />
          <div className="separator"></div>
          <Menuconnex />
          <div className="separator"></div>
          <p className="text-center text-uppercase fw-bold ">
            CRéATION - MODIFICATION - SUPPRESSION DES JOUEURS
          </p>
          <div className="separator"></div>
          <form onSubmit={handleSubmit} className="row g-3">
            <div className="row col-md-3 mb-3 me-2">
              <label htmlFor="firstName" className="px-0">
                Prénom du joueur
              </label>
              <input
                type="text"
                className="form-control"
                name="firstName"
                defaultValue={player?.firstName}
              />
            </div>

            <div className="row col-md-3 mb-3 me-2">
              <label htmlFor="lastName" className="px-0">
                Nom du joueur
              </label>
              <input
                type="text"
                className="form-control"
                name="lastName"
                defaultValue={player?.lastName}
              />
            </div>

            <div className="row col-md-3 mb-3 me-2">
              <label htmlFor="sexe" className="px-0">
                Sexe
              </label>
              <input
                type="text"
                className="form-control"
                name="sexe"
                defaultValue={player?.sexe}
              />
            </div>

            <div className="row col-md-3 mb-3 me-2">
              <label htmlFor="emailJoueur" className="px-0">
                E-mail
              </label>
              <input
                type="email"
                className="form-control"
                name="emailPlayer"
                defaultValue={player?.emailPlayer}
              />
            </div>

            <div className="row col-md-3 mb-3 me-2">
              <label htmlFor="password" className="px-0">
                Mot de passe
              </label>
              <input
                type="text"
                className="form-control"
                name="password"
                placeholder="Nouveau mot de passe"
              />
            </div>

            <div className="row col-md-3 mb-3 me-2">
              <label htmlFor="roles" className="px-0">
                Droits
              </label>
              <input
                type="text"
                className="form-control"
                name="roles"
                defaultValue={player?.roles}
              />
            </div>

            <div className="row col-md-3 mb-3 me-2">
              <label htmlFor="jour_ouverture" className="px-0">
                Jour ouverture
              </label>
              <input
                type="text"
                className="form-control"
                name="jour_ouverture"
                defaultValue={player?.jour_ouverture}
              />
            </div>

            <div className="row col-md-3 mb-3 me-2">
              <label htmlFor="joueur_interclubs" className="px-0">
                Joueur Interclubs
              </label>
              <input
                type="text"
                className="form-control"
                name="joueur_interclubs"
                defaultValue={player?.joueur_interclubs}
              />
            </div>

            <div className="row col-md-3 mb-3 me-2">
              <label htmlFor="joueur_capitaine" className="px-0">
                Joueur Capitaine
              </label>
              <input
                type="text"
                className="form-control"
                name="joueur_capitaine"
                defaultValue={player?.joueur_capitaine}
              />
            </div>

            <div className="row col-md-3 mb-3 me-2">
              <label htmlFor="photos" className="form-label">
                Photo du joueur
              </label>
              <div className="input-group">
                <span className="input-group-text" id="basic-addon3">
                  ./assets/img/
                </span>
                <input
                  type="text"
                  className="form-control"
                  name="photos"
                  aria-describedby="basic-addon3 basic-addon4"
                  defaultValue={player?.photos}
                />
              </div>
            </div>

            <div className="row col-md-3 mb-3 me-2">
              <button type="submit" className="btn btn-fva-rouge">
                Modifier le joueur
              </button>
            </div>
          </form>
          <div className="separator"></div>
          {isPlayerUpdated && (
            <p className="text-success fs-3">
              Le joueur a été modifié avec succès.
            </p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Updateplayer;
