import { Component } from "react";
import styled from "styled-components";
import Flip from "react-reveal/Flip";
import Link from "next/link";
import { Label } from "./styles/Headings";

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

const Text = styled(Label)`
  margin: 0;
  color: ${props => props.theme.colors.primary};
  cursor: default;
`;

class Introduction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ssrReady: false,
      activeLine: null
    };
    this.timer = null;
  }

  componentDidMount() {
    this.setState({
      ssrReady: true,
      activeLine: 0
    });
  }

  componentDidUpdate() {
    if (this.props.context.nav.open) {
      this.state.ssrReady && clearTimeout(this.timer);
    } else {
      this.state.ssrReady && this.newTimer();
    }
  }

  componentWillUnmount() {
    this.state = { ssrReady: false, activeLine: 0 };
  }

  newTimer = () => {
    this.timer && clearTimeout(this.timer);
    this.timer = setTimeout(this.nextLine, 2500);
  };

  nextLine = () => {
    this.state.ssrReady &&
      this.setState(prevstate => {
        if (prevstate.activeLine < this.props.introductionLines.length - 1) {
          return { activeLine: prevstate.activeLine + 1 };
        } else {
          return { activeLine: 0 };
        }
      });
  };

  render() {
    const { introductionLines } = this.props;
    const { ssrReady, activeLine } = this.state;
    const quote = introductionLines[activeLine];

    return (
      <IntroductionBase>
        {!context.nav.open && quote && (
          <TextBox ssrReady={ssrReady} key={quote.text}>
            {quote.text && (
              <Text>
                <Flip right cascade>
                  {quote.text}
                </Flip>
              </Text>
            )}
            {quote.link && (
              <Link href={quote.link.url}>
                <Label>
                  <Flip right cascade>
                    {quote.link.label}
                  </Flip>
                </Label>
              </Link>
            )}
          </TextBox>
        )}
      </IntroductionBase>
    );
  }
}

export default Introduction;
