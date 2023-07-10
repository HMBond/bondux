import { useEffect } from 'react';
import Introduction from '../components/Introduction';
import Logo from '../components/styled/Logo';
import WhiteSpace from '../components/styled/WhiteSpace';

const setLocation = (title, newLocation) => {
  if (location.pathname !== newLocation) {
    history.replaceState({}, title, newLocation);
  }
};

const Index = ({ context }) => {
  useEffect(() => {
    setLocation('Bondux.dev', '/');
  }, []);

  return (
    <>
      <Logo />
      <WhiteSpace height={'3rem'} />
      <Introduction context={context} />
      <WhiteSpace height={'6rem'} />
    </>
  );
};

export default Index;
