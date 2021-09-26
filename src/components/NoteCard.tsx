import { Link } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';

interface INoteCard {
  title: string;
  slug: string;
  description: string;
  image: IGatsbyImageData;
  date: string;
}

function NoteCard({ title, slug, date, description, image }: INoteCard) {
  return (
    <article className="mx-auto mt-8 transition duration-200 ease-in rounded-lg shadow-lg hover:-translate-y-1 bg-gray-50 dark:bg-gray-700 md:w-3/4">
      <Link to={`/notes/${slug}`}>
        {/* 이미지 */}
        <GatsbyImage alt="Note Image" image={image} className="rounded-t-lg" />
        {/* 제목, 설명, 날짜 */}
        <div className="px-2 py-5 space-y-2">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="">{description}</p>
          <p className="text-sm">{date}</p>
        </div>
      </Link>
    </article>
  );
}

export default NoteCard;
