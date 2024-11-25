interface Book {
    id: number;
    title: string;
    author: string;
    pages?: number; //optional
    markDamaged: (reason: string) => void
}