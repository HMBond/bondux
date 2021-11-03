import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import WhiteSpace from '../components/styles/WhiteSpace';
import {
  PageTitle,
  SubTitle,
  SmallHeading,
} from '../components/styles/Headings';
import Paragraph, {
  ParagraphText,
  ParagraphHeading,
} from '../components/styles/Paragraph';

const CvPage = styled.div`
  display: grid;
`;

const CvRole = styled.div`
  margin-top: 1rem;
  font-family: 'DejaVu Condensed Bold';
  font-size: 1rem;
`;

const CvTimeSpan = styled.div`
  margin-top: 0.5rem;
  font-size: small;
`;

const Cv = ({ context }) => {
  return (
    <CvPage>
      <PageTitle>{'Curriculum Vitae'}</PageTitle>
      <SubTitle>{'WORK EXPERIENCE'}</SubTitle>
      {context.content.cv.experience.map((item) => {
        return (
          <Fade cascade big key={item.heading}>
            <Paragraph>
              {item.heading && (
                <ParagraphHeading>{item.heading}</ParagraphHeading>
              )}
              {item.role && <CvRole>{item.role}</CvRole>}
              {item.started && item.ended && (
                <CvTimeSpan>
                  {item.started} - {item.ended}
                </CvTimeSpan>
              )}
              {item.started && !item.ended && (
                <CvTimeSpan>{item.started} - present </CvTimeSpan>
              )}
              {item.text && (
                <ParagraphText
                  dangerouslySetInnerHTML={{ __html: item.text }}
                />
              )}
            </Paragraph>
          </Fade>
        );
      })}
      <WhiteSpace height={'3rem'} />
      <SubTitle>{'EDUCATION'}</SubTitle>
      {context.content.cv.education.map((item) => {
        return (
          <Fade cascade big key={item.heading}>
            <Paragraph>
              {item.heading && (
                <ParagraphHeading>{item.heading}</ParagraphHeading>
              )}
              {item.institude && <CvRole>{item.institude}</CvRole>}
              {item.started && item.ended && (
                <CvTimeSpan>
                  {item.started} - {item.ended}
                </CvTimeSpan>
              )}
              {item.started && !item.ended && (
                <CvTimeSpan>{item.started}</CvTimeSpan>
              )}
            </Paragraph>
          </Fade>
        );
      })}
      <WhiteSpace height={'5rem'} />
      <SubTitle>{'VOLUNTEER EXPERIENCE'}</SubTitle>
      {context.content.cv.volunteering.map((item) => {
        return (
          <Fade cascade big key={item.heading}>
            <Paragraph>
              {item.heading && <SmallHeading>{item.heading}</SmallHeading>}
              {item.institude && <CvRole>{item.institude}</CvRole>}
              {item.started && item.ended && (
                <CvTimeSpan>
                  {item.started} - {item.ended}
                </CvTimeSpan>
              )}
              {item.started && !item.ended && (
                <CvTimeSpan>{item.started}</CvTimeSpan>
              )}
            </Paragraph>
          </Fade>
        );
      })}
      <WhiteSpace />
    </CvPage>
  );
};

export default Cv;
