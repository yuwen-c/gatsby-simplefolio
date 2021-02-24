import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

const metaImgUrl = (filename) => {
  const data = useStaticQuery(
    graphql`
      query metaImgQuery {
        images: allFile {
          edges {
            node {
              relativePath
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

  const image = data.images.edges.find((n) => n.node.relativePath.includes(filename));

  if (!image) return null;

  const imageFixed = image.node.childImageSharp.fixed.src;

  return imageFixed;
};

metaImgUrl.propTypes = {
  filename: PropTypes.string,
  // alt: PropTypes.string,
};

export default metaImgUrl;
