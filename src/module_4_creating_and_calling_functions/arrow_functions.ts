let squareit = x => x * x; // 16

let result = squareit(4);

let adder = (a, b) => a + b;
let sum = adder(2, 3); // 5

let arrow_function_greeting = () => console.log('Hello World');
arrow_function_greeting(); // Hello World

let scores: number[] = [70, 125, 85, 110];
let highscores: number[];
highscores = scores.filter((element, index, array) => {
    if (element > 100) {
        return true;
    }
});