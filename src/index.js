import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from '../src/Redux/store/store.js';
import AppRoutes from './Routers/AppRoutes';
import '../src/Styles/AllStyles.scss';


ReactDOM.render(
	<Provider store={store}>
		<AppRoutes />
	</Provider>,
	document.getElementById('root')
)
