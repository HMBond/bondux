import styled from "styled-components";
import Heading from "./styles/Heading.js";
import Summary from "./styles/Summary.js";

const BlogPostBase = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 50em;
  margin-top: 2em;
`;

const BlogImage = styled.div`
  margin-top: 2em;
  margin-bottom: ${props => (props.withBottomMargin ? "2em" : 0)};
  background: url(${props => props.src});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 20em;
  border-radius: ${props => props.roundness};
`;

const Paragraph = styled.div``;

const BlogPost = ({ visible, contents, ...props }) => (
  <BlogPostBase visible={visible} {...props}>
    {contents.topImgUrl && (
      <BlogImage
        {...props}
        src={contents.topImgUrl}
        roundness={contents.topImgRoundness}
        withBottomMargin
      />
    )}
    {contents.title && <Heading>{contents.title}</Heading>}
    {contents.summary && <Summary>{contents.summary}</Summary>}
    {contents.paragraphs &&
      contents.paragraphs.map(paragraph => (
        <Paragraph key={paragraph.id}>
          <BlogImage src={paragraph.imgUrl} />
          {paragraph.text}
        </Paragraph>
      ))}
  </BlogPostBase>
);

export default BlogPost;
