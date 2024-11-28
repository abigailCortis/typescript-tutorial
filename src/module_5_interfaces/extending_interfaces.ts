// @ts-nocheck
interface LibraryResource {
    catalogueNumber: number;
}

interface Book {
    title: string;
}

interface Encyclopedia extends LibraryResource, Book {
    volume: number;
}

let refBook: Encyclopedia = {
    catalogueNumber: 1234,
    title: 'The Book of Everything',
    volume: 1
}