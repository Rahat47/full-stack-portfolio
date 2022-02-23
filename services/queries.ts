import { gql } from 'graphql-request';
import {
    Abouts,
    Brands,
    Experiences,
    Skill,
    Testimonials,
    Works,
} from '../models/models';
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
                    rgba {
                        r
                        g
                        b
                        a
                    }
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

export const getBrands = async () => {
    type resType = {
        brands: Brands[];
    };

    const query = gql`
        query GetBrands {
            brands(orderBy: createdAt_DESC) {
                id
                createdAt
                imageUrl {
                    height
                    width
                    url
                }
                title
            }
        }
    `;

    const result = await client.request<resType>(query);

    return result.brands;
};

export const getTestimonials = async () => {
    type resType = {
        testimonials: Testimonials[];
    };

    const query = gql`
        query GetTestimonials {
            testimonials(orderBy: createdAt_DESC) {
                company
                createdAt
                feedback
                id
                imageUrl {
                    height
                    url
                    width
                }
                name
            }
        }
    `;

    const result = await client.request<resType>(query);

    return result.testimonials;
};
