import React from 'react';
import GlobalStyle from './src/styles/GlobalStyle';

export const wrapPageElement = ({ element }) => (
    <>
        <GlobalStyle />
        {element}
    </>
)
/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it
