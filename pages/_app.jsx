import '../global.css';
import Page from '../components/Page';
import Context, { ContextProvider } from '../components/Context';
import { useEffect } from 'react';

function App({ Component, pageProps }) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js').then(
          function (registration) {
            console.log(
              'Service Worker registration successful with scope: ',
              registration.scope
            );
          },
          function (err) {
            console.log('Service Worker registration failed: ', err);
          }
        );
      });
    } else {
      console.log('no serviceWorker in navigator');
    }
  }, []);

  return (
    <ContextProvider>
      <Context.Consumer>
        {(context) => (
          <Page context={context}>
            <Component context={context} {...pageProps} />
          </Page>
        )}
      </Context.Consumer>
    </ContextProvider>
  );
}

export default App;
