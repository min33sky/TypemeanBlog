import { graphql, PageProps } from 'gatsby';
import React from 'react';
import {
  ContentfulRichTextGatsbyReference,
  renderRichText,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text';
import { IGatsbyImageData } from 'gatsby-plugin-image';

export interface IBlogPosts {
  blog: {
    id: string;
    title: string;
    tags: string[];
    date: string;
    body: RenderRichTextData<ContentfulRichTextGatsbyReference>;
    coverImages: {
      id: string;
      gatsbyImageData: IGatsbyImageData;
    };
  };
}

function BlogPostTemplate({ data, pageContext }: PageProps) {
  console.log('ㅋㅋ: ', data);
  console.log('컨텍스트: ', pageContext);
  return (
    <div>
      <p>블로그 포스트 템플릿</p>
    </div>
  );
}

export const query = graphql`
  query BlogPageQuery($slug: String) {
    blog: allContentfulBlogs(filter: { slug: { eq: $slug } }) {
      totalCount
      edges {
        node {
          id
          title
          tags
          coverImages {
            id
            gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
          }
          body {
            raw
          }
        }
      }
    }
  }
`;

export default BlogPostTemplate;
