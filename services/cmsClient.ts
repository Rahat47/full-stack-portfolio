import { GraphQLClient } from 'graphql-request';

const endpoint = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!;
const apiToken = process.env.NEXT_PUBLIC_GRAPHCMS_TOKEN!;

const client = new GraphQLClient(endpoint, {
    headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${apiToken}`,
    },
});

export default client;
