import { CookiesProvider } from "react-cookie";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import AppRouter from "./components/AppRouter";
import store,{ persistor } from "./store/store";

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
