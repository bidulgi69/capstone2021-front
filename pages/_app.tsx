import React from 'react';
import { ApolloProvider } from '@apollo/client';
import withApolloClient from '../libs/apolloClient'

type Props = {
    Component: React.FunctionComponent,
    pageProps: any,
    apollo: any,
}

const App = ({ Component, pageProps, apollo }: Props) => {
    React.useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles)
            jssStyles.parentElement.removeChild(jssStyles);
    }, [])

    return (
        <ApolloProvider client={apollo}>
            <Component {...pageProps} />
        </ApolloProvider>
    )
}

App.getInitialProps = async ({ ctx, Component }) => {
    const pageProps = await Component.getInitialProps?.(ctx);
    return { pageProps };
};

export default withApolloClient(App);