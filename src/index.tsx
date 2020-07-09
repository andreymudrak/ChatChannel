import * as React from 'react';
import { render } from 'react-dom';
import { GlobalStyle } from './GlobalStyle';

const rootElement = document.getElementById('root');

render(
    <>
        <h3>test</h3>
        <GlobalStyle />
    </>,
    rootElement
);