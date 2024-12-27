import { Movie, Logger, CastMember as Actor } from './demo/interfaces';
import { Performer, Documentary, Favorites } from './demo/classes';
import * as Utility from './demo/functions';
import * as _ from "lodash";

let inventory: Array<Movie> = Utility.GetAllMovies();

inventory.forEach(movie => console.log(_.snakeCase(movie.title)));