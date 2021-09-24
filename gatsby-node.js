const path = require(`path`);

// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`);
};

// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/templates/blog-post.tsx`);
  const blogTagTemplate = path.resolve(`src/templates/blog-tag.tsx`);

  const queryResult = await graphql(`
    query MyQuery {
      blogs: allContentfulBlogs {
        edges {
          node {
            slug
            tags
          }
          next {
            slug
          }
          previous {
            slug
          }
        }
      }
    }
  `);

  const edges = queryResult.data.blogs.edges;

  edges.forEach((edge, index) => {
    //* 슬러그에 해당하는 동적 페이지 생성
    const next = index === edges.length - 1 ? null : edge.next.slug; // 다음 페이지
    const previous = index === 0 ? null : edge.previous.slug; // 이전 페이지

    createPage({
      path: `/blogs/${edge.node.slug}`,
      component: blogPostTemplate,
      context: {
        slug: edge.node.slug,
        next,
        previous,
      },
    });

    //* 태그들에 해당하는 동적 페이지 생성
    edge.node.tags.forEach((tag) => {
      createPage({
        path: `/tags/${tag}`,
        component: blogTagTemplate,
        context: {
          tag,
        },
      });
    });
  });
};
