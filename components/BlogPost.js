import styled, { css } from "styled-components";
import Fade from "react-reveal/Fade";
import { Title, SubHeading } from "./styles/Headings";
import Hr from "./styles/Hr";
import uniqid from "uniqid";

const BlogPostBase = styled.div`
  order: ${props => (props.card ? "" : "-1")};
  max-width: ${props => props.theme.maxWidth};
  display: flex;
  flex-direction: column;
  margin-top: ${props => (props.card ? "4rem" : 0)};
  align-items: center;
  cursor: pointer;
`;

const BlogImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  background: url(${props => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: ${props => props.roundness};
  margin-top: ${props => (props.roundness ? "2rem" : 0)};
  width: ${props => (props.roundness ? "calc(100% - 4rem)" : "100%")};
  height: ${props => (props.card ? "50vh" : "calc(100vw - 4rem)")};

  @media screen and (min-width: 600px) {
    height: 28rem;
    ${props =>
      props.roundness &&
      css`
        width: 100%;
        height: 100vw;
        max-height: ${props => props.theme.maxWidth};
      `}
    ${props =>
      !props.roundness &&
      props.titlePhoto &&
      css`
        width: 100vw;
      `}
  }

  ${props =>
    props.titleInTopImg &&
    css`
      color: ${props =>
        props.titleInTopImg.color
          ? props.theme.colors[props.titleInTopImg.color]
          : props.theme.colors.accent};
      span {
        margin: 0 1rem;
        mix-blend-mode: hard-light;
      }
      display: flex;
      justify-content: center;
      align-items: center;
    `};
`;

const BlogCardTitleBox = styled.div`
  color: ${props => props.theme.colors.bg};
  background: ${props => props.theme.colors.primary};
  padding: 2rem;
  ${props =>
    props.shortTitle &&
    css`
      padding: 1.2rem 0rem 2rem 2rem;
      position: relative;
      margin-right: auto;
      height: 6rem;
      &:before {
        content: " ";
        width: 0;
        height: 0;
        position: absolute;
        top: 0;
        left: 99.98%;
        border-bottom: 6rem solid transparent;
        border-right: 6rem solid transparent;
        border-top: 6rem solid ${props => props.theme.colors.primary};
      }
    `}
`;

const BlogTitle = styled(Title)``;

const BlogCardSummaryBox = styled.div`
  margin-top: auto;
  width: 100%;
  padding: 2rem 30% 2rem 2rem;
  color: ${props => props.theme.colors.bg};
  background-image: radial-gradient(
    at bottom left,
    ${props => props.theme.colors.accent} 20%,
    ${props => props.theme.colors.transparent("accent", 0.4)}
  );
  hyphens: none;
`;

const Category = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  color: ${props => props.theme.colors.primary};
  font-family: "DejaVu Condensed Bold";
  font-size: 1.2em;
  font-variant: small-caps;
  padding: 0.8rem 0.8rem 0.8rem 0;
  height: 3rem;
  background: ${props => props.theme.colors.lightGrey};
  &:before {
    content: " ";
    width: 0;
    height: 0;
    position: absolute;
    bottom: 0;
    right: 99.98%;
    border-top: 3rem solid transparent;
    border-left: 3rem solid transparent;
    border-bottom: 3rem solid ${props => props.theme.colors.lightGrey};
  }
`;

const BlogSummary = styled.div`
  font-size: 1rem;
  font-weight: bolder;
  line-height: 1.4rem;
`;

const Paragraph = styled.div`
  align-self: flex-start;
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  & p:first-letter {
    font-size: 2rem;
    font-family: "DejaVu Serif";
    color: ${props => props.theme.colors.primary + "80"};
  }
  & *:not(p):first-letter {
    font-size: inherit;
    font-family: inherit;
    color: inherit;
  }
`;

const BlogText = styled.p`
  margin: 1rem 2rem 4rem 2rem;
  line-height: 1.8rem;
  @media screen and (min-width: 600px) {
    margin: 1rem 0 4rem;
  }
`;

const BlogPost = ({ card, entry, ...props }) => {
  if (card) {
    return (
      <BlogPostBase card {...props}>
        {entry.topImgUrl && (
          <BlogImage src={entry.topImgUrl} card>
            {entry.title && (
              <BlogCardTitleBox shortTitle={entry.title.length < 16}>
                <BlogTitle>{entry.title}</BlogTitle>
              </BlogCardTitleBox>
            )}
            <BlogCardSummaryBox>
              {entry.category && <Category>{entry.category}</Category>}
              {entry.summary && <BlogSummary>{entry.summary}</BlogSummary>}
            </BlogCardSummaryBox>
          </BlogImage>
        )}
      </BlogPostBase>
    );
  } else {
    return (
      <BlogPostBase card={false} {...props}>
        {entry.topImgUrl && (
          <BlogImage
            src={entry.topImgUrl}
            roundness={entry.topImgRoundness}
            titleInTopImg={entry.titleInTopImg}
            titlePhoto
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
            <Fade cascade big key={uniqid()}>
              <Paragraph>
                {paragraph.heading && (
                  <SubHeading>{paragraph.heading}</SubHeading>
                )}
                {paragraph.text && (
                  <BlogText
                    dangerouslySetInnerHTML={{ __html: paragraph.text }}
                  />
                )}
                {paragraph.imgUrl && <BlogImage src={paragraph.imgUrl} />}
              </Paragraph>
            </Fade>
          ))}
        <Hr />
      </BlogPostBase>
    );
  }
};
export default BlogPost;
