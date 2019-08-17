import { Component } from "react";
import styled from "styled-components";
import LogoIcon from "../../static/bondux.svg";
import { TimelineLite } from "gsap/umd/TweenMax";
import debounce from "lodash/debounce";

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
  constructor(props) {
    super(props);
    this.eyeTween = null;
  }

  moveEyes = debounce(
    (x, y) => {
      this.eyeTween.staggerTo(
        [".bondux_svg__right-eye", ".bondux_svg__left-eye"],
        0.5,
        {
          rotation: (Math.atan2(y, x) * 180) / Math.PI,
          transformOrigin: "5px 50%"
        }
      );
    },
    100,
    { leading: false, trailing: true }
  );

  googlyEyes = event => {
    let x = event.pageX;
    let y = event.pageY;
    let leftEye = document.getElementsByClassName("bondux_svg__left-eye")[0];
    let rightEye = document.getElementsByClassName("bondux_svg__right-eye")[0];
    let offsetsLeft = leftEye.getBoundingClientRect();
    let offsetsRight = rightEye.getBoundingClientRect();
    let xLeft = x - offsetsLeft.left;
    let yLeft = y - offsetsLeft.top;
    let xRight = x - offsetsRight.left;
    let yRight = y - offsetsRight.top;
    this.moveEyes(xRight, yLeft);
  };

  componentDidMount() {
    this.eyeTween = new TimelineLite();
    document.addEventListener("mousemove", this.googlyEyes);
  }

  componentWillUnmount() {
    document.removeEventListener("mousemove", this.googlyEyes);
  }

  render() {
    return <StyledLogo {...this.props} />;
  }
}

export default Logo;
