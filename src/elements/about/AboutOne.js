import React from 'react';
import Typed from 'react-typed';

const AboutOne = () => {
    return (
        <div className="rwt-about-area rn-section-gap">
            <div className="container">
                <div className="row row--30 align-items-center">
                    <div className="col-lg-5">
                        <div className="thumbnail">
                            <img className="w-100" src="./images/about/about-1.png" alt="About Images" />
                        </div>
                    </div>

                    <div className="col-lg-7 mt_md--40 mt_sm--40">
                        <div className="content">
                            <div className="section-title">
                                <h2 className="title">Unique Business <br /> {" "}
                                    <Typed className="theme-gradient"
                                        strings={[
                                            "Consulting.",
                                            "Finance.",
                                            "Agency.",
                                        ]}
                                        typeSpeed={80}
                                        backSpeed={5}
                                        backDelay={1000}
                                        loop
                                    />
                                </h2>
                                <p>Generamos contenido de valor, tendencias y creamos la estrategia ideal para que el mensaje de tu marca conecte con clientes potenciales con el fin de alcanzar resultados efectivos.</p>
                                <div className="read-more-btn mt--40">
                                    <a className="btn-default" href="#"><span>More About Us</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default AboutOne
