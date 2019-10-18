import styled from "styled-components";
import Heading from "./styles/Heading.js";
import Summary from "./styles/Summary.js";

const BlogPostBase = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 40rem;
  margin-top: 2rem;
`;

const BlogImage = styled.div`
  margin-top: ${props => (props.headImage ? 0 : "2em")};
  margin-bottom: ${props => (props.headImage ? "2em" : 0)};
  background: url(${props => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: ${props => (props.roundness ? "100vw" : "17em")};
  max-height: 40rem;
  border-radius: ${props => props.roundness};
`;

const Paragraph = styled.div`
  width: 100%;
`;

const BlogText = styled.div`
  margin-top: 2rem;
  padding-left: 2rem;
  width: calc(100% - 3rem);
  text-indent: -1rem;
  line-height: 1.4rem;
`;

const BlogPost = ({ visible, contents, ...props }) => (
  <BlogPostBase visible={visible} {...props}>
    {contents.topImgUrl && (
      <BlogImage
        {...props}
        src={contents.topImgUrl}
        roundness={contents.topImgRoundness}
        headImage
      />
    )}
    {contents.title && <Heading>{contents.title}</Heading>}
    {contents.summary && <Summary>{contents.summary}</Summary>}
    {contents.paragraphs &&
      contents.paragraphs.map(paragraph => (
        <Paragraph key={paragraph.id}>
          <BlogImage src={paragraph.imgUrl} />
          <BlogText>{paragraph.text}</BlogText>
        </Paragraph>
      ))}
  </BlogPostBase>
);

export default BlogPost;
