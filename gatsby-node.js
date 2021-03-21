const path = require(`path`);

exports.createPages = async ({ graphql, actions: { createPage } }) => {
    const { data } = await graphql(`
      {
        customPages: allGraphCmsCustomPage {
            nodes {
                id
                slug
            }
        }
        caseStudies: allGraphCmsCaseStudy {
            nodes {
                id
                slug
            }
        }
        blogPosts: allGraphCmsBlogPost {
            nodes {
                id
                slug
            }
        }
        liiiftMyBusinessPages: allGraphCmsLiiiftMyBusinessPage {
            nodes {
                id
                slug
            }
        }
        liiiftMyselfPages: allGraphCmsLiiiftMyselfPage {
            nodes {
                id
                slug
            }
        }
      }
    `);

    data.customPages && data.customPages.nodes && data.customPages.nodes.forEach(({ id, slug }) => {
        createPage({
            path: `/${slug}`,
            component: path.resolve(`./src/templates/custom-page.js`),
            context: {
                id
            }
        })
    });

    data.caseStudies && data.caseStudies.nodes && data.caseStudies.nodes.forEach(({ id, slug }) => {
        createPage({
            path: `/our-people/${slug}`,
            component: path.resolve(`./src/templates/case-study-page.js`),
            context: {
                id
            }
        })
    });

    data.blogPosts && data.blogPosts.nodes && data.blogPosts.nodes.forEach(({ id, slug }) => {
        createPage({
            path: `/blog/${slug}`,
            component: path.resolve(`./src/templates/blog-post-page.js`),
            context: {
                id
            }
        });
    });

    data.liiiftMyBusinessPages && data.liiiftMyBusinessPages.nodes && data.liiiftMyBusinessPages.nodes.forEach(({ id, slug }) => {
        createPage({
            path: `/liiift-my-business/${slug}`,
            component: path.resolve(`./src/templates/liiift-my-business-page.js`),
            context: {
                id
            }
        })
    });

    data.liiiftMyselfPages && data.liiiftMyselfPages.nodes && data.liiiftMyselfPages.nodes.forEach(({ id, slug }) => {
        createPage({
            path: `/liiift-myself/${slug}`,
            component: path.resolve(`./src/templates/liiift-myself-page.js`),
            context: {
                id
            }
        })
    });

};