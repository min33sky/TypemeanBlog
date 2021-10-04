import { graphql, Link, useStaticQuery } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import React, { useEffect } from 'react';
import CategoryBar from '../components/CategoryBar';
import Layout from '../components/Layout';
import PostCard from '../components/PostCard';
import SEO from '../components/SEO';
import { getCategory } from '../utils/getCagetory';
import { useSetRecoilState } from 'recoil';
import { categoryState } from '../store/category';

export interface IPosts {
  notes: {
    edges: {
      node: {
        id;
        title;
        description;
        slug;
        date;
        tags: string[];
        coverImages: {
          id;
          gatsbyImageData: IGatsbyImageData;
        }[];
        body: {
          raw;
        };
      };
    }[];
  };
  category: {
    edges: {
      node: {
        category: string;
      };
    }[];
  };
}

/**
 * 포스트 목록 페이지
 * /blogs
 * @returns
 */
function Blogs() {
  const {
    notes: { edges },
    category: { edges: categoryEdges },
  } = useStaticQuery<IPosts>(graphql`
    {
      notes: allContentfulBlogs(sort: { fields: date, order: DESC }) {
        edges {
          node {
            id
            title
            description
            slug
            date(fromNow: true, locale: "ko")
            tags
            coverImages {
              id
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
      category: allContentfulBlogs {
        edges {
          node {
            category
          }
        }
      }
    }
  `);

  const setCategories = useSetRecoilState(categoryState);
  const categories = getCategory(categoryEdges);
  useEffect(() => {
    if (categories) {
      setCategories(categories);
    }
  }, []);

  return (
    <Layout>
      <SEO siteTitle="Blogs" />
      <div className="mx-auto sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
        <h1 className="mt-4 mb-4 text-5xl font-bold text-center">All Posts</h1>
        <CategoryBar categories={categories} />

        {edges.map((edge) => (
          <PostCard key={edge.node.id} post={edge} />
        ))}
      </div>
    </Layout>
  );
}

export default Blogs;
