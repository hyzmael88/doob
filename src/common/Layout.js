import React from 'react';
import HeaderTwo from "./header/HeaderTwo";
import HeaderTopNews from "./header/HeaderTopNews";
import FooterThree from "./footer/FooterThree";
import Copyright from "./footer/Copyright";

const Layout = ({children}) => {
    return (
        <>
            <main className="page-wrapper">
               
                <HeaderTwo btnStyle="btn-small round btn-icon" HeaderSTyle="header-not-transparent" />
                {children}
                <FooterThree />
                {/* <Copyright /> */}
            </main>
        </>
    )
}
export default Layout;
