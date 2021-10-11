import Page from '../components/Page';
import Context, { ContextProvider } from '../components/Context';

function App({ Component, pageProps }) {
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
