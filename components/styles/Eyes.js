import styled from "styled-components";

const LeftEye = styled.div`
  position: relative;
  width: 10px;
  height: 10px;
  left: 35%;
  top: -50%;
  background: red;
  border-radius: 50%;
  transform: none;

  animation: pop 0.2s ease-out 1s forwards normal;

  @keyframes pop {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
`;

const Eyes = props => {
  return <LeftEye {...props} />;
};

export default Eyes;
