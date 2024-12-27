import { Movie, Logger, CastMember as Actor } from './demo/interfaces';
import { Performer, Documentary, Favorites } from './demo/classes';
import * as Utility from './demo/functions';
import * as _ from "lodash";

let sportsDoc: Documentary = new Documentary('Baseball', 1994, 'History');
sportsDoc.printItem();

let allMovies = Utility.GetAllMovies();

// log top 3 movies
for (let i = 0; i < 3; i++) {
    console.log(`Rank ${i + 1}: ${allMovies[i].title}`);
}
