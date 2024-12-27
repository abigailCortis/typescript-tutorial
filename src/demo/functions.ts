import { Movie } from "./interfaces";

export function GetAllMovies(): Movie[] {
    return [
        { title: 'A New Hope', director: 'George Lucas', yearReleased: 1977, streaming: true },
        { title: 'The Empire Strikes Back', director: 'Irvin Kershner', yearReleased: 1980, streaming: false },
        { title: 'Return of the Jedi', director: 'Richard Marquand', yearReleased: 1983, streaming: true },
        { title: 'The Phantom Menace', director: 'George Lucas', yearReleased: 1999, streaming: false },
        { title: 'Attack of the Clones', director: 'George Lucas', yearReleased: 2002, streaming: true },
        { title: 'Revenge of the Sith', director: 'George Lucas', yearReleased: 2005, streaming: true },
        { title: 'The Force Awakens', director: 'J.J. Abrams', yearReleased: 2015, streaming: false },
        { title: 'The Last Jedi', director: 'Rian Johnson', yearReleased: 2017, streaming: true },
        { title: 'The Rise of Skywalker', director: 'J.J. Abrams', yearReleased: 2019, streaming: true }
    ];
}

function GetReview(title: string): string | number {
    if (title == 'A New Hope') {
        return 'An instant classic!';
    }
    else {
        return Math.floor(Math.random() * 10);
    }
}

function getMoviesByDirector(director: string): Promise<string[]> {
    let p: Promise<string[]> = new Promise((resolve, reject) => {
        setTimeout(() => {
            let foundMovies: string[] = GetTitles(director);

            if(foundMovies.length > 0) {
                resolve(foundMovies);
            } else {
                reject('No movies found for that director.');
            }
        }, 2000);
    });

    return p;
}

export function PrintMovieInfo(movie: Movie) {

    console.log(`Title: ${movie.title}`);
    console.log(`Year Released: ${movie.yearReleased}`);
    console.log(`Director: ${movie.director}`);
}

export function GetTitles(director: string): string[];
export function GetTitles(director: string, streaming: boolean): string[];
export function GetTitles(director: string, streaming?: boolean): string[] {
    const allMovies = GetAllMovies();
    const searchResults: string[] = [];

    if (streaming !== undefined) {
        for (let movie of allMovies) {
            if (movie.director === director && movie.streaming === streaming) {
                searchResults.push(movie.title);
            }
        }
    } else {
        for (let movie of allMovies) {
            if (movie.director === director) {
                searchResults.push(movie.title);
            }
        }
    }
    return searchResults;
}

export async function logSearchResults(director: string) {
    let foundMovies = await getMoviesByDirector(director);
    console.log(foundMovies);
}

export function Purge<T>(inventory: Array<T>): Array<T> {
    // implement some fancy business logic 
    // return the purged items
    return inventory.splice(3, inventory.length);
}