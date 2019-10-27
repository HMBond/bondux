import styled, { css } from "styled-components";
import { Title, SubHeading } from "./styles/Heading";
import Hr from "./styles/Hr";
import WhiteSpace from "./styles/WhiteSpace";
import { getColor } from "./styles/Theme";
import uniqid from "uniqid";

const BlogPostBase = styled.div`
  order: ${props => (props.card ? "" : "-1")};
  max-width: 40rem;
  display: flex;
  flex-direction: column;
  margin: 2rem 0 4rem 0;
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
  background: url(${props => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: ${props => props.roundness};
  width: calc(100% - 4rem);
  height: calc(100vw - 4rem);

  @media screen and (min-width: 600px) {
    width: 100%;
    height: ${props => (props.roundness ? "100vw" : "28rem")};
    max-height: 40rem;
  }

  ${props =>
    props.titleInTopImg &&
    css`
      color: ${props =>
        props.titleInTopImg.color
          ? getColor(props.titleInTopImg.color)
          : props.theme.colors.offWhite};
      span {
        margin: 0 1rem;
      }
      display: flex;
      justify-content: center;
      align-items: center;
    `};

  ${props =>
    props.card &&
    css`
      padding: 2rem;
      width: 100%;
    `};
`;

const BlogTitle = styled(Title)`
  margin-top: 2rem;
`;

const BlogSummary = styled.div`
  font-size: 1.4rem;
  font-weight: bolder;
  line-height: 2rem;
  margin: 1rem;
  line-height: 2rem;
`;

const Paragraph = styled.div`
  margin-top: 2em;
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
  margin: 1rem 2rem 3rem 2rem;
  line-height: 1.8rem;
  @media screen and (min-width: 600px) {
    margin: 1rem 0 3rem;
  }
`;

const BlogPost = ({ card, entry, ...props }) => {
  if (card) {
    return (
      <BlogPostBase card {...props}>
        {entry.topImgUrl && (
          <BlogImage src={entry.topImgUrl} card {...props}>
            {entry.title && <BlogTitle>{entry.title}</BlogTitle>}
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
              <BlogTitle large>{entry.title}</BlogTitle>
            )}
          </BlogImage>
        )}
        {entry.title && !entry.titleInTopImg && (
          <BlogTitle large>{entry.title}</BlogTitle>
        )}
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
      </BlogPostBase>
    );
  }
};
export default BlogPost;
