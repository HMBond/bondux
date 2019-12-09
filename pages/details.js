import styled from "styled-components";
import Context from "../components/Context";

import Fade from "react-reveal/Fade";
import WhiteSpace from "../components/styles/WhiteSpace";
import {
  Title,
  SubTitle as DetailsSubTitle
} from "../components/styles/Headings";
import Paragraph, {
  ParagraphText,
  ParagraphHeading
} from "../components/styles/Paragraph";

const DetailsPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DetailsTitle = styled(Title)`
  margin-top: 4rem;
`;

const Details = () => {
  return (
    <Context.Consumer>
      {context => (
        <DetailsPage>
          <DetailsTitle>{"Details"}</DetailsTitle>
          <DetailsSubTitle>{"HOW I Work"}</DetailsSubTitle>
          {context.content
            .find(page => page.url == "/details")
            .paragraphs.map(paragraph => {
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
        </DetailsPage>
      )}
    </Context.Consumer>
  );
};

export default Details;
