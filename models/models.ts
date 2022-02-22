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

export interface Skill {
    id: string;
    name: string;
    bgColor: {
        hex: string;
        css: string;
    };
    createdAt: string;
    icon: {
        height: number;
        width: number;
        url: string;
    };
}

export interface WorkExperiences {
    id: string;
    createdAt: string;
    company: string;
    description: string;
    name: string;
}

export interface Experiences {
    id: string;
    createdAt: string;
    year: string;
    works: WorkExperiences[];
}
