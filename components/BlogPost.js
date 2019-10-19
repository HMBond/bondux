import styled from "styled-components";
import Heading from "./styles/Heading";
import Summary from "./styles/Summary";
import Hr from "./styles/Hr";

const BlogPostBase = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 40rem;
`;

const BlogImage = styled.div`
  margin-top: 2rem;
  background: url(${props => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: ${props => (props.roundness ? "100vw" : "28rem")};
  max-height: 40rem;
  border-radius: ${props => props.roundness};
`;

const Paragraph = styled.div`
  width: 100%;
  & p:first-letter {
    font-size: 2rem;
    font-weight: bolder;
  }
`;

const BlogHeading = styled(Heading)`
  margin-top: 2rem;
`;

const BlogSummary = styled(Summary)`
  margin: 1rem 10px;
`;

const BlogText = styled.p`
  margin: 2rem;
  line-height: 1.4rem;
`;

const BlogPost = ({ visible, contents, ...props }) => (
  <BlogPostBase visible={visible} {...props}>
    {contents.topImgUrl && (
      <BlogImage
        {...props}
        src={contents.topImgUrl}
        roundness={contents.topImgRoundness}
      />
    )}
    {contents.title && <BlogHeading>{contents.title}</BlogHeading>}
    {contents.summary && <BlogSummary>{contents.summary}</BlogSummary>}
    {contents.paragraphs &&
      contents.paragraphs.map(paragraph => (
        <Paragraph key={paragraph.id}>
          <BlogImage src={paragraph.imgUrl} />
          <BlogText>{paragraph.text}</BlogText>
        </Paragraph>
      ))}
    <Hr />
  </BlogPostBase>
);

export default BlogPost;
