import { gql } from 'graphql-request';
import { Abouts, Works } from '../models/models';
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

export const getWorks = async () => {
    type resType = {
        works: Works[];
    };

    const query = gql`
        query GetWorks {
            works(first: 100) {
                codeLink
                createdAt
                description
                id
                projectLink
                imageUrl {
                    height
                    url
                    width
                }
                slug
                tags
                title
            }
        }
    `;

    const result = await client.request<resType>(query);

    return result.works;
};
