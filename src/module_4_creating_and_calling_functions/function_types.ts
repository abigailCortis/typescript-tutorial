function CreateMovieId(name: string, id: number): string {
    return name + id;
}

let x: number;
x = 5;

let IdGenerator: (chars: string, nums: number) => string;
IdGenerator = (name: string, id: number) => name + id;

let newId: string = CreateMovieId('jedi', 20);
console.log(newId);