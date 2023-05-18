import React from "react";
import { Link } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";


const Adhesions = () => {return (
    
    <>
    <Header/>
    <main>
        <div className="container">
          
            <h1 className="text-uppercase text-center my-lg-2">adhésions</h1>
            
            <section className="presentation-fva">
              <div className="container">
                <h2>Les cotisations annuelles</h2>
                <hr className="hr-danger" />
                <section className="text-center">
                  <div className="row justify-content-around">
                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4">
                      <div className="column text-white fw-bold bg-fva-terrain bg-fva-rouge">
                        <p className="col-12 py-2 fs-3 text-uppercase "> adultes</p>
                        <div className="separator"></div>
                        <p className="col-7 py-2 mx-auto">Accès à tous les créneaux de jeu par semaine</p>
                        <p className="col-7 py-2 mx-auto">1 entrainement par semaine par un joueur diplômé</p>
                        <p className="col-7 py-2 mx-auto">Frais d'inscription à 3 tournois offerts par le club</p>
                        <p className="col-7 py-2 mx-auto">Assurance</p>
                        <p className="col-12 py-2 mx-auto fs-1">85 € / an</p>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4">
                      <div className="column text-white fw-bold bg-fva-terrain bg-fva-vert">
                        <p className="col-12 py-2 fs-3 text-uppercase "> couple</p>
                        <div className="separator"></div>
                        <p className="col-7 py-2 mx-auto">Accès à tous les créneaux de jeu par semaine</p>
                        <p className="col-7 py-2 mx-auto">1 entrainement par semaine par un joueur diplômé</p>
                        <p className="col-7 py-2 mx-auto">Frais d'inscription à 3 tournois offerts par le club</p>
                        <p className="col-7 py-2 mx-auto">Assurance</p>
                        <p className="col-12 py-2 mx-auto fs-1">160 € / an</p>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4">
                      <div className="column text-white fw-bold bg-fva-terrain bg-fva-bleu">
                        <p className="col-12 py-2 fs-3 text-uppercase lh-sm"> étudiants et SANS EMPLOI</p>
                        <p className="col-7 py-2 mx-auto">Accès à tous les créneaux de jeu par semaine</p>
                        <p className="col-7 py-2 mx-auto">1 entrainement par semaine par un joueur diplômé</p>
                        <p className="col-7 py-2 mx-auto">Frais d'inscription à 3 tournois offerts par le club</p>
                        <p className="col-7 py-2 mx-auto">Assurance</p>
                        <p className="col-12 py-2 mx-auto fs-1">65 € / an</p>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4">
                      <div className="column text-white fw-bold bg-fva-terrain bg-fva-orange">
                        <p className="col-12 py-2 fs-3 text-uppercase ">jeune - 18 ans</p>
                        <div className="separator"></div>
                        <p className="col-7 py-2 mx-auto">Accès à tous les créneaux de jeu par semaine</p>
                        <p className="col-7 py-2 mx-auto">1 entrainement par semaine par un joueur diplômé</p>
                        <p className="col-7 py-2 mx-auto">Frais d'inscription à 5 tournois offerts par le club</p>
                        <p className="col-7 py-2 mx-auto">Assurance</p>
                        <p className="col-12 py-2 mx-auto fs-1">70 € / an</p>
                      </div>
                    </div>
                  </div>
                    <p className="col-12 fs-2 text-uppercase fw-bold">SUPPLEMENT INTERCLUBS</p>
                    <p className="col-8 mx-auto fs-6 mt-10">Permet la participation aux matchs interclubs</p>
                    <p className="col-12 mx-auto fs-3 fw-bold">20 € / an</p>
                    <p className="col-8 mx-auto fs-6 mt-10">(en plus de la cotisation)</p>
                </section>
              </div>
            </section>
            <section>
              <div className="container">
                <h2>Adhésion aux fous du volant</h2>
                <hr className="hr-danger" />
                <p className="mb-lg-4 color-fvaRouge fw-bold text-uppercase text-center">Toutes les nouvelles inscriptions et renouvellement de licence se font en ligne</p>
                <div className="row justify-content-around">
                  <div className="col-12 col-sm-6 col-md-5 col-lg-3 mb-4 border-fva-rouge">
                    <div className="column text-center">
                      <p className="col-7 fs-6 mx-auto">Vous devez fournir un</p>
                      <p className="col-12 fs-5 text-uppercase mt-10 color-fvaRouge fw-bold">certificat médical</p>
                      <p className="col-7 fs-6 mx-auto mt-10 mb-1">si</p>
                      <div className="row justify-content-around">
                          <div className="d-flex flex-column justify-content-center col-3 text-white p-0 fs-6 bg-fva-rouge">
                            <p>1ère licence</p>
                          </div>
                          <div className="d-flex flex-column justify-content-center col-3 text-white p-0 fs-6 bg-fva-rouge">
                            <p>Non licencié la saison dernière</p>
                          </div>
                          <div className="d-flex flex-column justify-content-center col-3 text-white p-0 fs-6 bg-fva-rouge">
                            <p>Dernier certificat médical fourni il y a 3 ans</p>
                          </div>
                      </div>
                      <p className="col-12 fs-6 text-uppercase color-fvaRouge fw-bold">VOUS DEVEZ UTILISER OBLIGATOIREMENT
                        LE CERTIFICAT MEDICAL DE LA FFBAD
                        </p>
                      <p className="col-12 fs-6 mx-auto">Télécharger et Imprimer le certificat<br/>
                        Remplir votre partie  et signer <br/>
                        RDV chez votre médecin <br/>
                        Scanner et Déposer  en ligne</p>
                        <p className="col-12 fs-6 mx-auto color-fvaRouge"> !! le fichier ne devra pas excéder 2 Mo !!</p>
                        <button type="button" className="col-8 my-3 btn btn-fva-rouge">Télécharger le certificat</button>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-md-5 col-lg-3 mb-4 border-fva-vert">
                    <div className="column text-center">
                      <p className="col-8 fs-6 mx-auto">Pour la souscription de la</p>
                      <p className="col-12 fs-5 text-uppercase mt-10 color-fvaVert fw-bold">LICENCE</p>
                      <p className="col-7 fs-6 mx-auto mt-10 mb-1">auprès de la FFBAD</p>
                      <div className="separator"></div>
                      <p className="col-12 fs-6 mt-10 fw-bold">Nouveaux adhérents</p>
                      <p className="col-12 fs-6 mx-auto">N'oubliez pas de compléter et signer votre partie du certificat médical avant de le charger dans le formulaire en ligne !</p>
                        <button type="button" className="col-8 my-3 btn btn-fva-vert">Télécharger le certificat</button>
                        <div className="separator"></div>
                      <p className="col-12 fs-6 mt-10 fw-bold">Nouveaux adhérents</p>
                      <p className="col-12 fs-6 py-1 mx-auto">Allez sur le site MYFFBaD
                        Connectez-vous, un pop-up vous demandera de renouveler votre licence, et laissez-vous guider...</p>
                        <button type="button" className="col-8 my-3 btn btn-fva-vert">Télécharger le certificat</button>
                      
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-md-5 col-lg-3 mb-4 border-fva-orange">
                    <div className="column text-center">
                      <p className="col-7 fs-6 mx-auto">Pour le paiement de la</p>
                      <p className="col-12 fs-5 text-uppercase mt-10 color-fvaOrange fw-bold">cotisation</p>
                      <p className="col-7 fs-6 mx-auto mt-10 mb-1">plusieurs possibilités</p>
                      <div className="row justify-content-around mb-2">
                          <div className="d-flex flex-column justify-content-center align-items-center col-3 text-white p-3 fs-6 bg-fva-terrain bg-fva-orange">
                            <p>Espèces</p>
                          </div>
                          <div className="d-flex flex-column justify-content-center  align-items-center col-3 text-white p-0 fs-6 bg-fva-terrain bg-fva-orange">
                            <p>Chèques</p>
                          </div>
                          <div className="d-flex flex-column justify-content-center align-items-center col-3 text-white p-0 fs-6 bg-fva-terrain bg-fva-orange">
                            <p>Virement</p>
                          </div>
                      </div>
                      <p className="col-12 fs-6 fw-bold lh-1 mb-2">Si vous désirez participer aux interclubs, merci de compléter votre demande d'adhésion au club avant le 15 septembre si possible</p>
                      <p className="col-12 fs-6 text-uppercase color-fvaOrange fw-bold">précision à apporter
                        lors du paiement</p>
                      <p className="col-12 fs-6 mx-auto">Dans le message virement ou dos du chèque
                        nom, prénom et montant de la cotisation de chacun des adhérents + interclubs le cas échéant</p>
                        <p className="col-12 fs-6 mx-auto color-fvaOrange">!! Votre adhésion est validée que lors du paiement de la  cotisation !!</p>
                        <button type="button" className="col-8 my-3 btn btn-fva-orange">Télécharger le RIB</button>
                    </div>
                  </div>
              </div>
              </div>
            </section>
            <section>
              <div className="container">
                <h2>Séances d’essais et invitations</h2>
                <hr className="hr-danger" />
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <h3 className="text-center color-fvaBleu">SEANCE D'ESSAI</h3>
                  <div className="d-flex flex-row  g-4 text-white justify-content-center align-items-center flex-wrap">
                    <div className="essais col-12 col-sm-12 col-md-5 mb-md-3 col-lg-3 col-xl-2 d-flex flex-row p-0 bg-fva-bleu position-relative">
                      <p className=" text-center"><span className="fw-bold">2 jours ouvrés</span> minimum avant la date  de l’essai</p>
                    </div>
                    <div className="essais col-12 col-sm-12 col-md-6 mb-md-3 col-lg-5 col-xl-3 d-flex flex-row p-0 bg-fva-bleu position-relative">
                      <p className="text-center">J’envois un mail à <span className="fw-bold">badmintonaussonne@gmail.com</span></p>
                    </div>
                    <div className="essais col-12 col-sm-12 col-md-5 mb-md-3 col-lg-4 col-xl-3 d-flex flex-row p-0 bg-fva-bleu position-relative">
                      <p className=" text-center"><span className="fw-bold">Objet </span>
                        ESSAI du (date)<br/>
                        <span className="fw-bold">Message </span>
                        nom - prénom - date de naissance </p>
                    </div>
                    <div className="essais col-12 col-sm-12 col-md-5 mb-md-3 col-lg-4 col-xl-3 d-flex flex-row p-0 bg-fva-bleu">
                      <p className=" text-center">Je me présente le jour de l’essai <span className="fw-bold">avec mon smartphone pouvant scanner un QRCODE</span> (validation pour l’assurance)</p>
                    </div>
                  </div>
                  <p className="col-12 fs-6 text-black mx-auto mb-5">Les pratiquants à « l’essai » accueillis dans les clubs lors des séances d’entraînement, déclarées dans les délais impartis, bénéficieront de garanties individuelle accident et responsabilité civile <span className="fs-4 color-fvaBleu fw-bold">sachant que le nombre d’essais pris en garantie ne peut être supérieur à 3.</span> </p>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <h3 className="text-center color-fvaRouge">INVITATION D'UN AMI LICENCIE DANS UN AUTRE CLUB</h3>
                  <div className="d-flex flex-row  g-4 text-white justify-content-center align-items-center flex-wrap">
                    <div className="essais col-12 col-sm-12 col-md-5 mb-md-3 col-lg-3 col-xl-2 d-flex flex-row p-0 bg-fva-rouge position-relative">
                      <p className=" text-center"><span className="fw-bold">2 jours ouvrés</span> minimum avant la date  de l’essai</p>
                    </div>
                    <div className="essais col-12 col-sm-12 col-md-6 mb-md-3 col-lg-5 col-xl-3 d-flex flex-row p-0 bg-fva-rouge position-relative">
                      <p className="text-center">J’envois un mail à <span className="fw-bold">badmintonaussonne@gmail.com</span></p>
                    </div>
                    <div className="essais col-12 col-sm-12 col-md-5 mb-md-3 col-lg-4 col-xl-3 d-flex flex-row p-0 bg-fva-rouge position-relative">
                      <p className=" text-center"><span className="fw-bold">Objet </span>
                        ESSAI du (date) <br/>
                        <span className="fw-bold">Message </span>
                        nom - prénom - date de naissance </p>
                    </div>
                    <div className="essais col-12 col-sm-12 col-md-5 mb-md-3 col-lg-4 col-xl-3 d-flex flex-row p-0 bg-fva-rouge">
                      <p className="text-center">Je me présente le jour de l’essai <span className="fw-bold">avec mon ami pour le présenter au groupe</span></p>
                    </div>
                  </div>
                  <div className="separator"></div>
                </div> 
              </div>
            </section>    
        </div>
    </main>
    <Footer/>
    
    
    </>




  );
};

export default Adhesions;