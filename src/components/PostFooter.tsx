import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/outline';
import { Link, navigate } from 'gatsby';
import React from 'react';

interface IPostFooter {
  location: 'notes' | 'blogs';
  previous: string;
  previousTitle: string;
  next: string;
  nextTitle: string;
}

/**
 * 포스트 푸터
 * 이전글, 다음글 버튼을 보여준다.
 * @param param0
 * @returns
 */
function PostFooter({ location, next, previous, nextTitle, previousTitle }: IPostFooter) {
  return (
    <footer className="pt-10 mt-10 border-t-2 border-gray-500 ">
      <div className="flex justify-between">
        <button
          disabled={!previous}
          onClick={() => navigate(`/${location}/${previous}`)}
          className={`px-2 py-2 transition duration-200 ease-in bg-gray-300 rounded-lg shadow-sm w-52 dark:bg-gray-600 dark:hover:bg-opacity-40 hover:bg-gray-800 hover:text-gray-200 active:-translate-y-1 ${
            !previous && 'cursor-not-allowed '
          }`}
        >
          <div className="flex items-center space-x-2">
            <div>
              <ArrowLeftIcon className="h-6" />
            </div>
            <div className="flex flex-col w-40 text-sm">
              <p className="font-bold">이전 글</p>
              <p className="pt-2 text-xs truncate">{previousTitle}</p>
            </div>
          </div>
        </button>

        <button
          disabled={!next}
          onClick={() => navigate(`/${location}/${next}`)}
          className={`px-2 py-2 transition duration-200 ease-in bg-gray-300 rounded-lg shadow-sm w-52 dark:bg-gray-600 dark:hover:bg-opacity-40 hover:bg-gray-800 hover:text-gray-200 active:-translate-y-1 ${
            !next && 'cursor-not-allowed '
          }`}
        >
          <div className="flex items-center space-x-2">
            <div className="flex flex-col w-40 text-sm">
              <p className="font-bold">다음 글</p>
              <p className="pt-2 text-xs truncate">{nextTitle}</p>
            </div>
            <div>
              <ArrowRightIcon className="h-6" />
            </div>
          </div>
        </button>
      </div>
    </footer>
  );
}

export default PostFooter;
