import client from './cmsClient';
import { gql } from 'graphql-request';
import { Contact } from '../models/models';

export const createContact = async (contact: Partial<Contact>) => {
    type ResType = {
        createContact: Contact;
    };

    const mutation = gql`
        mutation CreateContact {
            createContact(
            data: {
                name: "${contact.name}",       
                email: "${contact.email}",
                message: "${contact.message}"
               }
            ) {
                email
                message
                name
                id
                createdAt
                updatedAt
            }
    }
    `;

    try {
        const result = await client.request<ResType>(mutation, { contact });

        return result.createContact;
    } catch (error) {
        console.log(error);
    }
};
