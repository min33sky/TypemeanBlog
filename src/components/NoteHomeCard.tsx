import { Link } from 'gatsby';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';

interface INoteCard {
  title: string;
  slug: string;
  description: string;
  image: IGatsbyImageData;
  date: string;
}

/**
 * 노트 홈 카드
 * @param param0
 * @returns
 */
function NoteHomeCard({ title, slug, date, description, image }: INoteCard) {
  return (
    <article className="mx-auto mt-6 transition duration-200 ease-in rounded-lg shadow-lg hover:-translate-y-1 bg-gray-50 dark:bg-gray-700">
      <Link to={`/notes/${slug}`} className="grid lg:grid-cols-[70%,1fr]">
        {/* 이미지 */}
        <GatsbyImage
          alt="Note Image"
          image={getImage(image)}
          className="h-64 rounded-t-lg lg:rounded-tr-none"
        />

        {/* 제목, 설명, 날짜 */}
        <div className="px-4 py-5 space-y-2">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="">{description}</p>
          <p className="text-sm">{date}</p>
        </div>
      </Link>
    </article>
  );
}

export default NoteHomeCard;
