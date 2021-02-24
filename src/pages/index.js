import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headData;

  const data = useStaticQuery(
    graphql`
      query metaImgQuery {
        images: allFile(filter: { relativePath: { eq: "portfolio_cover.png" } }) {
          edges {
            node {
              childImageSharp {
                fixed(width: 350) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    `
  );

  const imageUrl = `https://yuwen-portfolio.netlify.app/${data.images.edges[0].node.childImageSharp.fixed.src}`;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Gatsby Simplefolio'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Gatsby Simplefolio'} />
        <meta property="og:image" content={imageUrl} />
      </Helmet>
      <App />
    </>
  );
};
