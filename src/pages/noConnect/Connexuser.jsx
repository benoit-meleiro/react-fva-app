import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";

const Connexuser = () => {
  const navigate = useNavigate();
  const connection = (event) => {
    event.preventDefault();

    const emailPlayer = event.target.emailPlayer.value;
    const password = event.target.password.value;

    const data = {
      emailPlayer: emailPlayer,
      password: password,
    };

    fetch("http://localhost:3002/players/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        const jwt = data.token;
        console.log(jwt);

        localStorage.setItem("jwt", jwt);
        navigate("/espace/creneaux");
      })
      .catch((error) => {
        console.error(
          "Une erreur s'est produite lors de l'authentification :",
          error
        );
      });
  };
  return (
    <>
      <Header />
      <main className="flex-shrink-0">
        <div className="container">
          <h1 className="text-uppercase text-center my-lg-2">
            connexion licencies fva
          </h1>
          <section className="vh-50 ">
            <div className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col col-xl-10">
                  <div className="card rounded-3 border-white">
                    <div className="row g-0">
                      <div className="col-md-6 col-lg-5 d-none d-md-block">
                        <img
                          src="/img/phtos-connexion-joueurs.jpg"
                          alt="login form"
                          className="img-fluid rounded-start-3"
                        />
                      </div>
                      <div className="col-md-6 col-lg-7 d-flex align-items-center bg-fva-bleu rounded-end-3">
                        <div className="card-body p-2 p-lg-2 text-black">
                          <form onSubmit={connection}>
                            <div className="d-flex flex-column justify-content-center align-items-center mb-3 pb-3 mb-md-1 pb-md-1">
                              <img
                                src="/img/logo-fva-complet.svg"
                                alt="login form"
                                className="img-fluid rounded-3"
                                width="100"
                                height="100"
                              />
                              <p className="text-white px-3 px-md-1 lh-sm">
                                Cet espace est réservé aux licenciés et membres
                                actifs de l’association sportive de la ville
                                d’aussonne. Si vous souhaitez nous rejoindre en
                                tant que menbre actif de l’association, merci de
                                nous contacter à l’aide du formulaire du site
                              </p>
                            </div>

                            <div className="form-outline mb-2 mb-md-1">
                              <input
                                type="email"
                                name="emailPlayer"
                                className="form-control form-control-lg"
                              />
                              <label
                                className="form-label"
                                htmlFor="emailPlayer"
                              >
                                Votre adresse mail
                              </label>
                            </div>

                            <div className="form-outline mb-2 mb-md-1">
                              <input
                                type="password"
                                name="password"
                                className="form-control form-control-lg"
                              />
                              <label className="form-label" htmlFor="password">
                                Votre mot de passe
                              </label>
                            </div>

                            <div className="pt-1 mb-1 mb-md-0">
                              <button
                                className="btn effectV btn-sm btn-block bg-fva-vert-f text-white fw-bold"
                                type="submit"
                              >
                                CONNEXION
                              </button>
                            </div>

                            <a
                              className="small text-muted d-md-none"
                              href="contact.html"
                            >
                              Si vous avez oublié votre mot de passe, merci de
                              nous envoyer un message
                            </a>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Connexuser;
