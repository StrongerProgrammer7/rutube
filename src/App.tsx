import { Provider } from 'react-redux';
import store,{ persistor } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { CookiesProvider } from 'react-cookie';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';

function App()
{


  return (
    <Provider store={store}>
      <PersistGate loading={"...loading"} persistor={persistor}>
        <CookiesProvider defaultSetOptions={{ path: "/" }} >
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </CookiesProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
