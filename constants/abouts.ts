import { Abouts } from '../models/models';
import images from './images';

export const abouts: Abouts[] = [
    {
        title: 'Web Development',
        description: 'I am a good web developer',
        imageURL: images.about01.src,
        width: images.about01.width,
        height: images.about01.height,
    },
    {
        title: 'Mobile Development',
        description: 'I am a good mobile developer',
        imageURL: images.about02.src,
        width: images.about02.width,
        height: images.about02.height,
    },
    {
        title: 'Game Development',
        description: 'I am a good game developer',
        imageURL: images.about03.src,
        width: images.about03.width,
        height: images.about03.height,
    },
    {
        title: 'Web Design',
        description: 'I am a good web designer',
        imageURL: images.about04.src,
        width: images.about04.width,
        height: images.about04.height,
    },
];
