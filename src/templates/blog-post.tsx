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
import PostFooter from '../components/PostFooter';

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

interface IPostPageContext {
  previous: string;
  previousTitle: string;
  next: string;
  nextTitle: string;
}

function BlogPostTemplate({
  data: { blog },
  pageContext: { next, nextTitle, previous, previousTitle },
}: PageProps<IBlogPost, IPostPageContext>) {
  return (
    <Layout>
      <main>
        <PostHeader title={blog.title} date={blog.date} coverImage={blog.coverImages[0]} />
        <PostBody content={blog.body} markdown={blog.markdown?.childMarkdownRemark.html} />
        <PostFooter
          location="blogs"
          next={next}
          nextTitle={nextTitle}
          previous={previous}
          previousTitle={previousTitle}
        />
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
