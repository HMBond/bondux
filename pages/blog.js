import { useState, useEffect } from "react";
import Router from "next/router";
import styled from "styled-components";

import Context from "../components/Context";
import BlogPost from "../components/BlogPost.js";
import uniqid from "uniqid";
import WhiteSpace from "../components/styles/WhiteSpace";
import { Title, SubTitle } from "../components/styles/Headings";
import { makeSlug } from "../components/helpers/functions";

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

const Blog = () => {
  const [openPost, setOpenPost] = useState(null);

  const hashChangeHandler = () => {
    const requestedSlug = location.hash.replace("#", "");
    if (openPost !== requestedSlug) {
      setOpenPost(requestedSlug);
    }
  };

  useEffect(() => {
    openPost && Router.push(`${location.pathname}#${openPost}`);
    window.addEventListener("popstate", hashChangeHandler);
    return () => {
      window.removeEventListener("popstate", hashChangeHandler);
    };
  }, [openPost]);

  return (
    <Context.Consumer>
      {context => (
        <BlogPage id={"blog-page"}>
          <BlogTitle>{"My Blog"}</BlogTitle>
          <BlogSubTitle>{"HOW I THINK"}</BlogSubTitle>
          {context.content
            .find(page => page.url == "/blog")
            .blogPosts.map(entry => {
              entry.slug = entry.slug || makeSlug(entry.title);
              return (
                <BlogPost
                  key={uniqid()}
                  onClick={() => {
                    setOpenPost(entry.slug);
                    if (entry.slug !== openPost) {
                      document.getElementById("blog-page").scrollIntoView();
                    }
                  }}
                  card={entry.slug !== openPost}
                  entry={entry}
                />
              );
            })}
          <WhiteSpace />
        </BlogPage>
      )}
    </Context.Consumer>
  );
};

export default Blog;
