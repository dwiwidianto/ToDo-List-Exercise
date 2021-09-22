import { ApolloClient, InMemoryCache } from "@apollo/client";


  const client = new ApolloClient({
    uri: 'https://graphql-basic.hasura.app/v1/graphql',
    cache: new InMemoryCache(),
    headers: {
        'x-hasura-admin-secret' : 'rKFTifnCnAe234k7VRUhyJ1WoyZ6TIEFSMSS0Fxdomtc7A2lT6Uvc04IPL376IN8'
    },
  });

export default client