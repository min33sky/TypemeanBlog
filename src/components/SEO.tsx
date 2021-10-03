import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { ISiteMap } from '../typings/blog';
import { Helmet } from 'react-helmet';

interface ISeo {
  siteTitle: string;
  siteDescription?: string;
}

function SEO({ siteTitle, siteDescription }: ISeo) {
  const {
    site: {
      siteMetadata: { title, description, siteUrl },
    },
  } = useStaticQuery<ISiteMap>(graphql`
    {
      site {
        siteMetadata {
          title
          siteUrl
          description
        }
      }
    }
  `);

  const metaDescription = siteDescription || description;

  return (
    <Helmet
      htmlAttributes={{ lang: 'ko' }}
      title={`${siteTitle} | ${title}`}
      meta={[{ name: 'description', content: metaDescription }]}
    />
  );
}

export default SEO;
