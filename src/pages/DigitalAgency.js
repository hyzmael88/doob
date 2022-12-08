import React from "react";
import SEO from "../common/SEO";
import { Link } from "react-router-dom";
import HeaderTwo from "../common/header/HeaderTwo";
import FooterThree from "../common/footer/FooterThree";
import AboutOne from "../elements/about/AboutOne";
import TabThree from "../elements/tab/TabThree";
import TimelineTwo from "../elements/timeline/TimelineTwo";
import CalltoActionFive from "../elements/calltoaction/CalltoActionFive";
import { FiArrowRight, FiCheck } from "react-icons/fi";

import Slider from "react-slick";
import { BannerActivation } from "../utils/script";
import Separator from "../elements/separator/Separator";
import ServiceFive from "../elements/service/ServiceFive";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import PortfolioOne from "../elements/portfolio/PortfolioOne";
import CircleProgress from "../elements/progressbar/CircleProgress";
import TestimonialOne from "../elements/testimonial/TestimonialOne";
import BlogList from "../components/blog/itemProp/BlogList";
import BlogClassicData from "../data/blog/BlogList.json";
import Banner from "../assets/images/imagenes/banner1.png"
var BlogListData = BlogClassicData.slice(0, 3);

const BannerData = [
  {
    image: "/images/bg/bg-image-6.jpg",
    title: "Digital Agency.",
    description:
      "We help our clients succeed by creating brand identities, digital experiences, and print materials.",
  },
  {
    image: "/images/bg/bg-image-14.jpg",
    title: "Creative Agency.",
    description:
      "We help our clients succeed by creating brand identities, digital experiences, and print materials.",
  },
  {
    image: "/images/bg/bg-image-15.jpg",
    title: "Startup Agency.",
    description:
      "We help our clients succeed by creating brand identities, digital experiences, and print materials.",
  },
];

const DigitalAgency = () => {
  return (
    <>
      <SEO title="Jaizmora Digital Media" />
      <main className="page-wrapper">
        <HeaderTwo btnStyle="btn-small" HeaderSTyle="header-transparent" />

        {/* Start Slider area  */}
        <div
          className="slider-area slider-style-2 height-950 bg_image"
          data-black-overlay="2"
          style={{
            backgroundImage: `url(${Banner})`,
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner text-left">
                  <h4 className="subtitle">
                    <span className="theme-gradient">
                      SOMOS JAIZMORA
                    </span>
                  </h4>
                  <h1 className="title display-one">LA VOZ DE TU MARCA EN LAS PLATAFORMAS DIGITALES</h1>
                  
                  <div className="button-group mt--40 mt_sm--20">
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Slider area  */}

        {/* Start About Area  */}
        <AboutOne />
        {/* End About Area  */}

        {/* Start Elements Area  */}
        <div className="rwt-tab-area rn-section-gap">
          <div className="container">
            <div className="row mb--40">
              <div className="col-lg-12">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle="Servicios"
                  title="Nuestros Servicios"
                  description=""
                />
              </div>
            </div>
            <TabThree />
          </div>
        </div>
        {/* End Elements Area  */}

        <div className="rwt-timeline-area rn-section-gapBottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <TimelineTwo classVar="no-gradient" />
              </div>
            </div>
          </div>
        </div>

        {/* Start Call To Action Area  */}
        <div className="rwt-callto-action-area rn-section-gapBottom">
          <div className="wrapper">
            <CalltoActionFive />
          </div>
        </div>
        {/* End Call To Action Area  */}
        <FooterThree />
      </main>
    </>
  );
};
export default DigitalAgency;
