import React from 'react';
import Typed from 'react-typed';
import {Link} from "react-router-dom";
import Mision from '../../assets/images/vision.png'

import { FiArrowRight } from "react-icons/fi";
import AccordionOne from '../accordion/AccordionOne';

const mission = () => {
    return (
        <div className="rn-company-mission-are rn-section-gap">
            <div className="container">
                <div className="row row--30">
                    <div className="col-lg-6">
                        <div className="mission-title">
                            <h2 className="title">Unique {""}
                                <Typed className="theme-gradient"
                                    strings={[
                                        "Mission.",
                                        "Vision.",
                                        "Agency.",
                                    ]}
                                    typeSpeed={80}
                                    backSpeed={5}
                                    backDelay={1000}
                                    loop
                                />
                            </h2>
                            <p>No buscamos generar transacciones, sino buscamos alcanzar una RELACIÓN de equipo con nuestros clientes. No vendemos productos, vendemos ideas y emociones basadas en las marcas.</p>

                            <p>Nuestra meta es marcar tendencia y posicionarnos en lo alto de la industria digital, así como convertirnos en el equipo de marketing de tu marca.
</p>

                            <div className="read-more-btn mt--50">
                                <Link className="btn-default btn-icon" to="/contact">Contáctanos <i className="icon"><FiArrowRight /></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mt_md--30 mt_sm--30">
                    <div className="thumbnail">
                            <img className="w-100" src={Mision} alt="About Images" />
                        </div>
                    </div>
                </div>
            </div>                        
        </div>
    )
}
export default mission;
