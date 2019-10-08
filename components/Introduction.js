import { Component } from "react";
import posed from "react-pose";
import SplitText from "react-pose-text";
import styled from "styled-components";
import Context from "./Context";
import Link from "next/link";
import Timer from "./helpers/Timer";

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
      showLine: null,
      timers: null
    };

    this.nextLine = () => {
      this.setState(prevstate => {
        if (
          prevstate.showLine <
          this.props.context.content[0].introduction.length - 1
        ) {
          return { showLine: prevstate.showLine + 1 };
        } else {
          return { showLine: prevstate.showLine };
        }
      });
    };
  }

  componentDidMount() {
    this.setState({ showLine: 0, timers: new Timer(this.nextLine, 3500) });
    // window.setTimeout(this.nextLine, 9000);
    // window.setTimeout(this.nextLine, 13000);
    // window.setTimeout(this.nextLine, 17000);
  }

  render() {
    const { context } = this.props;
    const { showLine, timers } = this.state;
    if (context.nav.open) {
      timers.pause();
    } else {
      timers && timers.resume();
    }
    return (
      <TextBox>
        {context.content[0].introduction.map((quote, index) => (
          <PosedLine
            initialPose="exit"
            className="overflow-hidden"
            pose={index === showLine && !context.nav.open ? "enter" : "exit"}
            key={quote.id}
          >
            <h1>
              <SplitText charPoses={charPoses}>{quote.string}</SplitText>
            </h1>
            {false && quote.link && (
              <Link href={quote.link.url}>{quote.link.label}</Link>
            )}
          </PosedLine>
        ))}
      </TextBox>
    );
  }
}

export default Introduction;
