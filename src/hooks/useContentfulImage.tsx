import { graphql, useStaticQuery } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';

interface IContentfulImage {
  assets: {
    edges: {
      node: {
        title: string;
        contentful_id: string;
        gatsbyImageData: IGatsbyImageData;
      };
    }[];
  };
}

export default function useContentfulImage(assetUrl: string) {
  const { assets } = useStaticQuery<IContentfulImage>(
    graphql`
      query Contentful_Image_Query {
        assets: allContentfulAsset {
          edges {
            node {
              title
              contentful_id
              gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
            }
          }
        }
      }
    `
  );

  console.log('포스트 내 이미지: ', assets);

  const asset = assets.edges.find((edge) => edge.node.contentful_id === assetUrl);
  return asset;
}
