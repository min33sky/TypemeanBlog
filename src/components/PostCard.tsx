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
    <article className="mt-10 mb-4">
      <Link to={`/blogs/${slug}`}>
        <div className="grid grid-cols-1 transition duration-200 ease-out border rounded-md shadow-lg md:grid-cols-2 hover:-translate-y-1 bg-gray-50 dark:bg-gray-700 dark:border-none">
          {coverImages.map((coverImage) => {
            const pathToImage = coverImage.gatsbyImageData;
            return (
              <GatsbyImage
                key={coverImage.id}
                image={getImage(pathToImage)}
                alt="post-cover-image"
                className="rounded-t-md md:rounded-bl-md md:h-60"
              />
            );
          })}

          <div className="px-4 py-5 md:mb-0">
            <h1 className="mb-4 text-3xl font-bold text-gray-800 truncate dark:text-gray-200">
              {title}
            </h1>
            <p className="mb-4 text-sm">{date}</p>
            <div className="flex flex-wrap items-center space-x-2">
              {tags.map((tag, index) => (
                <div
                  key={index}
                  className="px-2 py-1 mb-2 text-sm font-light text-gray-200 bg-indigo-700 rounded-full"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default PostCard;
