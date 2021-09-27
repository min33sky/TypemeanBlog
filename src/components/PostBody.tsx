import React from 'react';
import {
  ContentfulRichTextGatsbyReference,
  renderRichText,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text';
import { Options } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import useContentfulImage from '../hooks/useContentfulImage';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

interface IPostBody {
  content: RenderRichTextData<ContentfulRichTextGatsbyReference>;
  markdown?: any;
  toc?: any;
}

function PostBody({ content, markdown, toc }: IPostBody) {
  const options: Options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <span className="font-bold">{text}</span>,
      [MARKS.CODE]: (text) => <span className="markdown">{text}</span>,
    },
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => <h1 className="text-6xl font-bold">{children}</h1>,
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const asset = useContentfulImage(node.data.target.sys.id);
        if (asset) {
          return <GatsbyImage alt="post-image" image={getImage(asset.node.gatsbyImageData)} />;
        }
      },
    },
  };

  //* 마크다운 포스트일 경우에 랜더링
  if (markdown) {
    return (
      <div>
        {
          //* 마크다운 Table Of Contents (TOC)
          toc && (
            <div
              className="fixed hidden text-sm w-36 xl:block left-6 top-64 "
              dangerouslySetInnerHTML={{ __html: toc }}
            ></div>
          )
        }
        {/* 마크다운 본문 */}
        <div
          className="markdown"
          dangerouslySetInnerHTML={{
            __html: markdown,
          }}
        />
      </div>
    );
  }

  //* 리치 에디터 랜더링
  return <article className="markdown">{renderRichText(content, options)}</article>;
}

export default PostBody;
