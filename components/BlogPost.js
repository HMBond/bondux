import styled, { css } from "styled-components";
import Heading, { SubHeading } from "./styles/Heading";
import Summary from "./styles/Summary";
import Hr from "./styles/Hr";
import WhiteSpace from "./styles/WhiteSpace";
import uniqid from "uniqid";

const BlogPostBase = styled.div`
  order: ${props => (props.card ? "" : "-1")};
  max-width: 40rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
  align-items: center;
  ${props =>
    props.card &&
    css`
      margin-bottom: 2rem;
      align-items: flex-start;
      & span {
        background: ${props => props.theme.colors.accent};
        box-shadow: -4px 0px 0px 2px ${props => props.theme.colors.accent},
          4px 0px 0px 2px ${props => props.theme.colors.accent};
        color: ${props => props.theme.colors.bg};
      }
    `}
`;

const BlogImage = styled.div`
  width: 100%;
  margin-top: 2rem;
  background: url(${props => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: ${props => (props.roundness ? "100vw" : "28rem")};
  max-height: 40rem;
  border-radius: ${props => props.roundness};

  ${props =>
    props.titleInTopImage &&
    css`
      color: ${props => props.theme.colors.offWhite};
      display: flex;
      justify-content: center;
      align-items: center;
    `};

  ${props =>
    props.card &&
    css`
      padding: 2rem;
    `};
`;

const BlogHeading = styled(Heading)`
  margin-top: 2rem;
`;

const BlogSummary = styled(Summary)`
  margin: 1rem 10px;
  line-height: 1.8rem;
`;

const Paragraph = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & p:first-letter {
    font-size: 2rem;
    font-family: "DejaVu Serif";
    color: ${props => props.theme.colors.primary + "80"};
  }
`;

const BlogText = styled.p`
  margin: 2rem;
  line-height: 1.4rem;
`;

const BlogPost = ({ card, contents, ...props }) => {
  if (card) {
    return (
      <BlogPostBase card {...props}>
        {contents.topImgUrl && (
          <BlogImage src={contents.topImgUrl} card {...props}>
            {contents.title && <BlogHeading>{contents.title}</BlogHeading>}
            {contents.summary && (
              <BlogSummary>
                <span>{contents.summary}</span>
              </BlogSummary>
            )}
          </BlogImage>
        )}
        <Hr />
      </BlogPostBase>
    );
  } else {
    return (
      <BlogPostBase card={false} {...props}>
        {contents.topImgUrl && (
          <BlogImage
            {...props}
            src={contents.topImgUrl}
            roundness={contents.topImgRoundness}
            titleInTopImage={contents.titleInTopImage}
          >
            {contents.title && contents.titleInTopImage && (
              <BlogHeading>{contents.title}</BlogHeading>
            )}
          </BlogImage>
        )}
        {contents.title && !contents.titleInTopImage && (
          <BlogHeading>{contents.title}</BlogHeading>
        )}
        {contents.summary && <BlogSummary>{contents.summary}</BlogSummary>}
        {contents.paragraphs &&
          contents.paragraphs.map(paragraph => (
            <Paragraph key={uniqid()}>
              {paragraph.heading && (
                <SubHeading>{paragraph.heading}</SubHeading>
              )}
              {paragraph.text && <BlogText>{paragraph.text}</BlogText>}
              {paragraph.imgUrl && <BlogImage src={paragraph.imgUrl} />}
            </Paragraph>
          ))}
        <Hr />
        <WhiteSpace height={"3rem"} />
      </BlogPostBase>
    );
  }
};
export default BlogPost;
