import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {Link} from "react-router-dom";
import Disenodigital from '../../assets/images/imagenes/diseno-digital.png'
import Impreso from '../../assets/images/imagenes/impreso2.png'
import Branding from '../../assets/images/imagenes/branding10.png'
import Community from '../../assets/images/imagenes/community.png'
import Content from '../../assets/images/imagenes/content1.png'
import Fotografia from '../../assets/images/imagenes/fotografia.png'
import Edicion from '../../assets/images/imagenes/edicion.png'

import Sitioweb from '../../assets/images/imagenes/web.png'
import Chatbot from '../../assets/images/imagenes/chatbot.png'
import Apps from '../../assets/images/imagenes/apps.png'
import Consultoria from '../../assets/images/imagenes/consultoria-software.png'
import Software from '../../assets/images/imagenes/software.png'
import Cableado from '../../assets/images/imagenes/cableado.png'



const dataList = [
    {
        image: Disenodigital,
        title: 'Diseño Digital',
        description: 'Elaboración de material para social media, sitios web y publicidad digital.'
    },
    {
        image: Impreso,
        title: 'Diseño Impreso',
        description: 'Flyers, espectaculares, anuncios en medios impresos,etc.'
    },
    {
        image: Branding, 
        title: 'Branding',
        description: 'Imagen e identidad de marca'
    }
]

const dataList2 = [
    {
        image: Community,
        title: 'Community Management',
        description: 'Atención a comunidad en redes sociales'
    },
    {
        image: Content,
        title: 'Content Creator',
        description: 'Elaboración de contenido original basado en el mensaje e identidad de la marca'
    }
]

const dataList3 = [
    // {
    //     image: '/images/service/serviice-03.jpg',
    //     title: 'App Development',
    //     description: 'There are many variations variats  of passages of Lorem Ipsum available.'
    // },
    {
        image: Fotografia,
        title: 'Fotografía y video',
        description: 'Levantamiento de imagen en locación. De tipo Retrato o Producto.'
    },
    {
        image: Edicion,
        title: 'Edición de fotografía y video',
        description: 'Edición del material recopilado acorde al branding de la empresa.'
    }
]
const dataList4 = [
    {
        image: Sitioweb,
        title: 'Sitio web',
        description: 'Arquitectura del sitio web desde el frontend hasta el backend, sitios responsive, Blogs, E-commerce, CMS, etc.'
    },
    {
        image: Chatbot,
        title: 'Chatbot',
        description: 'Desarrollo de Chatbot, funcional 24/7 para atender pedidos o preguntas'
    },
    {
        image: Apps,
        title: 'Aplicaciones móviles y aplicaciones web',
        description: 'Desarrollo de aplicaciones moviles o aplicaciones web acorde a las necesidades de la empresa.'
    }
]

const dataList5 = [
    {
        image: Consultoria,
        title: 'Consultoría de software',
        description: 'Diseño de solución en implementación, optimización de operaciones y soluciones, migración de soluciones'
    },
    {
        image: Software,
        title: 'Diseño de software a la medida',
        description: 'Desarrollo y mantenimiento de cualquier tecnología necesaria para tu empresa'
    }
]
const dataList6 = [
    {
        image: Cableado,
        title: 'Cableado estructurado',
        description: 'Voz y Datos, Video vigilancia, etc.'
    },
]

