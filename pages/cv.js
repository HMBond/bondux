import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import WhiteSpace from '../components/styles/WhiteSpace';
import { PageTitle, SubTitle } from '../components/styles/Headings';
import Paragraph, {
  ParagraphText,
  ParagraphHeading,
} from '../components/styles/Paragraph';

const CvPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Cv = ({ context }) => {
  return (
    <CvPage>
      <PageTitle>{'Curriculum Vitae'}</PageTitle>
      <SubTitle>{'EXPERIENCE'}</SubTitle>
      {context.content.cv.experience.paragraphs.map((paragraph) => {
        return (
          <Fade cascade big key={paragraph.heading}>
            <Paragraph>
              {paragraph.heading && (
                <ParagraphHeading>{paragraph.heading}</ParagraphHeading>
              )}
              {paragraph.text && (
                <ParagraphText
                  dangerouslySetInnerHTML={{ __html: paragraph.text }}
                />
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
