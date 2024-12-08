// @ts-nocheck

// person.ts
export interface Person { }

export function hireDeveloper(): void { }

export default class Employee { }

class Manager { } // not accessible outside the module

export { Person, hireDeveloper, Employee as StaffMember};

// player.ts
import {Person, hireDeveloper} from './person';
let human: Person;

import Worker from './person';
let engineer: Worker = new Worker();

import { StaffMember as CoWorker} from './person';
let emp: CoWorker = new CoWorker();

import * as HR from './person';
HR.hireDeveloper();