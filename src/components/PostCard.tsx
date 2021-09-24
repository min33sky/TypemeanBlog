import { Link } from 'gatsby';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';

interface IPostCard {
  post: {
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
  };
}

function PostCard({
  post: {
    node: { id, coverImages, title, date, tags, slug },
  },
}: IPostCard) {
  return (
    <article className="grid grid-cols-1 md:grid-cols-2 mb-10 border shadow-md rounded-sm">
      <div className="mb-4">
        {coverImages.map((coverImage) => {
          const pathToImage = coverImage.gatsbyImageData;
          return (
            <GatsbyImage
              key={coverImage.id}
              image={getImage(pathToImage)}
              alt="post-cover-image"
              className="md:h-60"
            />
          );
        })}
      </div>
      <div className="mb-4">
        <h1 className="text-3xl mb-2 text-gray-800">{title}</h1>
        <p className="mb-2 text-sm">{date}</p>
        <div className="flex items-center space-x-2 mb-2">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="bg-purple-500 text-white rounded-full px-2 py-1 text-sm font-light"
            >
              {tag}
            </div>
          ))}
          <Link to={`/blogs/${slug}`}>가보자 가보자</Link>
        </div>
      </div>
    </article>
  );
}

export default PostCard;
