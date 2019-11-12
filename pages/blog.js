import { useState, useEffect } from "react";
import Router from "next/router";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

import Context from "../components/Context";
import BlogPost from "../components/BlogPost.js";
import uniqid from "uniqid";
import WhiteSpace from "../components/styles/WhiteSpace";
import { Title, SubHeading } from "../components/styles/Headings";
import { makeSlug } from "../components/helpers/functions";

const BlogPage = styled.div`
  display: flex;
  flex-direction: column;
`;

const BlogTitleContainer = styled.div`
  display: flex;
  align-items: baseline;
  margin: 3rem auto;
`;

const BlogSubHeading = styled(SubHeading)`
  font-family: "DejaVu Extra Light";
`;

const BlogTitle = styled(Title)``;

const Blog = () => {
  const [openPost, setOpenPost] = useState(null);

  const hashChangeHandler = () => {
    const manualSlug = location.hash.replace("#", "");
    if (openPost !== manualSlug) {
      setOpenPost(manualSlug);
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
          <BlogTitleContainer>
            <BlogSubHeading>{"Let's"}</BlogSubHeading>
            <BlogTitle>{"Read"}</BlogTitle>
          </BlogTitleContainer>
          {context.content
            .find(page => page.url == "/blog")
            .blogPosts.map(entry => {
              entry.slug = entry.slug || makeSlug(entry.title);
              return (
                <Fade cascade big key={uniqid()}>
                  <BlogPost
                    onClick={() => {
                      setOpenPost(entry.slug);
                      if (entry.slug !== openPost) {
                        document.getElementById("blog-page").scrollIntoView();
                      }
                    }}
                    card={entry.slug !== openPost}
                    entry={entry}
                  />
                </Fade>
              );
            })}
          <WhiteSpace />
        </BlogPage>
      )}
    </Context.Consumer>
  );
};

export default Blog;
