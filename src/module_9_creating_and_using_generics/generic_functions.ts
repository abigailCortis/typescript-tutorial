// @ts-nocheck

function LogAndReturn<T>(thing: T): T {
    console.log(thing);
    return thing;
}

let someString: string = LogAndReturn<string>('log this');

let newMag: Magazine = { title: 'Web Dev Monthly'};
let someMag: Magazine = LogAndReturn<Magazine>(newMag);