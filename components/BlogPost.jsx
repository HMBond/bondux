import { Fragment } from 'react';
import styled, { css } from 'styled-components';
import { Title } from './styled/Headings';
import Hr from './styled/Hr';
import Paragraph, { ParagraphHeading, ParagraphText } from './styled/Paragraph';
import WhiteSpace from './styled/WhiteSpace';

const BlogPostBase = styled.div`
  order: ${(props) => (props.card ? '' : '-1')};
  max-width: ${(props) => props.theme.maxWidth};
  display: flex;
  flex-direction: column;
  margin-top: ${(props) => (props.card ? '4rem' : 0)};
  align-items: center;
  cursor: ${(props) => (props.card ? 'pointer' : '')};
`;

const BlogImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  background: url(${(props) => props.src});
  background-size: ${(props) => (props.contain ? 'contain' : 'cover')};
  background-position: center;
  background-repeat: no-repeat;
  border-radius: ${(props) => props.roundness};
  margin-top: ${(props) => (props.roundness ? '2rem' : 0)};
  width: ${(props) => (props.roundness ? 'calc(100% - 4rem)' : '100%')};
  height: ${(props) => (props.card ? '28rem' : 'calc(100vw - 4rem)')};

  @media screen and (min-width: 600px) {
    height: 28rem;
    ${(props) =>
      props.roundness &&
      css`
        width: 100%;
        height: 100vw;
        max-height: ${(props) => props.theme.maxWidth};
      `}
    ${(props) =>
      !props.roundness &&
      props.titlePhoto &&
      css`
        width: 100vw;
      `}
  }

  ${(props) =>
    props.titleInTopImg &&
    css`
      color: ${(props) =>
        props.titleInTopImg.color
          ? props.theme.colors[props.titleInTopImg.color]
          : props.theme.colors.bg};
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
  color: ${(props) => props.theme.colors.bg};
  background: ${(props) => props.theme.colors.primary};
  padding: 2rem;
  ${(props) =>
    props.shortTitle &&
    css`
      padding: 1.2rem 0rem 2rem 2rem;
      position: relative;
      margin-right: auto;
      height: 6rem;
      &:before {
        content: ' ';
        width: 0;
        height: 0;
        position: absolute;
        top: 0;
        left: 99.98%;
        border-bottom: 6rem solid transparent;
        border-right: 6rem solid transparent;
        border-top: 6rem solid ${(props) => props.theme.colors.primary};
      }
    `}
`;

const BlogCardSummaryBox = styled.div`
  margin-top: auto;
  width: 100%;
  padding: 2rem 30% 2rem 2rem;
  color: ${(props) => props.theme.colors.bg};
  background-image: radial-gradient(
    at bottom left,
    ${(props) => props.theme.colors.accent} 20%,
    ${(props) => props.theme.colors.transparent('accent', 0.4)}
  );
  hyphens: none;
`;

const Category = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  color: ${(props) => props.theme.colors.primary};
  font-family: 'DejaVu Condensed Bold';
  font-size: 1.2em;
  font-variant: small-caps;
  padding: 0.8rem 0.8rem 0.8rem 0;
  height: 3rem;
  background: ${(props) => props.theme.colors.lightGrey};
  &:before {
    content: ' ';
    width: 0;
    height: 0;
    position: absolute;
    bottom: 0;
    right: 99.98%;
    border-top: 3rem solid transparent;
    border-left: 3rem solid transparent;
    border-bottom: 3rem solid ${(props) => props.theme.colors.lightGrey};
  }
`;

const BlogSummary = styled.div`
  font-size: 1rem;
  font-weight: bolder;
  line-height: 1.4rem;
`;

const BlogPost = ({ card, entry, ...props }) => {
  if (card) {
    return (
      <BlogPostBase card {...props}>
        {entry.topImgUrl && (
          <BlogImage src={entry.topImgUrl} card>
            {entry.title && (
              <BlogCardTitleBox shortTitle={entry.title.length < 16}>
                <Title>{entry.title}</Title>
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
              <Title large>{entry.title}</Title>
            )}
          </BlogImage>
        )}
        {entry.title && !entry.titleInTopImg && (
          <Title large>{entry.title}</Title>
        )}
        {entry.paragraphs &&
          entry.paragraphs.map((paragraph, index) => (
            <Paragraph key={paragraph.heading + index}>
              {paragraph.heading && (
                <ParagraphHeading>{paragraph.heading}</ParagraphHeading>
              )}
              {paragraph.text && (
                <ParagraphText
                  dangerouslySetInnerHTML={{ __html: paragraph.text }}
                />
              )}
              {paragraph.imgUrl && (
                <Fragment>
                  <BlogImage contain src={paragraph.imgUrl} />
                  {entry.paragraphs.length - 1 == index && <WhiteSpace />}
                </Fragment>
              )}
            </Paragraph>
          ))}
        <Hr />
      </BlogPostBase>
    );
  }
};
export default BlogPost;
