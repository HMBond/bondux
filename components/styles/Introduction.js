import { Component } from "react";
import Link from "next/link";
import posed from "react-pose";
import SplitText from "react-pose-text";
import delay from "lodash/debounce";

const PosedLine = posed.div({
  exit: {
    opacity: "0",
    height: "0px"
  },
  enter: {
    opacity: "1",
    height: "200px",
    beforeChildren: true,
    staggerChildren: 40
  }
});

const charPoses = {
  exit: { opacity: 0, y: "100%" },
  enter: { opacity: 1, y: "0" }
};

class Introduction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLineNumber: 0
    };
    this.nextLine = () => {
      this.setState(prevstate => {
        if (
          prevstate.showLineNumber <
          this.props.introductionLines.length - 1
        ) {
          return { showLineNumber: prevstate.showLineNumber + 1 };
        } else {
          return { showLineNumber: prevstate.showLineNumber };
        }
      });
    };
  }

  componentDidMount() {
    delay(this.nextLine, 2000);
  }

  render() {
    const { introductionLines } = this.props;
    const { showLineNumber } = this.state;
    return (
      <div>
        <button onClick={this.nextLine}>next</button>
        {introductionLines.map((quote, index) => (
          <PosedLine
            initialPose="exit"
            className="overflow-hidden"
            pose={index === showLineNumber ? "enter" : "exit"}
            key={quote.id}
          >
            <h1>
              <SplitText charPoses={charPoses}>{quote.string}</SplitText>
            </h1>
          </PosedLine>
        ))}
      </div>
    );
  }
}

export default Introduction;
