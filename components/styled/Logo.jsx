import debounce from 'lodash/debounce';
import { Component } from 'react';
import styled, { css } from 'styled-components';

const StyledSvg = styled.svg`
  max-width: 500px;
  justify-self: center;
  align-self: center;
`;

const Path = styled.path`
  ${(props) =>
    props.colorClass === 'svg-dark' &&
    css`
      fill: ${(props) =>
        props.light ? props.theme.colors.bg : props.theme.colors.primary};
    `}
  ${(props) =>
    props.colorClass === 'svg-orange' &&
    css`
      fill: ${(props) =>
        props.light ? props.theme.colors.bg : props.theme.colors.accent};
    `}
  ${(props) =>
    props.colorClass === 'svg-dark-stroke-animation' &&
    css`
      stroke: ${(props) =>
        props.light ? props.theme.colors.bg : props.theme.colors.primary};
      stroke-dasharray: 100;
      stroke-dashoffset: 100;
      animation: ${(props) =>
        props.light ? '' : 'dash 1s ease-in 0.5s forwards normal'};
    `}

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
    this.state = { leftEyeRotation: 10, rightEyeRotation: 0, popEyes: false };
    this.leftEye = null;
    this.rightEye = null;
    this.popEyesTimer = null;
    this.popEyesEndTimer = null;
  }

  componentDidMount() {
    addEventListener('mousemove', this.googlyEyes);
    this.leftEye = document.querySelector('circle[class=logo-left-eye]');
    this.rightEye = document.querySelector('circle[class=logo-right-eye]');
    this.popEyesTimer = setTimeout(this.popEyes, 20000);
  }

  componentWillUnmount() {
    removeEventListener('mousemove', this.googlyEyes);
    this.popEyesTimer && clearTimeout(this.popEyesTimer);
    this.popEyesEndTimer && clearTimeout(this.popEyesEndTimer);
    this.moveEyes && this.moveEyes.cancel();
  }

  popEyes = () => {
    this.setState({
      leftEyeRotation: 0,
      rightEyeRotation: 0,
      popEyes: true,
    });
    this.popEyesEndTimer = setTimeout(this.unPopEyes, 4000);
  };

  unPopEyes = () =>
    this.setState({
      leftEyeRotation: 840,
      rightEyeRotation: -765,
      popEyes: false,
    });

  googlyEyes = (event) => {
    let x = event.pageX;
    let y = event.pageY;
    let xLeft = x - this.leftEye.getBoundingClientRect().left;
    let yLeft = y - this.leftEye.getBoundingClientRect().top;
    let xRight = x - this.rightEye.getBoundingClientRect().left;
    let yRight = y - this.rightEye.getBoundingClientRect().top;
    this.moveEyes(xLeft, yLeft, xRight, yRight);
  };

  moveEyes = debounce(
    (xLeft, yLeft, xRight, yRight) => {
      this.setState({
        leftEyeRotation: (Math.atan2(yLeft, xLeft) * 180) / Math.PI,
        rightEyeRotation: (Math.atan2(yRight, xRight) * 180) / Math.PI,
      });
    },
    500,
    { leading: false, trailing: true }
  );

  render() {
    const { leftEyeRotation, rightEyeRotation, popEyes } = this.state;
    return (
      <StyledSvg version="1.0" viewBox="0 0 250 100" {...this.props}>
        <Path
          {...this.props}
          colorClass="svg-dark"
          d="M46.708 47.654c2.016 2.136 3.023 4.98 3.023 8.532 0 4.32-1.536 7.608-4.607 9.864-3.073 2.256-7.657 3.384-13.753 3.384H9.484v-50.4h20.448c5.328 0 9.504 1.104 12.528 3.312 3.023 2.208 4.535 5.376 4.535 9.504 0 3.024-.816 5.521-2.447 7.488-1.633 1.969-3.889 3.36-6.769 4.176 3.936.625 6.913 2.005 8.929 4.14zm-34.776-26.46v21.6h18.072c4.655 0 8.255-.923 10.8-2.772 2.544-1.847 3.815-4.523 3.815-8.028 0-3.503-1.271-6.18-3.815-8.028-2.545-1.848-6.145-2.772-10.8-2.772H11.932zm31.391 43.344c2.64-1.824 3.96-4.632 3.96-8.424 0-3.84-1.32-6.671-3.96-8.496-2.64-1.824-6.576-2.736-11.808-2.736H11.932v22.392h19.584c5.231 0 9.168-.911 11.807-2.736zm16.453 2.7c-2.808-1.608-5.004-3.852-6.588-6.732-1.584-2.88-2.376-6.144-2.376-9.792 0-3.647.792-6.912 2.376-9.792 1.584-2.88 3.78-5.123 6.588-6.732 2.808-1.607 5.94-2.412 9.396-2.412 3.504 0 6.648.804 9.433 2.412 2.783 1.609 4.968 3.852 6.552 6.732 1.584 2.88 2.376 6.145 2.376 9.792 0 3.648-.792 6.912-2.376 9.792-1.584 2.88-3.769 5.125-6.552 6.732-2.784 1.608-5.929 2.412-9.433 2.412-3.456 0-6.589-.803-9.396-2.412zm17.568-1.872c2.423-1.416 4.331-3.396 5.724-5.94 1.392-2.544 2.088-5.447 2.088-8.712 0-3.263-.696-6.156-2.088-8.676-1.393-2.52-3.301-4.488-5.724-5.904-2.425-1.416-5.148-2.124-8.173-2.124-3.023 0-5.748.708-8.172 2.124-2.424 1.416-4.332 3.384-5.724 5.904-1.393 2.52-2.088 5.413-2.088 8.676 0 3.265.695 6.168 2.088 8.712 1.392 2.544 3.3 4.524 5.724 5.94 2.424 1.416 5.148 2.124 8.172 2.124 3.024 0 5.748-.708 8.173-2.124z"
        />
        <Path
          {...this.props}
          colorClass="svg-dark"
          d="M115.724 35.846c2.688 2.712 4.031 6.588 4.031 11.628v21.96h-2.376V47.618c0-4.416-1.115-7.787-3.348-10.116-2.232-2.328-5.412-3.492-9.54-3.492-4.656 0-8.328 1.38-11.016 4.14-2.689 2.761-4.032 6.469-4.032 11.124v20.16h-2.376V32.066h2.304v9.144c1.199-2.927 3.132-5.231 5.796-6.912 2.664-1.679 5.844-2.52 9.54-2.52 4.655.001 8.327 1.357 11.017 4.068z"
        />
        <Path
          {...this.props}
          colorClass="svg-dark"
          d="M155.651 19.01v50.424h-2.304V59.21c-1.393 3.265-3.517 5.821-6.372 7.668-2.856 1.849-6.108 2.772-9.756 2.772-3.409 0-6.505-.803-9.288-2.412-2.784-1.608-4.98-3.852-6.588-6.732-1.609-2.88-2.412-6.144-2.412-9.792 0-3.647.803-6.912 2.412-9.792 1.607-2.88 3.804-5.123 6.588-6.732 2.783-1.607 5.879-2.412 9.288-2.412 3.6 0 6.827.912 9.684 2.736 2.855 1.825 4.979 4.345 6.372 7.56V19.01h2.376zm-10.187 46.356c2.423-1.416 4.331-3.396 5.724-5.94 1.392-2.544 2.088-5.447 2.088-8.712 0-3.263-.696-6.156-2.088-8.676-1.393-2.52-3.301-4.488-5.724-5.904-2.425-1.416-5.148-2.124-8.173-2.124-3.023 0-5.748.708-8.172 2.124-2.424 1.416-4.332 3.384-5.724 5.904-1.393 2.52-2.088 5.413-2.088 8.676 0 3.265.695 6.168 2.088 8.712 1.392 2.544 3.3 4.524 5.724 5.94 2.424 1.416 5.148 2.124 8.172 2.124 3.025 0 5.748-.708 8.173-2.124z"
        />
        <Path
          {...this.props}
          colorClass="svg-orange"
          d="M164.668 66.974c-1.802-1.742-2.702-4.183-2.702-7.326v-11.56h7.086v11.35c0 1.542.275 2.662.825 3.363.551.701 1.346 1.051 2.387 1.051s1.836-.35 2.387-1.051c.551-.7.826-1.821.826-3.363v-11.35h6.966v11.56c0 3.143-.901 5.585-2.702 7.326-1.802 1.741-4.314 2.612-7.536 2.612-3.224 0-5.736-.871-7.537-2.612zm34.019 2.132l-3.633-5.615-3.543 5.615h-8.077l7.596-10.599-7.326-10.419h7.957l3.573 5.284 3.483-5.284h7.626l-7.296 10.149 7.747 10.869h-8.107z"
        />
        <Path
          {...this.props}
          colorClass="svg-dark"
          d="M205.248 58.857a.637.637 0 01-.19-.47c0-.187.067-.343.2-.47a.647.647 0 01.46-.19c.187 0 .343.064.47.19.127.127.19.284.19.47a.64.64 0 01-.19.47.639.639 0 01-.47.19.639.639 0 01-.47-.19zm14.222-10.806v16.05h-.64v-2.842c-.387.908-.978 1.618-1.772 2.132s-1.699.771-2.712.771c-.948 0-1.809-.223-2.582-.671-.774-.447-1.385-1.071-1.832-1.872s-.67-1.708-.67-2.722.223-1.922.67-2.722a4.848 4.848 0 011.832-1.872c.774-.447 1.634-.671 2.582-.671 1.001 0 1.898.254 2.692.761a4.599 4.599 0 011.772 2.102v-8.444h.66zm-2.832 14.92a4.216 4.216 0 001.592-1.651c.387-.707.58-1.515.58-2.422 0-.907-.193-1.711-.58-2.412a4.23 4.23 0 00-1.592-1.641c-.674-.393-1.431-.591-2.272-.591-.841 0-1.598.197-2.272.591a4.236 4.236 0 00-1.592 1.641c-.387.701-.58 1.505-.58 2.412 0 .908.193 1.715.58 2.422a4.21 4.21 0 001.592 1.651c.674.394 1.431.591 2.272.591.841-.001 1.598-.198 2.272-.591zm13.842-3.974h-9.108c.013.881.22 1.668.62 2.362a4.234 4.234 0 001.652 1.621c.7.387 1.484.581 2.352.581.707 0 1.361-.13 1.962-.39.6-.26 1.094-.644 1.481-1.151l.42.44a4.685 4.685 0 01-1.701 1.261 5.3 5.3 0 01-2.162.44c-1.014 0-1.919-.223-2.712-.671a4.853 4.853 0 01-1.872-1.872c-.454-.801-.681-1.708-.681-2.722s.21-1.922.63-2.722a4.648 4.648 0 011.752-1.872c.747-.447 1.581-.671 2.502-.671.907 0 1.732.22 2.472.661a4.703 4.703 0 011.752 1.842c.427.788.641 1.682.641 2.682v.181zm-6.966-4.223a4.018 4.018 0 00-1.501 1.511 4.75 4.75 0 00-.621 2.172h8.467a4.863 4.863 0 00-.65-2.172 4.123 4.123 0 00-1.502-1.511c-.62-.36-1.318-.54-2.092-.54a4.122 4.122 0 00-2.101.54zm16.887-1.061l-4.744 10.389h-.661l-4.744-10.389h.72l4.364 9.648 4.364-9.648h.701z"
        />
        <Path
          {...this.props}
          colorClass="svg-dark-stroke-animation"
          fill="none"
          stroke="var(--theme-foreground-color)"
          strokeWidth="2"
          strokeMiterlimit="10"
          d="M88.668 78.459c8.75 8.75 21.166 8.833 30 0"
        />
        <circle
          style={{
            transform: popEyes ? 'scale(1.2)' : `rotate(${leftEyeRotation}deg)`,
            transformOrigin: '69px 50px',
            transition: popEyes
              ? 'transform 2s linear 1s'
              : 'transform 0.4s ease',
            fill: this.props.light
              ? 'transparent'
              : 'var(--theme-accent-color)',
          }}
          className="logo-left-eye"
          r="10"
          cx={popEyes ? '70' : '74'}
          cy="50"
        />
        <circle
          style={{
            transform: popEyes
              ? 'scale(1.3)'
              : `rotate(${rightEyeRotation}deg)`,
            transformOrigin: '137px 50px',
            transition: popEyes
              ? 'transform 2s linear 1s'
              : 'transform 0.4s ease',
            fill: this.props.light
              ? 'transparent'
              : 'var(--theme-accent-color)',
          }}
          className="logo-right-eye"
          r="10"
          cx={popEyes ? '138' : '142'}
          cy="50"
        />
      </StyledSvg>
    );
  }
}

export default Logo;
