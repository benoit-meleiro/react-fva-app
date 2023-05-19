import React from "react";
import { Link } from "react-router-dom";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";


const Home = () => {return (
    
    <>
    <Header/>
    <main>
      <section>
        <div className="container-fluid px-0 py-0 mx-auto">
            <div className="img-une-accueil bg-light">
                <img className="img-fond" src="img/cours-badminton-fva.jpg" alt="de terrain de badminton à aussonne" />
                <img className="img-logo" src="img/logo-fva-complet.svg" alt="Logo des fous du volant aussonnais" />
                
                
            </div>
        </div>
    </section>
        <div className="container">
          
            <h1 className="text-uppercase text-center my-lg-2">le badminton à aussonne</h1>
            
            <section className="text-center">
                <div className="row justify-content-around">
                  <div className="col-6 col-sm-4 col-md-4 col-lg-2">
                    <img src="/img/fva-raquette.svg" alt="icone raquette symbolisant le nombre de joueurs" width="48" height="48" className="d-inline-block align-text-top"/>
                    <h4 className="fw-bold mb-3">+ de 130 joueurs</h4>                    
                  </div>
                  <div className="col-6 col-sm-4 col-md-4 col-lg-2">
                    <img src="/img/badminton-joueuse.svg" alt="icone de jeune joueuse symbolisant l'âge des adhérents" width="48" height="48" className="d-inline-block align-text-top"/>
                    <h4 className="fw-bold mb-3">de 9 à 71 ans</h4>                    
                  </div>
                  <div className="col-6 col-sm-4 col-md-4 col-lg-2">
                    <img src="/img/filet-volant.svg" alt="icone voalnt symbolisant le nombre d'heures disponibles" width="48" height="48" className="d-inline-block align-text-top"/>
                    <h4 className="fw-bold mb-3">10 heures / semaine</h4>                    
                  </div>
                  <div className="col-6 col-sm-4 col-md-4 col-lg-2">
                    <img src="/img/terrain-de-badminton.svg" alt="icone terrain badminton" width="48" height="48" className="d-inline-block align-text-top"/>
                    <h4 className="fw-bold mb-3">de 5 à 7 terrains / sessions</h4>                    
                  </div>
                  <div className="col-6 col-sm-4 col-md-4 col-lg-2">
                    <img src="/img/badminton-double-raquette.svg" alt="icone célebrant le duel d'équipes" width="48" height="48" className="d-inline-block align-text-top"/>
                    <h4 className="fw-bold mb-3">2 équipes interclubs</h4>                    
                  </div>
                </div>
            </section>
            
            <section className="presentation-fva">
              <div className="container">
                <h2>Convivialité et bon esprit</h2>
                <hr className="hr-danger" />
                <p className="mb-lg-4">L’association de Badminton de la ville d’Aussonne existe depuis plus de vingt ans. Orienté vers le badminton loisirs, les fous du volant aussonnais priviliégient une approche familiale et conviviale de la pratique du badminton. On n’oublie pas la compétition avec des interclubs qui permettent d’échanger avec les clubs de la région. Le club organise aussi de multiples événements, auxquels d’ailleurs nos badistes n’hésitent pas à inviter des non badistes. Chez les Aussonnais, le bad c’est une grande famille.</p>
                <h2>2 salles, même ambiance</h2>
                <hr className="hr-danger" />
                <p className="mb-lg-4">les sessions de badminton se divisent sur deux sites de la ville. </p>
                <div className="row justify-content-around mb-3">
                  <div className="card col-12 col-lg-5 p-0 border-alert mb-3">
                    <img src="/img/gymnas-g-tillion-aussonne.png" className="card-img-top" alt="gymnase germaine tillion - Aussonne"/>
                    <div className="card-body">
                      <h3>Gymnase Germaine Tillion</h3>
                      <h4>Les loisirs (adultes et jeunes)</h4>
                      <p>Les lundi, mardi 21h - 23h & Le mercredi  20h30 -  22h30</p>  
                      <h4>Les encadrements enfants</h4>  
                      <p>Le Mercredi de 18h30 à 19h30 pour les petits
                        Le Mercredi de 19h00 à 20h30 pour les grands</p>  
                      <h4>Les encadrements adultes</h4>  
                      <p>Le Mardi de 21h à 23h moitié gymnase</p>  
                    </div>
                  </div>
                  <div className="card col-12 col-lg-5 p-0 border-alert mb-3">
                    <img src="/img/hall-p-denis-aussonne.png" className="card-img-top" alt="gymnase Pierre Denis - Aussonne"/>
                    <div className="card-body">
                      <h3>Gymnase Pierre Denis </h3>
                      <h4>Les loisirs (adultes et jeunes)</h4>
                      <p>Le jeudi 21h - 23h & Le vendredi  20h30 - 22h30</p>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-around">
                  <div className="col-12 col-lg-6 text-center">
                  <Link className="lien-ad" to={`/adhesions`}><img src="/img/volant-rouge.svg" width="36" height="36" alt="volant de badminton en icone"/>J’adhère pour la saison 2023 / 2024</Link>
                    
                  </div>
                  <div className="col-12 col-lg-6 text-center">
                  <Link className="lien-ad" to={`/adhesions`}><img src="/img/volant-rouge.svg" width="36" height="36" alt="volant de badminton en icone"/>Je souhaite faire une session d'essai</Link>
                    
                  </div>
                </div>
              </div>
            </section>
            
            <section>
              <div className="container">
                <h2>Evénements à venir</h2>
                <hr className="hr-danger" />
                  <div className="row flex-wrap justify-content-center text-center">
                    <div className="etiquette Tournoi d-flex flex-row p-0 col-11 col-sm-11 col-md-5 col-lg-5 col-xl-3">
                      <div className="col-2 col-sm-2 col-md-3 col-lg-2 text-white d-flex flex-column justify-content-center align-items-center text-center gap-3">
                        <p className="dateEvt fs-6 lh-1">SAM<br/><span className=" fw-bold fs-2">13</span><br/>MAI</p>
                      </div> 
                      <div className="col-10 col-sm-10 col-md-9 col-lg-10 bg-white text-center p-3">
                        <h2>GRAND TOURNOI</h2>
                        <p>13H00</p>  
                        <p>Gymnase pierre Denis</p>  
                      </div>
                    </div>
                    <div className="etiquette Repas d-flex flex-row p-0 col-11 col-sm-11 col-md-5 col-lg-5 col-xl-3">
                      <div className="col-2 col-sm-2 col-md-3 col-lg-2 text-white d-flex flex-column justify-content-center align-items-center text-center gap-3">
                        <p className="dateEvt fs-6 lh-1">SAM<br/><span className=" fw-bold fs-2">13</span><br/>MAI</p>
                      </div> 
                      <div className="col-10 col-sm-10 col-md-9 col-lg-10 bg-white text-center p-3">
                        <h2>GRAND TOURNOI</h2>
                        <p>13H00</p>  
                        <p>Gymnase pierre Denis</p>  
                      </div>
                    </div>
                    <div className="etiquette Jeux d-flex flex-row p-0 col-11 col-sm-11 col-md-5 col-lg-5 col-xl-3">
                      <div className="col-2 col-sm-2 col-md-3 col-lg-2 text-white d-flex flex-column justify-content-center align-items-center text-center gap-3">
                        <p className="dateEvt fs-6 lh-1">SAM<br/><span className=" fw-bold fs-2">13</span><br/>MAI</p>
                      </div> 
                      <div className="col-10 col-sm-10 col-md-9 col-lg-10 bg-white text-center p-3">
                        <h2>GRAND TOURNOI</h2>
                        <p>13H00</p>  
                        <p>Gymnase pierre Denis</p>  
                      </div>
                    </div>
                    <div className="etiquette Reunion d-flex flex-row p-0 col-11 col-sm-11 col-md-5 col-lg-5 col-xl-3">
                      <div className="col-2 col-sm-2 col-md-3 col-lg-2 text-white d-flex flex-column justify-content-center align-items-center text-center gap-3">
                        <p className="dateEvt fs-6 lh-1">SAM<br/><span className=" fw-bold fs-2">13</span><br/>MAI</p>
                      </div> 
                      <div className="col-10 col-sm-10 col-md-9 col-lg-10 bg-white text-center p-3">
                        <h2>GRAND TOURNOI</h2>
                        <p>13H00</p>  
                        <p>Gymnase pierre Denis</p>  
                      </div>
                    </div>
                    <div className="etiquette Closed d-flex flex-row p-0 col-11 col-sm-11 col-md-5 col-lg-5 col-xl-3">
                      <div className="col-2 col-sm-2 col-md-3 col-lg-2 text-white d-flex flex-column justify-content-center align-items-center text-center gap-3">
                        <p className="dateEvt fs-6 lh-1">SAM<br/><span className=" fw-bold fs-2">13</span><br/>MAI</p>
                      </div> 
                      <div className="col-10 col-sm-10 col-md-9 col-lg-10 bg-white text-center p-3">
                        <h2>GRAND TOURNOI</h2>
                        <p>13H00</p>  
                        <p>Gymnase pierre Denis</p>  
                      </div>
                    </div>
                  </div>
              </div>
            </section>
            <section className="mb-5">
              <h2>Nos partenaires</h2>
                <hr className="hr-danger" />
              <div className="container-scroll overflow-hidden">
                <article className="container-band-logos">
                  <div className="div-bande-logos">
                    <ul className="bande-logos">
                      <li><img src="/img/partenaires-fva-aussonne.png" alt="mairie Aussonne partenaire fva"/></li>
                      <li><img src="/img/partenaires-fva-codep31.png" alt="comité 31  partenaire fva"/></li>
                      <li><img src="/img/partenaires-fva-ffbad.png" alt="ffbad partenaire fva"/></li>
                      <li><img src="/img/partenaires-fva-codepHG.png" alt="partenaire fva"/></li>
                      <li><img src="/img/partenaires-fva-region-occitanie.png" alt="partenaire fva"/></li>
                      <li><img src="/img/partenaires-fva-larde-sports.png" alt="partenaire fva"/></li>
                      <li><img src="/img/partenaires-fva-sports-raquettes.png" alt="partenaire fva"/></li>
                      </ul>
                  </div>
                  <div className="div-bande-logos">
                    <ul className="bande-logos">
                      <li><img src="/img/partenaires-fva-aussonne.png" alt="partenaire fva"/></li>
                      <li><img src="/img/partenaires-fva-codep31.png" alt="partenaire fva"/></li>
                      <li><img src="/img/partenaires-fva-ffbad.png" alt="partenaire fva"/></li>
                      <li><img src="/img/partenaires-fva-codepHG.png" alt="partenaire fva"/></li>
                      <li><img src="/img/partenaires-fva-region-occitanie.png" alt="partenaire fva"/></li>
                      <li><img src="/img/partenaires-fva-larde-sports.png" alt="partenaire fva"/></li>
                      <li><img src="/img/partenaires-fva-sports-raquettes.png" alt="partenaire fva"/></li>
                      </ul>
                  </div>
                </article>
              </div>
            </section>
        </div>
    </main>
    <Footer/>
    
    
    </>




  );
};

export default Home;