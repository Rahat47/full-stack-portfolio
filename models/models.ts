export interface Abouts {
    id: string;
    title: string;
    description: string;
    imageUrl: {
        height: number;
        width: number;
        url: string;
    };
    createdAt?: string;
}
