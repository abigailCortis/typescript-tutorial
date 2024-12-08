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

console.log('Beginning search ...');
getMoviesByDirector('George Lucas')
    .then(titles => {
        console.log(`Found titles: ${titles}`);
        throw 'something bad happened';
        return titles.length;
    }, reason => {return 0;})
    .then(numOfMovies => console.log(`Number of movies found: ${numOfMovies}`))
    .catch(reason => console.log(`Error: ${reason}`));
console.log('Search submitted ... ');