import { Component } from "react";
import Link from "next/link";
import posed from "react-pose";
import SplitText from "react-pose-text";
import styled from "styled-components";

import delay from "lodash/debounce";

const TextBox = styled.div`
  max-width: 400px;
  text-align: center;
  margin: auto;
`;
const PosedLine = posed.div({
  exit: {
    opacity: "0",
    height: "0px"
  },
  enter: {
    opacity: "1",
    height: "100%",
    beforeChildren: true,
    staggerChildren: 20
  }
});

const charPoses = {
  exit: { opacity: 0 },
  enter: { opacity: 1 }
};

class Introduction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLine: 0
    };

    this.nextLine = () => {
      this.setState(prevstate => {
        if (prevstate.showLine < this.props.introductionLines.length - 1) {
          return { showLine: prevstate.showLine + 1 };
        } else {
          return { showLine: prevstate.showLine };
        }
      });
    };
  }

  componentDidMount() {
    window.setTimeout(this.nextLine, 3500);
    window.setTimeout(this.nextLine, 9000);
    window.setTimeout(this.nextLine, 13000);
    window.setTimeout(this.nextLine, 17000);
  }

  render() {
    const { introductionLines } = this.props;
    const { showLine } = this.state;
    return (
      <TextBox>
        {introductionLines.map((quote, index) => (
          <PosedLine
            initialPose="exit"
            className="overflow-hidden"
            pose={index === showLine ? "enter" : "exit"}
            key={quote.id}
          >
            <h1>
              <SplitText charPoses={charPoses}>{quote.string}</SplitText>
            </h1>
          </PosedLine>
        ))}
      </TextBox>
    );
  }
}

export default Introduction;
