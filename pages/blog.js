import Context from "../components/Context";
import BlogPost from "../components/BlogPost.js";
import uniqid from "uniqid";

const Blog = () => (
  <Context.Consumer>
    {context =>
      context.content[1].blogPosts.map(entry => (
        <BlogPost visible contents={entry} key={uniqid()} />
      ))
    }
  </Context.Consumer>
);

export default Blog;