const TabThree = () => {
    return (
        <div>
            <div className="row">
                    <div className="col-lg-12">
                        <Tabs>
                            <div className="row row--30 align-items-center">
                                <div className="col-lg-12">
                                    <div className="rn-default-tab style-three">
                                        <div className="tab-button-panel">
                                            <TabList className="tab-button">
                                                <Tab>
                                                    <div className="rn-tab-button">
                                                        <button>Design</button>
                                                    </div>   
                                                </Tab>
                                                <Tab>
                                                    <div className="rn-tab-button">
                                                        <button>Social Media</button>
                                                    </div>   
                                                </Tab>
                                                <Tab>
                                                    <div className="rn-tab-button">
                                                        <button>Fotografía y Video</button>
                                                    </div>   
                                                </Tab>
                                                <Tab>
                                                    <div className="rn-tab-button">
                                                        <button>Web</button>
                                                    </div>   
                                                </Tab>
                                                <Tab>
                                                    <div className="rn-tab-button">
                                                        <button>Software</button>
                                                    </div>   
                                                </Tab>
                                                <Tab>
                                                    <div className="rn-tab-button">
                                                        <button>Telecomunicaciones</button>
                                                    </div>   
                                                </Tab>
                                            </TabList>
                                        </div>

                                        <div className="tab-content-panel">
                                        <TabPanel>
                                                <div className="rn-tab-content">
                                                    <div className="inner">
                                                        <div className="row align-items-center row--30">
                                                            <div className="col-lg-12">
                                                                <div className="row row--15 mt_dec--30 service-wrapper">
                                                                    {dataList.map( (val , i) => (
                                                                        <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                                                                            <div className="card-box card-style-1 text-left">
                                                                                <div className="inner">
                                                                                    <div className="image">
                                                                                        <Link to="#service">
                                                                                            <img src={`${val.image}`} alt="card Images" />
                                                                                        </Link>
                                                                                    </div>
                                                                                    <div className="content">
                                                                                        <h4 className="title mb--20"><Link to="#service" dangerouslySetInnerHTML={{__html: val.title}}></Link></h4>
                                                                                        <p className="description b1 color-gray mb--0" dangerouslySetInnerHTML={{__html: val.description}}></p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </TabPanel>
                                            
                                            <TabPanel>
                                                <div className="rn-tab-content">
                                                    <div className="inner">
                                                        <div className="row align-items-center row--30">
                                                            <div className="col-lg-12">
                                                                <div className="row row--15 mt_dec--30 service-wrapper">
                                                                    {dataList2.map( (val , i) => (
                                                                        <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                                                                            <div className="card-box card-style-1 text-left">
                                                                                <div className="inner">
                                                                                    <div className="image">
                                                                                        <Link to="#service">
                                                                                            <img src={`${val.image}`} alt="card Images" />
                                                                                        </Link>
                                                                                    </div>
                                                                                    <div className="content">
                                                                                        <h4 className="title mb--20"><Link to="#service" dangerouslySetInnerHTML={{__html: val.title}}></Link></h4>
                                                                                        <p className="description b1 color-gray mb--0" dangerouslySetInnerHTML={{__html: val.description}}></p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </TabPanel>

                                            <TabPanel>
                                                <div className="rn-tab-content">
                                                    <div className="inner">
                                                        <div className="row align-items-center row--30">
                                                            <div className="col-lg-12">
                                                                <div className="row row--15 mt_dec--30 service-wrapper">
                                                                    {dataList3.map( (val , i) => (
                                                                        <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                                                                            <div className="card-box card-style-1 text-left">
                                                                                <div className="inner">
                                                                                    <div className="image">
                                                                                        <Link to="#service">
                                                                                            <img src={`${val.image}`} alt="card Images" />
                                                                                        </Link>
                                                                                    </div>
                                                                                    <div className="content">
                                                                                        <h4 className="title mb--20"><Link to="#service" dangerouslySetInnerHTML={{__html: val.title}}></Link></h4>
                                                                                        <p className="description b1 color-gray mb--0" dangerouslySetInnerHTML={{__html: val.description}}></p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </TabPanel>

                                            <TabPanel>
                                                <div className="rn-tab-content">
                                                    <div className="inner">
                                                        <div className="row align-items-center row--30">
                                                            <div className="col-lg-12">
                                                                <div className="row row--15 mt_dec--30 service-wrapper">
                                                                    {dataList4.map( (val , i) => (
                                                                        <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                                                                            <div className="card-box card-style-1 text-left">
                                                                                <div className="inner">
                                                                                    <div className="image">
                                                                                        <Link to="#service">
                                                                                            <img src={`${val.image}`} alt="card Images" />
                                                                                        </Link>
                                                                                    </div>
                                                                                    <div className="content">
                                                                                        <h4 className="title mb--20"><Link to="#service" dangerouslySetInnerHTML={{__html: val.title}}></Link></h4>
                                                                                        <p className="description b1 color-gray mb--0" dangerouslySetInnerHTML={{__html: val.description}}></p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </TabPanel>
                                            <TabPanel>
                                                <div className="rn-tab-content">
                                                    <div className="inner">
                                                        <div className="row align-items-center row--30">
                                                            <div className="col-lg-12">
                                                                <div className="row row--15 mt_dec--30 service-wrapper">
                                                                    {dataList5.map( (val , i) => (
                                                                        <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                                                                            <div className="card-box card-style-1 text-left">
                                                                                <div className="inner">
                                                                                    <div className="image">
                                                                                        <Link to="#service">
                                                                                            <img src={`${val.image}`} alt="card Images" />
                                                                                        </Link>
                                                                                    </div>
                                                                                    <div className="content">
                                                                                        <h4 className="title mb--20"><Link to="#service" dangerouslySetInnerHTML={{__html: val.title}}></Link></h4>
                                                                                        <p className="description b1 color-gray mb--0" dangerouslySetInnerHTML={{__html: val.description}}></p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </TabPanel>
                                            <TabPanel>
                                                <div className="rn-tab-content">
                                                    <div className="inner">
                                                        <div className="row align-items-center row--30">
                                                            <div className="col-lg-12">
                                                                <div className="row row--15 mt_dec--30 service-wrapper">
                                                                    {dataList6.map( (val , i) => (
                                                                        <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                                                                            <div className="card-box card-style-1 text-left">
                                                                                <div className="inner">
                                                                                    <div className="image">
                                                                                        <Link to="#service">
                                                                                            <img src={`${val.image}`} alt="card Images" />
                                                                                        </Link>
                                                                                    </div>
                                                                                    <div className="content">
                                                                                        <h4 className="title mb--20"><Link to="#service" dangerouslySetInnerHTML={{__html: val.title}}></Link></h4>
                                                                                        <p className="description b1 color-gray mb--0" dangerouslySetInnerHTML={{__html: val.description}}></p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </TabPanel>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tabs>
                    </div>
                </div>
        </div>
    )
}

export default TabThree
