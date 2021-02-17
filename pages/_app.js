import React from 'react';
import { ApolloProvider } from '@apollo/client';
import withApolloClient from '../libs/client'
import Head from 'next/head';
// MUI Core
import { ThemeProvider as MaterialUiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
// Utils
import { theme, lightTheme, darkTheme } from '../utils/theme';
import { global as GlobalStyles } from '../utils/global';
// Redux
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from "../src/modules";
import Cookies from 'js-cookie';

const store = createStore(reducer, composeWithDevTools(applyMiddleware()))

const App = ({ Component, pageProps, apollo }) => {
    const [ toggle, setToggle ] = React.useState(Cookies.get('dove-dark-mode'));
    const toggleTheme = () => {
        const toggled = !toggle;
        setToggle(toggled)
        Cookies.set('dove-dark-mode', toggled);
    }

    return (
        <Provider store={store}>
            <ApolloProvider client={apollo}>
                <Head>
                    <title>My App</title>
                    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                </Head>
                <MaterialUiThemeProvider theme={theme}>
                    <StyledThemeProvider theme={toggle ? darkTheme : lightTheme}>
                        <button style={{ width: '80pt', height: '30pt', border: '0px solid #000', borderRadius: '12pt', backgroundColor: '#FFE94A' }}
                            onClick={() => toggleTheme()}>
                            <span style={{ color: '#FFF', fontWeight: 'bold', fontSize: '14px' }}>
                                {!toggle ? 'dark mode' : 'light mode'}
                            </span>
                        </button>
                        <GlobalStyles />
                        <Component {...pageProps} />
                    </StyledThemeProvider>
                </MaterialUiThemeProvider>
            </ApolloProvider>
        </Provider>
    )
}

export const getServerSideProps = async ({ ctx, Component }) => {
    const pageProps = await Component.getStaticProps?.(ctx);
    return { props: { ...pageProps } }
}

export default withApolloClient(App);