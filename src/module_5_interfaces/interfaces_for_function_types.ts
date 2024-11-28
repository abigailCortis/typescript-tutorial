function CreateMovieId(name: string, id: number): string {
    return name + id;
}

interface StringGenerator {
    (chars: string, nums: number): string;
}

let IdGenerator: StringGenerator;
IdGenerator = CreateMovieId;
