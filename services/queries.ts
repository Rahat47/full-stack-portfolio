import { gql } from 'graphql-request';
import { Abouts } from '../models/models';
import client from './cmsClient';

export const getAbouts = async () => {
    type resType = {
        abouts: Abouts[];
    };

    const query = gql`
        query GetAbouts {
            abouts(first: 10) {
                createdAt
                id
                description
                title
                imageUrl {
                    height
                    width
                    url
                }
            }
        }
    `;

    const result = await client.request<resType>(query);

    return result.abouts;
};
