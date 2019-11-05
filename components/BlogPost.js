import styled, { css } from "styled-components";
import Fade from "react-reveal/Fade";
import { Title, SubHeading } from "./styles/Text";
import Hr from "./styles/Hr";
import uniqid from "uniqid";

const BlogPostBase = styled.div`
  order: ${props => (props.card ? "" : "-1")};
  max-width: ${props => props.theme.maxWidth};
  display: flex;
  flex-direction: column;
  margin-top: ${props => (props.card ? "2rem" : 0)};
  align-items: center;
`;

const BlogImage = styled.div`
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
    width: 100%;
    height: ${props => (props.roundness ? "100vw" : "28rem")};
    max-height: ${props => props.theme.maxWidth};
  }

  ${props =>
    props.titleInTopImg &&
    css`
      color: ${props =>
        props.titleInTopImg.color
          ? props.theme.colors[props.titleInTopImg.color]
          : props.theme.colors.offWhite};
      span {
        margin: 0 1rem;
      }
      display: flex;
      justify-content: center;
      align-items: center;
    `};
`;

const BlogCardTitleBox = styled.div`
  background: ${props => props.theme.colors.primaryTransparent};
  color: ${props => props.theme.colors.bg};
  width: 100%;
  padding: 2rem;
`;

const BlogCardSummaryBox = styled.div`
  padding: 1rem;
  width: 100%;
  color: ${props => props.theme.colors.bg};
  background-image: radial-gradient(
    at bottom left,
    ${props => props.theme.colors.accent} 20%,
    ${props => props.theme.colors.accent}40
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

const BlogTitle = styled(Title)`
  margin-top: 2rem;
`;

const BlogSummary = styled.div`
  font-size: 1.4rem;
  font-weight: bolder;
  line-height: 2rem;
  margin: 1rem;
  line-height: 2rem;
  font-family: "DejaVu Condensed Bold";
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
            {entry.title && (
              <BlogCardTitleBox>
                <BlogTitle>{entry.title}</BlogTitle>
              </BlogCardTitleBox>
            )}
            <BlogCardSummaryBox>
              {entry.category && <Category>{entry.category}</Category>}
              {entry.summary && (
                <BlogSummary>
                  <span>{entry.summary}</span>
                </BlogSummary>
              )}
            </BlogCardSummaryBox>
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
            <Fade cascade big>
              <Paragraph key={uniqid()}>
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
