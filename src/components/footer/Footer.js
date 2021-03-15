import React from 'react';

import './footer.scss'

const Footer = ({
    customCtaDiv
}) => {

    return (
        <footer
            className="footer"
        >
            {
                !customCtaDiv
                ?
                <div
                    className="footer__ctaDiv"
                >

                </div>
                :
                null
            }
            <div
                className="footer__navDiv"
            >

            </div>
            <div
                className="footer__bottomDecoration"
            >

            </div>
        </footer>
    );
}

export default Footer;