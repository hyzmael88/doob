import React from "react";
import SEO from "../common/SEO";
import HeaderTopNews from "../common/header/HeaderTopNews";
import HeaderTwo from "../common/header/HeaderTwo";
import FooterThree from "../common/footer/FooterThree";
import BrandThree from "../elements/brand/BrandThree";
import AboutFour from "../elements/about/AboutFour";
import ServiceOne from "../elements/service/ServiceOne";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import CounterUpFour from "../elements/counterup/CounterUpFour";
import TeamFour from "../elements/team/TeamFour";
import TimelineTwo from "../elements/timeline/TimelineTwo";
import Separator from "../elements/separator/Separator";


import AboutOne2 from "../elements/about/AboutOne2";
import BrandOne from "../elements/brand/BrandOne";
import Mission from "../elements/about/Mission";
import TeamTwo from '../elements/team/TeamTwo';





const AboutUs = () => {
  return (
    <>
      <SEO title="Acerca" />
      <main className="page-wrapper">
        <HeaderTwo btnStyle="btn-small" HeaderSTyle="header-transparent" />
       
        <Separator />

        {/* Start About Area  */}
        <AboutOne2 />
        {/* End About Area  */}

        {/* Start Brand Area  */}
        <div className="rwt-brand-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Clientes"
                                        title = "Conóce a algunos de nuestros clientes:"
                                        description = ""
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 mt--40">
                                    <BrandOne brandStyle="brand-style-1" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Brand Area  */}

                    {/* Start Mission Area   */}
                <Mission />                    
                {/* Start Mission Area  */}

                {/* Start Team Area  */}
                <div className="rwt-team-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Expertos"
                                        title = "Conoce a nuestros expertos"
                                        description = "We provide company and finance service for <br /> startups and company business."
                                    />
                            </div>
                        </div>
                        <TeamTwo column="col-lg-4 col-md-6 col-12" teamStyle="team-style-default style-two" />
                    </div>
                </div>
                {/* End Team Area  */}
                <Separator /> 

                 {/* Start Brand Area  */}
        {/* <div className="rwt-brand-area pb--60 pt--30">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 mt--10">
                <BrandThree brandStyle="brand-style-2" />
              </div>
            </div>
          </div>
        </div> */}
        {/* End Brand Area  */}
               


        <FooterThree />
      </main>
    </>
  );
};

export default AboutUs;
