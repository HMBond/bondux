import { useState, useEffect } from 'react';
import Router from 'next/router';
import styled from 'styled-components';

import BlogPost from '../components/BlogPost.js';
import WhiteSpace from '../components/styled/WhiteSpace';
import { Title, SubTitle } from '../components/styled/Headings';
import { makeSlug } from '../components/helpers/functions';

const BlogPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BlogSubTitle = styled(SubTitle)``;

const BlogTitle = styled(Title)`
  margin-top: 4rem;
`;

const Blog = ({ context }) => {
  const [openPost, setOpenPost] = useState(null);

  const hashChangeHandler = () => {
    const requestedSlug = location.hash.replace('#', '');
    if (openPost !== requestedSlug) {
      setOpenPost(requestedSlug);
    }
  };

  useEffect(() => {
    openPost && Router.push(`${location.pathname}#${openPost}`);
    window.addEventListener('popstate', hashChangeHandler);
    return () => {
      window.removeEventListener('popstate', hashChangeHandler);
    };
  });

  function handleBlogPostClick(slug) {
    if (slug !== openPost) {
      setOpenPost(slug);
      document.getElementById('blog-page').scrollIntoView();
    }
  }

  return (
    <BlogPage id={'blog-page'}>
      <BlogTitle>{'My Blog'}</BlogTitle>
      <BlogSubTitle>{'HOW I THINK'}</BlogSubTitle>
      {context.content.blog.posts.map((entry) => {
        const slug = entry.slug || makeSlug(entry.title);
        return (
          <BlogPost
            key={entry.title}
            onClick={() => handleBlogPostClick(slug)}
            card={slug !== openPost}
            entry={entry}
          />
        );
      })}
      <WhiteSpace />
    </BlogPage>
  );
};

export default Blog;
