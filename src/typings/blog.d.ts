import { IGatsbyImageData } from 'gatsby-plugin-image';

/**
 ** 사이트맵 타입
 */
export interface ISiteMap {
  site: {
    siteMetadata: {
      title: string;
      siteUrl: string;
      description: string;
    };
  };
}

/**
 ** 블로그 태그 타입
 */
export interface IBlogTag {
  blog: {
    edges: {
      node: {
        id: string;
        title: string;
        slug: string;
        date: string;
        tags: string[];
        coverImages: {
          id: string;
          gatsbyImageData: IGatsbyImageData;
        }[];
      };
    }[];
  };
}
