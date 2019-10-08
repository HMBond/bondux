import Context from "../components/Context";
import BlogPost from "../components/BlogPost.js";

const Blog = () => (
  <Context.Consumer>
    {context =>
      context.content[1].blogPosts.map(entry => (
        <BlogPost visible contents={entry} key={entry.id} />
      ))
    }
  </Context.Consumer>
);

export default Blog;
