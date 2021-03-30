import React, { useState } from 'react'
import { Link } from 'gatsby'

import { graphql, useStaticQuery } from 'gatsby'

import TransitionLink from 'gatsby-plugin-transition-link';

import './topnav.scss';

const TopnavDesktopLinkWithDropdown = ({
  mainLinkURL,
  mainLinkText,
  links
}) => {
  const [ isOpen, setIsOpen ] = useState(false);

  return (
    <div
      style={{
        width: 'fit-content',
        height: '100%',
        display: 'flex',
        alignItems: 'center'
      }}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <TransitionLink
        to={mainLinkURL}
        style={{
          marginRight: '16px'
        }}
        exit={{
          length: 0.4,
          state: { x: typeof window !== 'undefined' ? -window.innerWidth : 0, opacity: 0 }
        }}
        entry={{
          delay: 0.6,
          state: { x: typeof window !== 'undefined' ? window.innerWidth : 0 }
        }}
      >
        {mainLinkText}
      </TransitionLink>
      {
        links && links.length > 0
        ?
        <div
          className={`topnavDropdown ${isOpen ? 'topnavDropdown--open' : 'topnavDropdown--closed'}`}
        >
          {
            links.map(link =>(
              <TransitionLink
                key={link.slug}
                to={`${mainLinkURL}${link.slug}`}
                style={{
                  marginRight: '16px'
                }}
                exit={{
                  length: 0.4,
                  state: { x: typeof window !== 'undefined' ? -window.innerWidth : 0, opacity: 0 }
                }}
                entry={{
                  delay: 0.6,
                  state: { x: typeof window !== 'undefined' ? window.innerWidth : 0 }
                }}
              >
                {link.title}
              </TransitionLink>
            ))
          }
        </div>
        :
        null
      }
    </div>
  );
}

const TopnavMobileSublinksSection = ({
  mainLinkURL,
  links,
  handleCloseTopnav
}) => {

  return (
    <div
      className={`topnavMobile__sublinksDiv`}
    >
      {
        links.map(link =>(
          <TransitionLink
            key={link.slug}
            to={`${mainLinkURL}${link.slug}`}
            style={{
              marginRight: '16px'
            }}
            exit={{
              length: 0.4,
              state: { x: typeof window !== 'undefined' ? -window.innerWidth : 0, opacity: 0 }
            }}
            entry={{
              delay: 0.6,
              state: { x: typeof window !== 'undefined' ? window.innerWidth : 0 }
            }}
            onClick={() => handleCloseTopnav()}
          >
            {link.title}
          </TransitionLink>
        ))
      }
    </div>
  );
}

