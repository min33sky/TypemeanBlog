import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/outline';
import { Link } from 'gatsby';
import React from 'react';

interface IPostFooter {
  previous: string;
  next: string;
}

/**
 * 포스트 푸터
 * 이전글, 다음글 버튼을 보여준다.
 * @param param0
 * @returns
 */
function PostFooter({ next, previous }: IPostFooter) {
  /**
   * TODO: 글의 제목을 가져와서 보여준다.
   * ! truncate가 작동을 안한다 머지?
   */

  return (
    <footer className="flex justify-between">
      <Link
        to={previous && `/notes/${previous}`}
        className={`px-3 py-2 transition duration-200 ease-in bg-gray-300 rounded-lg shadow-sm w-60 dark:bg-gray-600 dark:hover:bg-opacity-40 hover:bg-gray-800 hover:text-gray-200 active:-translate-y-1 ${
          !previous && 'cursor-not-allowed '
        }`}
      >
        <div className="flex items-center space-x-2 truncate">
          <div>
            <ArrowLeftIcon className="h-6" />
          </div>
          <div className="flex flex-col">
            <p>이전 글</p>
            <p className="line-clamp-1">
              {previous ? '포스트 제목이다에요 aaaaaaaaaaaaaaaaaaaaaa' : '이전 글이 없어요.'}
            </p>
          </div>
        </div>
      </Link>

      <Link
        to={next && `/notes/${next}`}
        className={`px-3 py-2 transition duration-200 ease-in bg-gray-300 rounded-lg shadow-sm w-60 dark:bg-gray-600 dark:hover:bg-opacity-40 hover:bg-gray-800 hover:text-gray-200 active:-translate-y-1 ${
          !next && 'cursor-not-allowed'
        }`}
      >
        <div className="flex items-center space-x-2">
          <div className="flex flex-col flex-grow truncate">
            <p>다음 글</p>
            <p>포스트 제목이다에요 aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
          </div>
          <div>
            <ArrowRightIcon className="h-6" />
          </div>
        </div>
      </Link>
    </footer>
  );
}

export default PostFooter;
