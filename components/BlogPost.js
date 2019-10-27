import styled, { css } from "styled-components";
import { Title, SubHeading, Summary } from "./styles/Heading";
import Hr from "./styles/Hr";
import WhiteSpace from "./styles/WhiteSpace";
import { getColor } from "./styles/Theme";
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
    props.titleInTopImg &&
    css`
      color: ${props =>
        props.titleInTopImg.color
          ? getColor(props.titleInTopImg.color)
          : props.theme.colors.offWhite};
      span {
        margin: 0 10px;
      }
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

const BlogHeading = styled(Title)`
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

const BlogPost = ({ card, entry, ...props }) => {
  if (card) {
    return (
      <BlogPostBase card {...props}>
        {entry.topImgUrl && (
          <BlogImage src={entry.topImgUrl} card {...props}>
            {entry.title && <BlogHeading large>{entry.title}</BlogHeading>}
            {entry.summary && (
              <BlogSummary>
                <span>{entry.summary}</span>
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
        {entry.topImgUrl && (
          <BlogImage
            {...props}
            src={entry.topImgUrl}
            roundness={entry.topImgRoundness}
            titleInTopImg={entry.titleInTopImg}
          >
            {entry.title && entry.titleInTopImg && (
              <BlogHeading>{entry.title}</BlogHeading>
            )}
          </BlogImage>
        )}
        {entry.title && !entry.titleInTopImg && (
          <BlogHeading>{entry.title}</BlogHeading>
        )}
        {entry.summary && <BlogSummary>{entry.summary}</BlogSummary>}
        {entry.paragraphs &&
          entry.paragraphs.map(paragraph => (
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
