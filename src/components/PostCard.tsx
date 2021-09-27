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
    <article className="mt-10 mb-4 group">
      <Link to={`/blogs/${slug}/`}>
        <div className="grid grid-cols-1 transition duration-200 ease-out border rounded-md shadow-lg lg:grid-cols-[30%,70%] hover:-translate-y-1 bg-gray-50 dark:bg-gray-700 dark:border-none">
          {coverImages.map((coverImage) => {
            const pathToImage = coverImage.gatsbyImageData;
            return (
              <GatsbyImage
                key={coverImage.id}
                image={getImage(pathToImage)}
                alt="post-cover-image"
                className="rounded-t-md md:rounded-bl-md md:h-40"
              />
            );
          })}

          <div className="px-4 py-5 lg:mb-0 lg:pb-0">
            <h1 className="mb-4 text-3xl font-bold text-gray-800 truncate dark:text-gray-200 lg:text-2xl">
              {title}
            </h1>
            <p className="mb-4 text-sm">{date}</p>
            <div className="flex flex-wrap items-center space-x-2">
              {tags.map((tag, index) => (
                <div
                  key={index}
                  className="px-2 py-1 mb-2 font-mono text-sm text-gray-600 bg-gray-200 rounded-full group-hover:text-pink-400 dark:bg-gray-800 dark:text-gray-200"
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
