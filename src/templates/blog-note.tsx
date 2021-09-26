import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/outline';
import { graphql, Link, PageProps } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../components/Layout';

interface IBlogNote {
  note: {
    id;
    title;
    date;
    coverImage: {
      gatsbyImageData: IGatsbyImageData;
    };
    body: {
      raw;
    };
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
  pageContext,
}: PageProps<IBlogNote, IPageContext>) {
  console.log('페이지 컨텍스트: ', pageContext);

  return (
    <Layout>
      <article>
        <h1>{title}</h1>
        <p>{date}</p>

        {/* 이전 글, 다음 글 */}
        <nav className="flex justify-between">
          <Link
            to={`/notes/${pageContext.previous}`}
            className="px-3 py-2 transition duration-200 ease-in bg-gray-300 rounded-lg shadow-sm w-60 dark:bg-gray-600 dark:hover:bg-opacity-40 hover:bg-gray-800 hover:text-gray-200 active:-translate-y-1"
          >
            <div className="flex items-center space-x-2 truncate">
              <div>
                <ArrowLeftIcon className="h-6" />
              </div>
              <div className="flex flex-col ">
                <p>이전 글</p>
                <p className="truncate">포스트 제목이다에요 aaaaaaaaaaaaaaaaaaaaaa</p>
              </div>
            </div>
          </Link>

          <Link
            to={`/notes/${pageContext.next}`}
            className="px-3 py-2 transition duration-200 ease-in bg-gray-300 rounded-lg shadow-sm w-60 dark:bg-gray-600 dark:hover:bg-opacity-40 hover:bg-gray-800 hover:text-gray-200 active:-translate-y-1"
          >
            <div className="flex items-center space-x-2">
              <div className="flex flex-col flex-grow truncate">
                <p>다음 글</p>
                <p>포스트 제목이다에요 aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
              </div>
              <div>
                <ArrowRightIcon className="h-6" />
              </div>
            </div>
          </Link>
        </nav>
      </article>
    </Layout>
  );
}

export const query = graphql`
  query NoteQuery($slug: String) {
    note: contentfulNotes(slug: { eq: $slug }) {
      id
      title
      date
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
