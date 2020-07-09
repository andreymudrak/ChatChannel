import * as React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { GlobalStyle } from './GlobalStyle';

const rootElement = document.getElementById('root');

render(
    <>
        <App />
        <GlobalStyle />
    </>,
    rootElement
);