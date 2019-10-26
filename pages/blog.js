import { useState, useEffect } from "react";
import styled from "styled-components";
import Context from "../components/Context";
import BlogPost from "../components/BlogPost.js";
import uniqid from "uniqid";
import WhiteSpace from "../components/styles/WhiteSpace";

const BlogPage = styled.div`
  display: flex;
  flex-direction: column;
`;

const Blog = () => {
  const [openPost, setOpenPost] = useState(null);
  return (
    <Context.Consumer>
      {context => (
        <BlogPage id={"blog-page"}>
          {context.content
            .find(page => page.name == "blog")
            .blogPosts.map(entry => (
              <BlogPost
                onClick={() => {
                  setOpenPost(entry);
                  if (entry !== openPost) {
                    document.getElementById("blog-page").scrollIntoView();
                  }
                }}
                card={entry !== openPost}
                entry={entry}
                key={uniqid()}
              />
            ))}
          <WhiteSpace />
        </BlogPage>
      )}
    </Context.Consumer>
  );
};

export default Blog;
