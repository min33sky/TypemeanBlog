import React, { MutableRefObject, useEffect, useRef } from 'react';

const src = 'https://utteranc.es/client.js';
const repo = 'min33sky/blog-comments-repo';

type UtterancesAttributesType = {
  src: string;
  repo: string;
  'issue-term': string;
  label: string;
  theme: string;
  crossorigin: string;
  async: string;
};

/**
 * 블로그 댓글
 * @returns
 */
function Comment() {
  const commentRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  useEffect(() => {
    if (commentRef.current) {
      const utterances: HTMLScriptElement = document.createElement('script');

      const attributes: UtterancesAttributesType = {
        src,
        repo,
        'issue-term': 'pathname',
        label: 'Comment',
        theme: 'github-dark',
        crossorigin: 'anonymous',
        async: 'true',
      };

      Object.entries(attributes).forEach(([key, value]) => {
        utterances.setAttribute(key, value);
      });

      commentRef.current.appendChild(utterances);
    }
  }, []);

  return <div ref={commentRef} className="mt-8 "></div>;
}

export default Comment;
