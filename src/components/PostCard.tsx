import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';

interface IPostCard {
  post: {
    node: {
      id: string;
      title: string;
      slug: string;
      coverImages: {
        id: string;
        gatsbyImageData: IGatsbyImageData;
      }[];
    };
  };
}

function PostCard({
  post: {
    node: { id, coverImages, title, slug },
  },
}: IPostCard) {
  return (
    <article className="grid grid-cols-1 md:grid-cols-2">
      <div>
        {coverImages.map((coverImage) => {
          const pathToImage = coverImage.gatsbyImageData;
          return (
            <GatsbyImage key={coverImage.id} image={getImage(pathToImage)} alt="post-cover-image" />
          );
        })}
      </div>
      <p>{title}</p>
    </article>
  );
}

export default PostCard;
