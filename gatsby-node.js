const path = require(`path`);

// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`);
};

// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  //* 페이지 템플릿
  const blogPostTemplate = path.resolve(`src/templates/blog-post.tsx`);
  const blogTagTemplate = path.resolve(`src/templates/blog-tag.tsx`);
  const blogNoteTemplate = path.resolve(`src/templates/blog-note.tsx`);
  const blogCategoryTemplate = path.resolve(`src/templates/blog-category.tsx`);

  //* 페이지 생성에 필요한 쿼리
  const queryResult = await graphql(`
    query CreatePagesQuery {
      notes: allContentfulNotes(sort: { fields: date, order: DESC }) {
        edges {
          node {
            slug
          }
          next {
            slug
            title
          }
          previous {
            slug
            title
          }
        }
      }
      blogs: allContentfulBlogs(sort: { fields: date, order: DESC }) {
        edges {
          node {
            slug
            category
            tags
          }
          next {
            slug
            title
          }
          previous {
            slug
            title
          }
        }
      }
    }
  `);

  const blogEdges = queryResult.data.blogs.edges;
  const noteEdges = queryResult.data.notes.edges;

  //* 블로그 페이지 생성
  blogEdges.forEach((edge, index) => {
    //* 슬러그에 해당하는 동적 페이지 생성
    const next = index === blogEdges.length - 1 ? null : edge.next.slug; // 다음 페이지
    const previous = index === 0 ? null : edge.previous.slug; // 이전 페이지
    const nextTitle = edge.next ? edge.next.title : '다음 글이 없습니다.';
    const previousTitle = edge.previous ? edge.previous.title : '이전 글이 없습니다.';

    createPage({
      path: `/blogs/${edge.node.slug}`,
      component: blogPostTemplate,
      context: {
        slug: edge.node.slug,
        next,
        nextTitle,
        previous,
        previousTitle,
      },
    });

    createPage({
      path: `/blogs/category/${edge.node.category}`,
      component: blogCategoryTemplate,
      context: {
        category: edge.node.category,
        next,
        nextTitle,
        previous,
        previousTitle,
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

  //* 노트 페이지 생성
  noteEdges.forEach((edge, index) => {
    //* 슬러그에 해당하는 동적 페이지 생성
    const next = index === noteEdges.length - 1 ? null : edge.next.slug; // 다음 페이지
    const previous = index === 0 ? null : edge.previous.slug; // 이전 페이지
    const nextTitle = edge.next ? edge.next.title : '다음 글이 없습니다.';
    const previousTitle = edge.previous ? edge.previous.title : '이전 글이 없습니다.';

    createPage({
      path: `/notes/${edge.node.slug}`,
      component: blogNoteTemplate,
      context: {
        slug: edge.node.slug,
        next,
        nextTitle,
        previous,
        previousTitle,
      },
    });
  });
};
