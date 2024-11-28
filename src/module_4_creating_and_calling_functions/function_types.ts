function CreateMovieIdMod4(name: string, id: number): string {
    return name + id;
}

let x: number;
x = 5;

let IdGeneratorMod4: (chars: string, nums: number) => string;
IdGenerator = (name: string, id: number) => name + id;

let newId: string = CreateMovieId('jedi', 20);
console.log(newId);