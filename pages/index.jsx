import Introduction from '../components/Introduction';
import Contact from './contact';

const setLocation = (title, newLocation) => {
  if (location.pathname !== newLocation) {
    history.replaceState({}, title, newLocation);
  }
};

const Index = ({ context }) => (
  <>
    <Introduction context={context} />
    <Contact context={context} />
  </>
);

export default Index;
