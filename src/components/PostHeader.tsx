import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';

export interface IPostHeader {
  title: string;
  date: string;
  coverImage: {
    id?: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

/**
 * 포스트 헤더
 * @param param0
 * @returns
 */
function PostHeader({ title, coverImage, date }: IPostHeader) {
  return (
    <div className="relative">
      <GatsbyImage
        alt="PostHeader"
        image={getImage(coverImage.gatsbyImageData)}
        className="w-full max-h-[400px]"
      />
      <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full text-gray-300 bg-black bg-opacity-70">
        <h1 className="mb-4 text-2xl font-extrabold md:text-4xl">{title}</h1>
        <p className="text-xl font-bold">{date}</p>
      </div>
    </div>
  );
}

export default PostHeader;
