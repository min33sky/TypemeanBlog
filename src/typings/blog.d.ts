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

/**
 ** 메인 페이지 쿼리 타입
 */
export type HomeProps = {
  blogs: {
    edges: {
      node: {
        id: string;
        title: string;
        slug: string;
        category: string;
        date: string;
        tags: string[];
        coverImages: {
          id: string;
          gatsbyImageData: IGatsbyImageData;
        }[];
      };
    }[];
  };
  notes: {
    edges: {
      node: {
        id: string;
        title: string;
        slug: string;
        description: string;
        date: string;
        coverImage: {
          id: string;
          gatsbyImageData: IGatsbyImageData;
        };
      };
    }[];
  };
  tags: {
    edges: {
      node: {
        tags: string[];
      };
    }[];
  };
};
