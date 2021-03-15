const path = require(`path`);

exports.createPages = async ({ graphql, actions: { createPage } }) => {
    const {
        data: { 
            caseStudies,
            blogPosts,
            liiiftMyBusinessPages,
            liiiftMyselfPages
        },
    } = await graphql(`
      {
        caseStudies: allGraphCmsCaseStudy {
            nodes {
                body {
                    html
                }
                id
                header
                slug
                lDeviceTitle
                lDeviceImage {
                    url
                    fileName
                }
            }
        }
        blogPosts: allGraphCmsBlogPost {
            nodes {
                type
                title
                slug
                id
                headerImage {
                    url
                    fileName
                }
                previewText
                publicationDate
                body {
                    html
                }
            }
        }
        liiiftMyBusinessPages: allGraphCmsLiiiftMyBusinessPage {
            nodes {
                body
                id
                slug
                header
                lDeviceTitle
                lDeviceImage {
                    fileName
                    url
                }
            }
        }
        liiiftMyselfPages: allGraphCmsLiiiftMyselfPage {
            nodes {
                body
                id
                slug
                header
                lDeviceTitle
                lDeviceImage {
                    fileName
                    url
                }
            }
        }
      }
    `);

    caseStudies.nodes.forEach(({ id, slug }) => {
        createPage({
            path: `/our-people/${slug}`,
            component: path.resolve(`./src/templates/case-study-page.js`),
            context: {
                id
            }
        })
    });

    blogPosts.nodes.forEach(({ id, slug, type }) => {
        if (type === 'post') {
            createPage({
                path: `/blog/${slug}`,
                component: path.resolve(`./src/templates/blog-post-page.js`),
                context: {
                    id
                }
            })
        }
    });

    liiiftMyBusinessPages.nodes.forEach(({ id, slug }) => {
        createPage({
            path: `/liiift-my-business/${slug}`,
            component: path.resolve(`./src/templates/liiift-my-business-page.js`),
            context: {
                id
            }
        })
    });

    liiiftMyselfPages.nodes.forEach(({ id, slug }) => {
        createPage({
            path: `/liiift-myself/${slug}`,
            component: path.resolve(`./src/templates/liiift-myself-page.js`),
            context: {
                id
            }
        })
    });

};