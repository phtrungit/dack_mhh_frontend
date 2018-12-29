import { AppContainer } from 'react-hot-loader';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './plugins/OwlCarousel2-2.2.1/owl.carousel.css';
import './plugins/OwlCarousel2-2.2.1/owl.theme.default.css';
import './plugins/OwlCarousel2-2.2.1/animate.css';
import './styles/main_styles.css';
import './styles/responsive.css';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers'
import configureStore from './store'
const history = createBrowserHistory();

const initialState = window.__INITIAL_STATE__
const store = configureStore(initialState,history);

const render = () => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <App history={history} />
            </Provider>
        </AppContainer>,
        document.getElementById('root')
    )
}

render()

// Hot reloading
if (module.hot) {
    // Reload components
    module.hot.accept('./App', () => {
        render()
    })

    // Reload reducers
    module.hot.accept('./reducers', () => {
        store.replaceReducer(rootReducer(history))
    })
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
