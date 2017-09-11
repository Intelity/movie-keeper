import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { createProvider } from "react-redux";
import reducer from "./AddMovie/reducer/";
import App from "./App";
import "./index.css";

const Provider = createProvider();
const store = createStore(
	reducer,
	undefined,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
