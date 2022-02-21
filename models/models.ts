export interface Abouts {
    id: string;
    title: string;
    description: string;
    imageUrl: {
        height: number;
        width: number;
        url: string;
    };
    createdAt: string;
}

export interface Works {
    id: string;
    createdAt: string;
    codeLink: string;
    projectLink: string;
    title: string;
    description: string;
    slug: string;
    imageUrl: {
        height: number | null;
        width: number | null;
        url: string;
    };
    tags: string[];
}