const Topnav = ({
    isOpen,
    handleCloseTopnav
}) => {

    const { 
        liiiftMyBusinessPages,
        liiiftMyselfPages,
        caseStudies,
        topNavLinks
    } = useStaticQuery(
        graphql`
        query TopnavQuery {
            liiiftMyBusinessPages: allGraphCmsLiiiftMyBusinessPage {
                nodes {
                    slug
                    title
                }
            }
            liiiftMyselfPages: allGraphCmsLiiiftMyselfPage {
                nodes {
                    slug
                    title
                }
            }
            caseStudies: allGraphCmsCaseStudy {
              nodes {
                  slug
                  lDeviceTitle
              }
            }
            topNavLinks: allGraphCmsTopNavigationLink {
              nodes {
                slug
                text
              }
          }
        }
        `
    );

    return (
        <>
        <nav
            className={`topnavDesktop ${isOpen ? 'topnavDesktop--open' : 'topnavDesktop--closed'}`}
        >
            <TransitionLink
              to="/"
              style={{
                marginRight: '16px'
              }}
              exit={{
                length: 0.4,
                state: { opacity: 0 }
              }}
              entry={{
                delay: 0.6,
                state: { opacity: 1 }
              }}
            >
              HOME
            </TransitionLink>
            <TopnavDesktopLinkWithDropdown
              mainLinkURL="/liiift-my-business/"
              mainLinkText="LIIIFT MY BUSINESS"
              links={liiiftMyBusinessPages.nodes}
            />
            <TopnavDesktopLinkWithDropdown
              mainLinkURL="/liiift-myself/"
              mainLinkText="LIIIFT MYSELF"
              links={liiiftMyselfPages.nodes}
            />
            <TransitionLink
              to="/our-people/"
              style={{
                marginRight: '16px'
              }}
              exit={{
                length: 0.4,
                state: { x: typeof window !== 'undefined' ? -window.innerWidth : 0, opacity: 0 }
              }}
              entry={{
                delay: 0.6,
                state: { x: typeof window !== 'undefined' ? window.innerWidth : 0 }
              }}
            >
              OUR PEOPLE
            </TransitionLink>
            <TransitionLink
              to="/three-i-s/"
              style={{
                marginRight: '16px'
              }}
              exit={{
                length: 0.4,
                state: { x: typeof window !== 'undefined' ? -window.innerWidth : 0, opacity: 0 }
              }}
              entry={{
                delay: 0.6,
                state: { x: typeof window !== 'undefined' ? window.innerWidth : 0 }
              }}
            >
              THE 3 I ’S
            </TransitionLink>
            {
              topNavLinks && topNavLinks.nodes.map(node => (
                <TransitionLink
                  to={`/${node.slug}/`}
                  style={{
                    marginRight: '16px'
                  }}
                  exit={{
                    length: 0.4,
                    state: { x: typeof window !== 'undefined' ? -window.innerWidth : 0, opacity: 0 }
                  }}
                  entry={{
                    delay: 0.6,
                    state: { x: typeof window !== 'undefined' ? window.innerWidth : 0 }
                  }}
                >
                  {node.text.toUpperCase()}
                </TransitionLink>
              ))
            }
        </nav>
        <nav
            className={`topnavMobile ${isOpen ? 'topnavMobile--open' : 'topnavMobile--closed'}`}
        >
            <div
            className="logoDiv"
            >
            <svg version="1.1" viewBox="0 0 1300 565.35" xmlns="http://www.w3.org/2000/svg">
                <g data-name="Layer 2">
                <g data-name="Layer 1">
                <g className="cls-2" transform="translate(-520)" clipPath="url(#clipPath)" fill="#ffa6ab">
                    <path className="cls-3" d="m1113.1 0c28.55 0 50.82 20 50.82 49.1s-22.27 49.11-50.82 49.11-50.81-20-50.81-49.11 22.26-49.1 50.81-49.1"/>
                    <path className="cls-3" d="m823.89 0c28.55 0 50.82 20 50.82 49.1s-22.27 49.11-50.82 49.11-50.81-20-50.81-49.11 22.27-49.1 50.81-49.1"/>
                </g>
                <path d="m253.08 165.26h101.63v266.91h-101.63z" fill="#ffa6ab"/>
                <g className="cls-2" transform="translate(-520)" clipPath="url(#clipPath)">
                    <path className="cls-3" d="m968.31 0c28.55 0 50.82 20 50.82 49.1s-22.27 49.11-50.82 49.11-50.82-20-50.82-49.11 22.27-49.1 50.82-49.1" fill="#ffa6ab"/>
                </g>
                <path d="m397.85 165.26h101.64v266.91h-101.64z" fill="#ffa6ab"/>
                <path d="m542.98 165.26h101.64v266.91h-101.64z" fill="#ffa6ab"/>
                <path d="m5.0455 41.04v524.31h639.57v-96.8h-533.1v-427.51z" fill="#00384A"/>
                <g className="cls-2" transform="translate(-520)" clipPath="url(#clipPath)" fill="#00384A">
                    <path className="cls-4" d="m1820.5 247.53v-82.27h-109.7v-124.26h-101.63v124.26h-204.89v-58.08c0-16.13 8.07-24.2 22.59-24.2h69.37v-82.27h-104.86c-53.24 0-88.73 35.49-88.73 90.34v74.21h-101.62v82.27h101.64v317.82h101.63v-317.82h204.89v227.47c0 54.85 35.49 90.35 88.73 90.35h112.91v-82.28h-77.44c-14.52 0-22.59-8.07-22.59-24.2v-211.34z" fill="#00384A"/>
                </g>
                </g>
                </g>
            </svg>
            </div>
            <div
              className={`topnavMobile__contentContainer`}
            >
              <TransitionLink
                to="/"
                style={{
                  marginRight: '16px'
                }}
                exit={{
                  length: 0.4,
                  state: { x: typeof window !== 'undefined' ? -window.innerWidth : 0, opacity: 0 }
                }}
                entry={{
                  delay: 0.6,
                  state: { x: typeof window !== 'undefined' ? window.innerWidth : 0 }
                }}
                className="topnavMobile__link"
                onClick={() => handleCloseTopnav()}
              >
                HOME
              </TransitionLink>
              <TransitionLink
                to="/liiift-my-business/"
                style={{
                  marginRight: '16px'
                }}
                exit={{
                  length: 0.4,
                  state: { x: typeof window !== 'undefined' ? -window.innerWidth : 0, opacity: 0 }
                }}
                entry={{
                  delay: 0.6,
                  state: { x: typeof window !== 'undefined' ? window.innerWidth : 0 }
                }}
                className="topnavMobile__link"
                onClick={() => handleCloseTopnav()}
              >
                LIIIFT MY BUSINESS
              </TransitionLink>
              {
                liiiftMyBusinessPages && liiiftMyBusinessPages.nodes.length > 0 
                ?
                <TopnavMobileSublinksSection 
                  mainLinkURL="/liiift-my-business/"
                  links={liiiftMyBusinessPages.nodes}
                  handleCloseTopnav={handleCloseTopnav}
                />
                :
                null
              }
              <TransitionLink
                to="/liiift-myself/"
                style={{
                  marginRight: '16px'
                }}
                exit={{
                  length: 0.4,
                  state: { x: typeof window !== 'undefined' ? -window.innerWidth : 0, opacity: 0 }
                }}
                entry={{
                  delay: 0.6,
                  state: { x: typeof window !== 'undefined' ? window.innerWidth : 0 }
                }}
                className="topnavMobile__link"
                onClick={() => handleCloseTopnav()}
              >
                LIIIFT MYSELF
              </TransitionLink>        
              {
                liiiftMyselfPages && liiiftMyselfPages.nodes.length > 0 
                ?
                <TopnavMobileSublinksSection 
                  mainLinkURL="/liiift-myself/"
                  links={liiiftMyselfPages.nodes}
                  handleCloseTopnav={handleCloseTopnav}
                />
                :
                null
              }      
              <TransitionLink
                to="/our-people/"
                style={{
                  marginRight: '16px'
                }}
                exit={{
                  length: 0.4,
                  state: { x: typeof window !== 'undefined' ? -window.innerWidth : 0, opacity: 0 }
                }}
                entry={{
                  delay: 0.6,
                  state: { x: typeof window !== 'undefined' ? window.innerWidth : 0 }
                }}
                className="topnavMobile__link"
                onClick={() => handleCloseTopnav()}
              >
                OUR PEOPLE
              </TransitionLink>
              <TransitionLink
                to="/three-i-s/"
                style={{
                  marginRight: '16px'
                }}
                exit={{
                  length: 0.4,
                  state: { x: typeof window !== 'undefined' ? -window.innerWidth : 0, opacity: 0 }
                }}
                entry={{
                  delay: 0.6,
                  state: { x: typeof window !== 'undefined' ? window.innerWidth : 0 }
                }}
                className="topnavMobile__link"
                onClick={() => handleCloseTopnav()}
              >
                THE 3 I ’S
              </TransitionLink>
              {
                topNavLinks && topNavLinks.nodes.map(node => (
                  <TransitionLink
                    to={`/${node.slug}/`}
                    style={{
                      marginRight: '16px'
                    }}
                    exit={{
                      length: 0.4,
                      state: { x: typeof window !== 'undefined' ? -window.innerWidth : 0, opacity: 0 }
                    }}
                    entry={{
                      delay: 0.6,
                      state: { x: typeof window !== 'undefined' ? window.innerWidth : 0 }
                    }}
                    className="topnavMobile__link"
                    onClick={() => handleCloseTopnav()}
                  >
                    {node.text.toUpperCase()}
                  </TransitionLink>

                ))
              }
            </div>
        </nav>
        </>
    );
}

export default Topnav;