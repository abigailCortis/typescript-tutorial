import { Movie, Logger, CastMember as Actor } from './demo/interfaces';
import { Performer, Documentary, Favorites } from './demo/classes';
import * as Utility from './demo/functions';
import * as _ from "lodash";

let sportsDoc: Documentary = new Documentary('Baseball', 1994, 'History');
sportsDoc.printItem();