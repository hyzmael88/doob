import React from 'react';
import Typed from 'react-typed';
import Acercade from '../../assets/images/imagenes/acercade.png'

const AboutOne = () => {
    return (
        <div className="rwt-about-area rn-section-gap">
            <div className="container">
                <div className="row row--30 align-items-center">
                    <div className="col-lg-5">
                        <div className="thumbnail">
                            <img className="w-100" src={Acercade} alt="About Images" />
                        </div>
                    </div>

                    <div className="col-lg-7 mt_md--40 mt_sm--40">
                        <div className="content">
                            <div className="section-title">
                                <h2 className="title">Unique {" "}
                                    <Typed className="theme-gradient"
                                        strings={[
                                            "Agency.",
                                            "Art.",
                                            "Software.",
                                        ]}
                                        typeSpeed={80}
                                        backSpeed={5}
                                        backDelay={1000}
                                        loop
                                    />
                                </h2>
                                <h4>Generamos contenido de valor, tendencias y creamos la estrategia ideal para que el mensaje de tu marca conecte con clientes potenciales con el fin de alcanzar resultados efectivos.</h4>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default AboutOne
