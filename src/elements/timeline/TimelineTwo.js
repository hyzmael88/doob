import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";

const TimelineData = [
    {
        id: "1",
        title: "Conocemos",
        description: "Identificamos tus necesidades, para entenderlas y así poder resolverlas",
    },
    {
        id: "2",
        title: "Planteamos",
        description: "Investigamos y brindamos soluciones de valor para tu marca",
    },
    {
        id: "3",
        title: "Producimos",
        description: "Elaboramos y recopilamos el material para dar pie a la estrategia",
    },
    {
        id: "4",
        title: "Ejecutamos",
        description: "Ponemos en marcha la estrategia en distintos medios y monitoreamos el alcance",
    },
]

const TimelineTwo = ({classVar}) => {
    return (
        <div className="timeline-style-two bg-color-blackest">
            <div className="row row--0">
                {/* Start Single Progress */}
                {TimelineData.map((data , index) =>(
                    <div className={`col-lg-3 col-md-3 rn-timeline-single ${classVar}`} key={index}>
                        <div className="rn-timeline">
                            <ScrollAnimation 
                            animateIn="fadeInUp"
                            animateOut="fadeInOut"
                            animateOnce={true}>
                                <h6 className="title">{data.title}</h6>
                            </ScrollAnimation>
                            <div className="progress-line">
                                <div className="line-inner"></div>
                            </div>
                            <div className="progress-dot">
                                <div className="dot-level">
                                    <div className="dot-inner"></div>
                                </div>
                            </div>
                            <ScrollAnimation 
                            animateIn="fadeInUp"
                            animateOut="fadeInOut"
                            animateOnce={true}>
                                <p className="description">{data.description}</p>
                            </ScrollAnimation>
                        </div>
                    </div>
                ))}
                {/* End Single Progress */}
            </div>
        </div>
    )
}
export default TimelineTwo;