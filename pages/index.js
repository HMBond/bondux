import { useEffect } from 'react';
import Logo from '../components/styled/Logo.js';
import Introduction from '../components/Introduction.js';
import WhiteSpace from '../components/styled/WhiteSpace.js';

const setLocation = (title, newLocation) => {
  if (location.pathname !== newLocation) {
    history.replaceState({}, title, newLocation);
  }
};

const Index = ({ context }) => {
  useEffect(() => {
    setLocation('Bondux.dev', '/');
  });

  return (
    <>
      <Logo />
      <WhiteSpace />
      <Introduction context={context} />
    </>
  );
};

export default Index;
