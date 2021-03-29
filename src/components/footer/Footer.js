import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import './footer.scss'
import { TransitionLink } from 'gatsby-plugin-transition-link/components/TransitionLink';

const Footer = ({
    customCtaDiv
}) => {

    const { allGraphCmsFooter }= useStaticQuery(
        graphql`
        query FooterQuery {
             
            allGraphCmsFooter {
              edges {
                node {
                footerNavigationLinks {
                     ... on GraphCMS_FooterNavigationLink {
                      id
                      text
                      slug
                    }
                  }
                  contactEmail
                  contactPhone
                  address {
                    html
                  }
                }
              }
            }
          }
        `
    );

    let dataFromCMS = allGraphCmsFooter && allGraphCmsFooter.edges[0].node;

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
                    <div
                        className="ctaDiv__message"
                    >
                        Ready to be L<span style={{color: '#FFFFFF'}}>iii</span>fted?
                    </div>
                    <div
                        className="ctaDiv__buttonsDiv"
                    >
                        <div>
                            <a
                                href={`mailto:${dataFromCMS.contactEmail}`}
                            >
                                Drop us a line
                            </a>
                        </div>
                        <div>
                            <a
                                href={`tel:${dataFromCMS.contactPhone}`}
                            >
                                Give us a call
                            </a>
                        </div>
                    </div>
                </div>
                :
                null
            }
            <div
                className="footer__navDiv"
            >
                <div
                    className="navDiv__linksDiv"
                >
                    <ul>
                        <li>
                            <a
                                href="/sitemap.xml"
                            >
                                Sitemap
                            </a>  
                        </li>
                        <li>
                            <TransitionLink
                                to={`/`}
                            >
                                Home
                            </TransitionLink>  
                        </li>
                        {
                            dataFromCMS.footerNavigationLinks && dataFromCMS.footerNavigationLinks.map(linkObject =>(
                                <li
                                    key={linkObject.id}
                                >
                                    <TransitionLink
                                        to={`/${linkObject.slug}`}
                                    >
                                        {linkObject.text}
                                    </TransitionLink>  
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div
                    className="navDiv__contactDiv"
                >
                    <div>
                        <div>
                            Contact
                        </div>
                        <div>
                            <a
                                href={`mailto:${dataFromCMS.contactEmail}`}
                            >
                                {dataFromCMS.contactEmail}
                            </a>
                        </div>
                    </div>
                    <div>
                        <a
                            href={`tel:${dataFromCMS.contactPhone}`}
                        >
                            {dataFromCMS.contactPhone}
                        </a>
                    </div>
                    <div
                        dangerouslySetInnerHTML={{__html: dataFromCMS.address.html ? dataFromCMS.address.html : '' }}
                    />
                </div>
                <div
                    className="navDiv__subscribeDiv"
                >
                    <div id="mc_embed_signup" >
                        <form  
                            action="https://wearemagma.us1.list-manage.com/subscribe/post?u=ad5822ab3cbf6ed56f3009e21&amp;id=ed72e151ed" 
                            method="post" 
                            id="mc-embedded-subscribe-form" 
                            name="mc-embedded-subscribe-form" 
                            target="_blank" 
                            className="contactForm"
                            noValidate
                        >
                            <div id="mc_embed_signup_scroll" className="contactForm">
                            <input 
                                type="email" 
                                value="" 
                                name="EMAIL" 
                                className="contactForm_emailInput" 
                                id="mce-EMAIL" 
                                placeholder="Email address" 
                                required 
                            />
                            {/* honeypot */}
                            <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_ad5822ab3cbf6ed56f3009e21_ed72e151ed" tabIndex="-1" value="" /></div>
                            <div className="clear">
                                <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="contactForm_submitInput"/>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div
                className="footer__bottomDecoration"
            >

            </div>
        </footer>
    );
}

export default Footer;