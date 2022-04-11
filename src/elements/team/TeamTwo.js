import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import {Link} from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const teamData = [
    {
        image: 'team-01',
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
        image: 'team-02',
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
        image: 'team-03',
        name: 'Martha Santos',
        designation: 'Senior Designer',
        location: 'CDMX, México', 
        description: 'Social Media Designer',
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
        image: 'team-04',
        name: 'Óscar Sanchez',
        designation: 'Agency Operations Manager',
        location: 'CDMX, México', 
        description: 'Cybernetics engineer',
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
        image: 'team-04',
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
                                    <img src={`./images/team/${data.image}.jpg`} alt="Corporate React Template" />
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
