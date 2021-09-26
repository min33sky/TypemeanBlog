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
    <article className="flex flex-col mx-auto md:w-3/4">
      <Link to={`/notes/${slug}`}>
        {/* 이미지 */}
        <GatsbyImage alt="Note Image" image={image} />
        {/* 제목, 설명, 날짜 */}
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
          <p>{date}</p>
        </div>
      </Link>
    </article>
  );
}

export default NoteCard;
