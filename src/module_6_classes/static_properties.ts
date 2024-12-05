class Library {
    constructor(public name: string) { }
    static description: string = 'A source of knowledge.';
}

let lib = new Library('New York Public Library');
let nameMod6 = lib.name; // available on instances of the class
let desc = Library.description; // available on the class
