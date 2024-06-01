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
				<BrowserRouter>
					<AppRouter />
				</BrowserRouter>
			</PersistGate>
		</Provider>
	);
}

export default App;
