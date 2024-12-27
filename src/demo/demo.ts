import { Movie, Logger, CastMember as Actor } from './demo/interfaces';
import { Performer, Documentary, Favorites } from './demo/classes';
import * as Utility from './demo/functions';

let inventory: Array<Movie> = Utility.GetAllMovies();

let favoriteMovies: Favorites<Movie> = new Favorites<Movie>();
inventory.forEach(movie => favoriteMovies.add(movie));

let firstFave: Movie = favoriteMovies.getFirst();

let docs: Array<Documentary> = [
    new Documentary('Baseball', 1994, 'History'),
    new Documentary('In pursuit of Flavour', 2022, 'Wine'),
    new Documentary('Gumbo', 2018, 'Food')
];

let favouriteDocs: Favorites<Documentary> = new Favorites<Documentary>();
docs.forEach(doc => favouriteDocs.add(doc));

let firstDoc: Documentary = favouriteDocs.getFirst();

let faveNums: Favorites<number> = new Favorites<number>();
[1, 3.14, 42].forEach(num => faveNums.add(num));
