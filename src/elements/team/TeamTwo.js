import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import {Link} from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import Pau from "../../assets/images/equipo/fotopau.png"
import Ismael from "../../assets/images/equipo/ismael.png"
import Oscar from "../../assets/images/equipo/oscar.jpeg"
import Martha from "../../assets/images/equipo/martha.jpeg"

import Laura from "../../assets/images/equipo/laura.jpeg"
import Daniel from "../../assets/images/equipo/daniel.jpeg"

const teamData = [
    {
        image: Ismael,
        name: 'Ismael Serrano',
        designation: 'CEO Jaizmora',
        location: 'CDMX, México', 
        description: 'Technology & Analytics',
        socialNetwork: [
            {
                icon: <FiFacebook />,
                url: '#'
            },
            {
                icon: <FiTwitter />,
                url: '#'
            },
            {
                icon: <FiInstagram />,
                url: '#'
            },
        ]
       
    },
    {
        image: Pau,
        name: 'Paulina Mora',
        designation: 'CEO Jaizmora',
        location: 'CDMX, México', 
        description: 'Strategy & Media Development',
        socialNetwork: [
            {
                icon: <FiFacebook />,
                url: '#'
            },
            {
                icon: <FiTwitter />,
                url: '#'
            },
            {
                icon: <FiLinkedin />,
                url: '#'
            },
        ]
      
    },
    {
        image: Oscar,
        name: 'Oscar Sánchez',
        designation: 'Senior Operations Manager',
        location: 'CDMX, México', 
        description: 'Business & Project Management',
        socialNetwork: [
            {
                icon: <FiFacebook />,
                url: '#'
            },
            {
                icon: <FiTwitter />,
                url: '#'
            },
            {
                icon: <FiInstagram />,
                url: '#'
            },
        ]
        
    },
    {
        image: Daniel,
        name: 'Daniel González',
        designation: 'Video Editor',
        location: 'Chihuahua, México', 
        description: 'Social Media Video Editor',
        socialNetwork: [
            {
                icon: <FiFacebook />,
                url: '#'
            },
            {
                icon: <FiTwitter />,
                url: '#'
            },
            {
                icon: <FiInstagram />,
                url: '#'
            },
        ]
        
    },
    {
        image: Laura,
        name: 'Laura Malagón',
        designation: 'Public Relations',
        location: 'CDMX, México', 
        description: '',
        socialNetwork: [
            {
                icon: <FiFacebook />,
                url: '#'
            },
            {
                icon: <FiTwitter />,
                url: '#'
            },
            {
                icon: <FiInstagram />,
                url: '#'
            },
        ]
        
    },
    
]

const TeamTwo = ({column , teamStyle}) => {
    return (
        <div className="row row--15">
            {teamData.map((data, index) => (
                <div className={`${column}`} key={index}>
                    <ScrollAnimation 
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}>
                        <div className={`rn-team ${teamStyle}`}>
                            <div className="inner">
                                <figure className="thumbnail">
                                    <img src={data.image} alt="ano" />
                                </figure>
                                <figcaption className="content">
                                    <h2 className="title">{data.name}</h2>
                                    <h6 className="subtitle theme-gradient">{data.designation}</h6>
                                    <span className="team-form">
                                        <img src="./images/team/location.svg" alt="Corporate React Template" />
                                        <span className="location">{data.location}</span>
                                    </span>
                                    <p className="description">{data.description}</p>

                                    {/* <ul className="social-icon social-default icon-naked mt--20" >
                                        {data.socialNetwork.map((social, index) =>
                                            <li key={index}><a href={`${social.url}`}>{social.icon}</a></li>
                                        )}
                                    </ul> */}
                                </figcaption>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            ))}
        </div>
    )
}

export default TeamTwo;
