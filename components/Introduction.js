import { Component } from "react";
import posed from "react-pose";
import SplitText from "react-pose-text";
import styled from "styled-components";
import Link from "next/link";
import uniqid from "uniqid";

const IntroductionBase = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const TextBox = styled.div`
  max-width: 400px;
  padding: 10px;
  text-align: center;
  opacity: ${props => (props.ssrReady ? "1" : "0")};
`;
const PosedLine = posed.div({
  exit: {
    opacity: 0,
    height: "0px"
  },
  enter: {
    opacity: 1,
    height: "100%",
    beforeChildren: true,
    staggerChildren: 20
  }
});

const charPoses = {
  exit: { opacity: 0, height: "0" },
  enter: { opacity: 1, height: "100%" }
};

const Text = styled.h2`
  margin: 0;
  cursor: pointer;
`;

const Label = styled.h2`
  margin: 0;
  color: ${props => props.theme.colors.accent};
  cursor: pointer;
`;

class Introduction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ssrReady: false,
      showLine: null
    };

    this.nextLine = () => {
      this.setState(prevstate => {
        if (
          prevstate.showLine <
          this.props.context.content[0].introduction.length - 1
        ) {
          return { showLine: prevstate.showLine + 1 };
        } else {
          return { showLine: 0 };
        }
      });
    };
  }

  componentDidMount() {
    this.setState({
      ssrReady: true,
      showLine: 0
    });
  }

  newTimer = () => {
    if (window.timer) {
      window.clearTimeout(window.timer);
    }
    window.timer = window.setTimeout(this.nextLine, 2500);
  };

  render() {
    const { context } = this.props;
    const { ssrReady, showLine } = this.state;

    if (context.nav.open) {
      ssrReady && window.clearTimeout(window.timer);
    } else {
      ssrReady && this.newTimer();
    }

    return (
      <IntroductionBase>
        <TextBox ssrReady={ssrReady}>
          {context.content[0].introduction.map((quote, index) => (
            <PosedLine
              initialPose="exit"
              pose={index === showLine ? "enter" : "exit"}
              key={uniqid()}
            >
              <Text>
                <SplitText charPoses={charPoses}>{quote.text}</SplitText>
              </Text>
              {quote.link && (
                <Link href={quote.link.url}>
                  <Label>
                    <SplitText charPoses={charPoses}>
                      {quote.link.label}
                    </SplitText>
                  </Label>
                </Link>
              )}
            </PosedLine>
          ))}
        </TextBox>
      </IntroductionBase>
    );
  }
}

export default Introduction;
