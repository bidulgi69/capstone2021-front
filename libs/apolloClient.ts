import ApolloClient, { InMemoryCache, NormalizedCacheObject } from 'apollo-boost'
import { withApollo } from "next-with-apollo";

const prod = process.env.NODE_ENV === 'production';

export default withApollo(
    ({ initialState }: { initialState: NormalizedCacheObject }) =>
        new ApolloClient({
            cache: new InMemoryCache().restore(initialState || {}),
            uri: prod ? '' : 'http://localhost:8080/graphql',
        })
);