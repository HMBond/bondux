import styled from "styled-components";
import Context from "../components/Context";
import BlogPost from "../components/BlogPost.js";
import uniqid from "uniqid";
import WhiteSpace from "../components/styles/WhiteSpace";

const BlogPage = styled.div``;

const Blog = () => (
  <Context.Consumer>
    {context => (
      <BlogPage>
        {context.content
          .find(page => page.name == "blog")
          .blogPosts.map(entry => (
            <BlogPost card contents={entry} key={uniqid()} />
          ))}
        <WhiteSpace />
      </BlogPage>
    )}
  </Context.Consumer>
);

export default Blog;
