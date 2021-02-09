import { Component } from 'react';
import styled from 'styled-components';
import Flip from 'react-reveal/Flip';
import Link from 'next/link';
import { Label } from './styles/Headings';

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
  opacity: ${(props) => (props.ssrReady ? '1' : '0')};
`;

const Text = styled(Label)`
  margin: 0;
  color: ${(props) => props.theme.colors.primary};
  cursor: default;
`;

class Introduction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ssrReady: false,
      intervalDuration: 3000,
      activeLine: 0,
    };
    this.timer = 0;
  }

  componentDidMount() {
    this.setState((prevState) => ({
      ...prevState,
      ssrReady: true,
    }));
    this.nextLine();
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  nextLine = () => {
    const maxLines = this.props.context.content.index.introduction.length;
    this.timer = setInterval(() => {
      this.state.ssrReady &&
        this.setState((prevState) => {
          if (prevState.activeLine + 1 < maxLines) {
            return { ...prevState, activeLine: prevState.activeLine + 1 };
          } else {
            return { ...prevState, activeLine: 0 };
          }
        });
    }, this.state.intervalDuration);
  };

  render() {
    const { context } = this.props;
    const { ssrReady, activeLine } = this.state;
    const quote = context.content.index.introduction[activeLine];

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
