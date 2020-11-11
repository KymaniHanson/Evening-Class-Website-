import React from 'react';

import './Footer.css';


function Footer() {
    

    return (
        <section className="footerSection">
            <div className="footerContainer">
                <div className="detailsLinksContacts">
                    <big>Address & Contact<br/></big>
                    <span>
                        3-7 Duke Street <br/> Kingston <br/> Jamaica W.I. <br/> Tel: (000) 000-0000
                    </span>
                </div>
                <div className="detailsLinksContacts">
                    <big>Useful Links</big>
                    <ul className="usefulLinks">
                        <li>Home</li>
                        <li>Courses</li>
                        <li>Blogs & News</li>
                        <li>About</li>
                    </ul>
                </div>
                <div className="detailsLinksContacts">
                    <big>Connect with us <br/></big>
                    <img src={process.env.PUBLIC_URL + 'assets/facebook.svg'} alt="facebook"/>
                    <img src={process.env.PUBLIC_URL + 'assets/twitter.svg'} alt="twitter"/>
                    <img src={process.env.PUBLIC_URL + 'assets/instagram.svg'} alt="instagram"/>
                </div>
            </div>
        </section>
    )
}

export default Footer;
