import React from 'react';
import ReactDOM from 'react-dom';
import App from 'src/App/App';
import 'src/assets/scss/index.scss';
import { StateProvide } from './StateProvider';
import { initialState, reducer } from './reducer';

ReactDOM.render(
    <React.StrictMode>
        <StateProvide initialState={initialState} reducer={reducer}>
            <App />
        </StateProvide>
    </React.StrictMode>,
    document.getElementById('root')
);
