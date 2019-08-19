import { Component } from "react";
import styled from "styled-components";
import LogoIcon from "./LogoIcon";

const StyledLogo = styled(({ extra, light, ...rest }) => (
  <LogoIcon {...rest} />
))`
  max-width: 500px;
  align-self: center;
  .bondux_svg__svg-dark {
    fill: ${props => (props.light ? "white" : "#4A4A49")};
  }
  .bondux_svg__svg-orange {
    fill: ${props => (props.light ? "#4A4A49" : "#F5A100")};
    fill: ${props => (props.extra && props.light ? "white" : "")};
  }
  .bondux_svg__svg-dark-stroke {
    stroke: ${props => (props.light ? "white" : "#4A4A49")};
  }
  .bondux_svg__stroke-animation {
    stroke-dasharray: 100;
    stroke-dashoffset: 100;
    animation: dash 1s ease-in 1s forwards normal;
  }

  @keyframes dash {
    from {
      stroke-dashoffset: 100;
    }
    to {
      stroke-dashoffset: 0;
    }
  }
`;

class Logo extends Component {
  render() {
    return <StyledLogo {...this.props} />;
  }
}

export default StyledLogo;
