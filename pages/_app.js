import React from 'react';
import { ApolloProvider } from '@apollo/client';
import withApolloClient from '../libs/client'
import Head from 'next/head';
// MUI Core
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
// Utils
import theme from '../utils/theme';


const App = ({ Component, pageProps, apollo }) => {
    return (
        <ApolloProvider client={apollo}>
            <Head>
                <title>My App</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </ApolloProvider>
    )
}

export const getServerSideProps = async ({ ctx, Component }) => {
    const pageProps = await Component.getStaticProps?.(ctx);
    return { props: { ...pageProps } }
}

export default withApolloClient(App);