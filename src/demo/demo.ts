import { Movie, Logger, CastMember as Actor } from './demo/interfaces';
import { Performer, Documentary } from './demo/classes';
import * as Utility from './demo/functions';

let inventory: Array<Movie> = Utility.GetAllMovies();

let purgedMovies: Array<Movie> = Utility.Purge(inventory);

purgedMovies.forEach(movie => console.log(movie.title));

let purgedNums: Array<number> = Utility.Purge<number>([1, 2, 3, 4, 5]);
console.log(purgedNums);
