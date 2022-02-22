// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // if the request is coming from graphCMS webhook call, we want to regenerate the (/) page
    if (req.method !== 'POST') {
        return res.status(500).send('Not a valid request method');
    }

    if (req.body.operation === 'publish') {
        console.log('Revalidating root path');
        await res.unstable_revalidate('/');
        console.log('Revalidate is complete');
    }

    res.status(200).send('Success');
}
