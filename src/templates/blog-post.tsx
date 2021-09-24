import { graphql, PageProps } from 'gatsby';
import React from 'react';
import {
  ContentfulRichTextGatsbyReference,
  renderRichText,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import PostHeader from '../components/PostHeader';
import PostBody from '../components/PostBody';

export interface IBlogPost {
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
    markdown?: {
      childMarkdownRemark: {
        html;
      };
    };
  };
}

function BlogPostTemplate({ data: { blog }, pageContext }: PageProps<IBlogPost>) {
  console.log('컨텍스트: ', pageContext);
  return (
    <Layout>
      <main>
        <PostHeader title={blog.title} date={blog.date} coverImage={blog.coverImages[0]} />
        <PostBody content={blog.body} markdown={blog.markdown?.childMarkdownRemark.html} />
      </main>
    </Layout>
  );
}

export const query = graphql`
  query PostQuery($slug: String) {
    blog: contentfulBlogs(slug: { eq: $slug }) {
      id
      title
      date
      tags
      coverImages {
        gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
      }
      body {
        raw
      }
      markdown {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;

export default BlogPostTemplate;
