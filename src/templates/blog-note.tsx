import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/outline';
import { graphql, Link, PageProps } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text';
import React from 'react';
import Layout from '../components/Layout';
import PostBody from '../components/PostBody';
import PostFooter from '../components/PostFooter';
import PostHeader from '../components/PostHeader';

interface IBlogNote {
  note: {
    id;
    title;
    date;
    coverImage: {
      gatsbyImageData: IGatsbyImageData;
    };
    body: RenderRichTextData<ContentfulRichTextGatsbyReference>;
  };
}

interface IPageContext {
  previous: string;
  next: string;
}

function BlogNoteTemplate({
  data: {
    note: { body, coverImage, date, id, title },
  },
  pageContext: { next, previous },
}: PageProps<IBlogNote, IPageContext>) {
  return (
    <Layout>
      <article>
        <PostHeader coverImage={coverImage} title={title} date={date} />
        <PostBody content={body} />
        <PostFooter next={next} previous={previous} />
      </article>
    </Layout>
  );
}

export const query = graphql`
  query NoteQuery($slug: String) {
    note: contentfulNotes(slug: { eq: $slug }) {
      id
      title
      date(fromNow: true, locale: "ko")
      coverImage {
        gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
      }
      body {
        raw
      }
    }
  }
`;

export default BlogNoteTemplate;
