import React from "react";
import { Link } from "react-router-dom";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";

const Contact = () => {
  return (
    <>
      <Header />
      <main className="flex-shrink-0">
        <div className="container">
          <h1 className="text-uppercase text-center my-lg-2">Contact</h1>
          <section>
            <div className="container">
              <h2>Contactez-nous</h2>
              <hr className="hr-danger" />
              <div className="d-flex flex-row justify-content-center align-items-center">
                <div className="col-6 col-sd-3 col-md-6 col-lg-4 col-xl-4">
                  <img
                    className="mailbad"
                    src="/img/mail-fva.jpg"
                    alt="badiste femme envoyant un mail"
                  />
                </div>
                <div className="col-6 col-sd-6 col-md-6 col-lg-6 col-xl-6">
                  <p>
                    Pour nous contacter, merci de nous écrire à l'adresse
                    suivante :<br />
                    <span className="fw-bold">badmintonaussonne@gmail.com</span>
                    <br />
                    Nous vous répondrons le plus rapidement possible
                  </p>
                </div>
              </div>
              <h2>Foire aux questions</h2>
              <hr className="hr-danger" />
              <div
                className="accordion accordion-flush mb-5"
                id="accordionFlushExample"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      <span className="fw-bold color-fvaRouge">LE CLUB</span>
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <span className="fw-bold color-fvaRouge">
                        Comment adhérer au club des Fous du Volant Aussonnais ?
                      </span>{" "}
                      tout est expliqué <a href="./adhesions.html">ici</a>
                      <br />
                      <span className="fw-bold color-fvaRouge">
                        Quels sont les créneaux de jeux ?
                      </span>{" "}
                      le détail c'est par <a href="./index.html">là</a>
                      <br />
                      <span className="fw-bold color-fvaRouge">
                        Quand le club est-il exceptionnellement fermé ?
                      </span>{" "}
                      Les gymnases sont fermés pendant les vacances scolaires.
                      Nous pouvons obtenir des créneaux de la part de la mairie,
                      vous serez prévenus par mail. Enfin, pour des fermetures
                      exceptionnelles mail et espace joueurs bloqués
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      <span className="fw-bold color-fvaBleu">
                        GOODIES DU CLUB
                      </span>
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <span className="fw-bold color-fvaBleu">
                        Puis-je acheter des volants et à quel prix ?
                      </span>{" "}
                      Bien sur il suffit de demander au responsable du créneau
                      de jeu et d'avoir l'appoint pour une boite de BABOLAT au
                      prix de 12 € au lieu de 18.95€
                      <br />
                      <span className="fw-bold color-fvaBleu">
                        Mon cordage est cassé que dois-je faire ?
                      </span>{" "}
                      Stéphane Herbin, de la société Sports Raquettes, se
                      propose de recorder vos raquettes et de vendre du matériel
                      de badminton.
                      <br />
                      Le club des FVA a acheté une bobine de fil de cordage,
                      afin que les adhérents faisant recorder leur raquette ne
                      paient que les frais de main d'oeuvre (10€). Demandez à un
                      responsable du créneau le jeudi et vendredi exclusivement
                      <br />
                      <span className="fw-bold color-fvaBleu">
                        Comment se procurer un maillot à l'effigie du club ?
                      </span>{" "}
                      Si vous êtes intéressé, merci de faire la demande sur la
                      boite mail du club (les polos restants ne sont pas en
                      stock au gymnase)
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      <span className="fw-bold color-fvaOrange">
                        ANIMATIONS DU CLUB
                      </span>
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <span className="fw-bold color-fvaOrange">
                        Quelles sont les animations et quand se déroulent-elles
                        ?
                      </span>{" "}
                      Nous essayon d'organiser un événement une fois par mois,
                      que ce soit un tournoi interne de badminton, un repas ou
                      auberge espagnole mais aussi le très renommé tournoide
                      belote. On vous prévient généralement bien en avance sur
                      la page d'accueil du site
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

export default Contact;
