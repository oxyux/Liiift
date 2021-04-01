import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import './footer.scss'
import { TransitionLink } from 'gatsby-plugin-transition-link/components/TransitionLink';

import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
    const [state, handleSubmit] = useForm("placeholder");
    if (state.succeeded) {
        return (
            <div
                className="successDiv"
            >
                Thank you!
            </div>
        );
    }
    return (
        <form 
            onSubmit={handleSubmit}
            className="contactForm"
        >
          <input
            id="email"
            type="email" 
            name="email"
            placeholder="Email address"
            className="contactForm_emailInput" 
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
          <button 
            className="contactForm_submitInput"
            type="submit" 
            disabled={state.submitting}
          >
            Submit
          </button>
        </form>
    );
  }

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
{/*                 <div
                    className="navDiv__subscribeDiv"
                >
                    <ContactForm />
                </div> */}
            </div>
            <div
                className="footer__bottomDecoration"
            >

            </div>
        </footer>
    );
}

export default Footer;