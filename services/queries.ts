import { gql } from 'graphql-request';
import { Abouts, Experiences, Skill, Works } from '../models/models';
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

export const getSkills = async () => {
    type resType = {
        skills: Skill[];
    };

    const query = gql`
        query GetSkills {
            skills(orderBy: createdAt_DESC) {
                bgColor {
                    hex
                    css
                }
                createdAt
                icon {
                    height
                    url
                    width
                }
                id
                name
            }
        }
    `;

    const result = await client.request<resType>(query);

    return result.skills;
};

export const getExperiences = async () => {
    type resType = {
        experiences: Experiences[];
    };

    const query = gql`
        query GetExperiences {
            experiences(orderBy: createdAt_DESC) {
                createdAt
                year
                works(first: 10) {
                    company
                    createdAt
                    description
                    id
                    name
                }
                id
            }
        }
    `;

    const result = await client.request<resType>(query);

    return result.experiences;
};
