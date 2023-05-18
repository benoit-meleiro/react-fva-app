import React from "react";
import { Link } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";


const Club = () => {return (
    
    <>
    <Header/>
    <main>
        <div className="container">
          
            <h1 className="text-uppercase text-center my-lg-2">le club</h1>
            
            <section className="presentation-fva">
              <div className="container">
                <h2>Convivialité et bon esprit</h2>
                <hr className="hr-danger" />
                <section className="text-center">
                  <div className="row justify-content-around color-fvaRouge">
                    <div className="col-6 col-sm-4 col-md-4 col-lg-2 m-auto">
                      <h4 className="fw-bold mb-3 text-uppercase ">Le bureau</h4>                    
                    </div>
                    <div className="col-6 col-sm-4 col-md-4 col-lg-2">
                      <img src="/img/Jean_Tourloupe.jpg" alt="icone du président" width="48" height="48" className="d-inline-block align-text-top rounded-pill border-fva-rouge"/>
                      <h4 className="fw-bold mb-0">Jean</h4>
                      <p className="fs-6">Président</p>                    
                    </div>
                    <div className="col-6 col-sm-4 col-md-4 col-lg-2">
                      <img src="/img/Al_Anbique.jpg" alt="icone du secrétaire de bureau" width="48" height="48" className="d-inline-block align-text-top rounded-pill border-fva-rouge"/>
                      <h4 className="fw-bold mb-0">Al</h4>
                      <p className="fs-6">Secrétaire</p>                     
                    </div>
                    <div className="col-6 col-sm-4 col-md-4 col-lg-2">
                      <img src="/img/Marthe_Ini.jpg" alt="icone de la trésorière de bureau" width="48" height="48" className="d-inline-block align-text-top rounded-pill border-fva-rouge"/>
                      <h4 className="fw-bold mb-0">Marthe</h4>
                      <p className="fs-6">Trésorière</p>                     
                    </div>
                    <div className="col-6 col-sm-4 col-md-4 col-lg-2">
                      <img src="/img/Olivier_Tnam.jpg" alt="icone de l'adjoint du président" width="48" height="48" className="d-inline-block align-text-top rounded-pill border-fva-rouge"/>
                      <h4 className="fw-bold mb-0">Olivier</h4>
                      <p className="fs-6">Adjoint</p>                     
                    </div>
                    <div className="col-6 col-sm-4 col-md-4 col-lg-2">
                      <img src="/img/Mehdi_Khaman.jpg" alt="icone de jeune joueuse symbolisant l'âge des adhérents" width="48" height="48" className="d-inline-block align-text-top rounded-pill border-fva-rouge"/>
                      <h4 className="fw-bold mb-0">Mehdi</h4>
                      <p className="fs-6">Membre actif</p>                     
                    </div>
                  </div>
                  <div className="row justify-content-around ">
                    <div className="col-6 col-sm-4 col-md-4 col-lg-2 m-auto color-fvaBleu">
                      <h4 className="fw-bold mb-0 text-uppercase ">capitaines interclubs</h4>                    
                    </div>
                    <div className="col-6 col-sm-4 col-md-4 col-lg-2 color-fvaBleu">
                      <img src="/img/Tara_Clure.jpg" alt="icone de la capitaine equipe 1" width="48" height="48" className="d-inline-block align-text-top rounded-pill border-fva-bleu"/>
                      <h4 className="fw-bold mb-0">Tara</h4>
                      <p className="fs-6">Equipe 1</p>                    
                    </div>
                    <div className="col-6 col-sm-4 col-md-4 col-lg-2 color-fvaBleu">
                      <img src="/img/Jenny_Fraireniseur.jpg" alt="icone de jeune joueuse symbolisant l'âge des adhérents" width="48" height="48" className="d-inline-block align-text-top rounded-pill border-fva-bleu"/>
                      <h4 className="fw-bold mb-0">Jenny</h4>
                      <p className="fs-6">Equipe 2</p>                     
                    </div>
                    <div className="col-6 col-sm-4 col-md-4 col-lg-2 m-auto color-fvaBVert">
                      <h4 className="fw-bold mb-0 text-uppercase">encadrants diplomés</h4>
                    </div>
                    <div className="col-6 col-sm-4 col-md-4 col-lg-2 color-fvaBVert">
                      <img src="/img/Elsa_Rose.jpg" alt="icone de jeune joueuse symbolisant l'âge des adhérents" width="48" height="48" className="d-inline-block align-text-top rounded-pill border-fva-vert"/>
                      <h4 className="fw-bold mb-0">Elsa</h4>
                      <p className="fs-6">Jeunes</p>                     
                    </div>
                    <div className="col-6 col-sm-4 col-md-4 col-lg-2 color-fvaBVert">
                      <img src="/img/Sam_Soule.jpg" alt="icone de jeune joueuse symbolisant l'âge des adhérents" width="48" height="48" className="d-inline-block align-text-top rounded-pill border-fva-vert"/>
                      <h4 className="fw-bold mb-0">Sam</h4>
                      <p className="fs-6">Adultes</p>                     
                    </div>
                  </div>
              </section>
              </div>
            </section>
            
            <section>
              <div className="container">
                <h2>Les équipes des FVA</h2>
                <hr className="hr-danger" />
                <p className="mb-lg-4">Vous pouvez suivre leurs résultats sur BADNET</p>
                <div className="row justify-content-around mb-3">
                  <div className="card col-12 col-lg-5 p-0 border-fva-bleu mb-3">
                    <img src="/img/equipe1-fva.jpg" className="card-img-top" alt="Sunset Over the Sea"/>
                    <div className="card-body color-fvaBleu text-center">
                      <div className="d-flex flex-row justify-content-around">
                        <h4 className=" lh-1">Equipe 1 FVA<br/><span className="fs-6 fw-normal">Division 3</span></h4>
                        <h4 className=" lh-1">Sabrina MAUREL<br/><span className="fs-6 fw-normal">Capitaine</span></h4>
                      </div>
                      <div className="d-flex flex-row justify-content-around">
                        <ul>
                          <li>Lauriane </li>
                          <li>Maud </li>
                          <li>Stéphanie </li>
                          <li>Noémie </li>
                          
                        </ul>
                        <ul >
                          <li>Yann</li>
                          <li>Jonathan </li>
                          <li>Guillaume </li>
                          <li>Damien </li>
                          
                        </ul>
                        <ul >
                          <li>Olivier </li>
                          <li>Stéphane</li>
                          <li>Olivier</li>
                          <li></li>
                          <li></li>
                          <li></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="card col-12 col-lg-5 p-0 border-fva-bleu mb-3">
                    <img src="/img/equipe2-fva.jpg" className="card-img-top" alt="Sunset Over the Sea"/>
                    <div className="card-body color-fvaBleu text-center">
                      <div className="d-flex flex-row justify-content-around">
                        <h4 className=" lh-1">Equipe 1 FVA<br/><span className="fs-6 fw-normal">Division 3</span></h4>
                        <h4 className=" lh-1">Sabrina MAUREL<br/><span className="fs-6 fw-normal">Capitaine</span></h4>
                      </div>
                      <div className="d-flex flex-row justify-content-around">
                        <ul>
                          <li>Géraldine</li>
                          <li>Emily</li>
                          <li>Elodie F</li>
                          <li>Elodie R</li>
                          
                        </ul>
                        <ul >
                          <li>Yoann</li>
                          <li>Christophe</li>
                          <li>Philippe</li>
                          <li>Benoit-Xavier</li>
                          
                        </ul>
                        <ul >
                          <li>Frédéric</li>
                          <li>Julien</li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="mb-5">
              <h2>Les tournois externes des FVA</h2>
                <hr className="hr-danger" />
              <div className="container text-center">
                <h4>Pour les jeunes qui suivent les cours du mercredi</h4> 

                  <p>Les frais d'inscription à tous les TDJ plus 5 autres tournois offerts par le club (s'adresser à Stéphanie)</p>
                  
                   <h4>Pour les autres adhérents</h4>
                  
                  <p>Jeunes -18 ans = tous les TDJ plus 5 autres tournois offerts par le club<br/>
                  
                    Séniors et vétérans = 3 tournois dans la saison offerts par le club</p>
                  
                  <h4>Modalités d'inscription</h4> 
                  
                   <p>Si votre tournoi est offert = contacter le club par mail pour vous inscrire<br/>
                  
                    Si vous avez dépassé votre quota de tournois offerts = vous devez vous inscrire depuis BADNET</p> 
                  
                  <h4>Calendrier des tournois en Occitanie</h4>
                  
                  <a href="http://" target="_blank" rel="noopener noreferrer">CALENDRIER 2022 2023</a> 
                  
                  
              </div>
            </section>
        </div>
    </main>
    <Footer/>
    
    
    </>




  );
};

export default Club;