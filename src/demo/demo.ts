import { Movie, Logger, CastMember as Actor } from './demo/interfaces';
import { Performer, Documentary } from './demo/classes';
import * as Utility from './demo/functions';

function getMoviesByDirector(director: string): Promise<string[]> {
    let p: Promise<string[]> = new Promise((resolve, reject) => {
        setTimeout(() => {
            let foundMovies: string[] = Utility.GetTitles(director);

            if(foundMovies.length > 0) {
                resolve(foundMovies);
            } else {
                reject('No movies found for that director.');
            }
        }, 2000);
    });

    return p;
}

async function logSearchResults(director: string) {
    let foundMovies = await getMoviesByDirector(director);
    console.log(foundMovies);
}

console.log('Beginning search ...');
logSearchResults('Wilson')
    .catch(reason => console.log(reason))
console.log('Search submitted ... ');