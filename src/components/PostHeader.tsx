import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';

export interface IPostHeader {
  title: string;
  date: string;
  coverImage: {
    id: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

function PostHeader({ title, coverImage, date }: IPostHeader) {
  return (
    <div className="relative">
      <GatsbyImage
        alt="PostHeader"
        image={getImage(coverImage.gatsbyImageData)}
        className="w-full max-h-[400px]"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 text-gray-300 flex justify-center items-center flex-col">
        <h1 className="font-extrabold text-8xl mb-4">{title}</h1>
        <p className="font-bold text-2xl">{date}</p>
      </div>
    </div>
  );
}

export default PostHeader;
