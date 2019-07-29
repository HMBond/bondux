import styled from "styled-components";
import LogoIcon from "../../static/bondux.svg";

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
`;

const Logo = props => {
  return <StyledLogo {...props} />;
};

export default Logo;
