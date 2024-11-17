function GetReview(title: string): string | number {
    if (title == 'A New Hope') {
        return 'An instant classic!';
    } else {
        return Math.floor(Math.random() * 10);
    }
}
const mod_3_demo_movieTitle: string = 'A New Hope';

let mod_3_demo_movieReview: string | number = GetReview(movieTitle);

console.log(`Movie title: ${movieTitle}`);

if (typeof(movieReview == 'string')) {
    console.log(`Review: ${movieReview}`);
} else {
    console.log(`Rating: ${movieReview}/10`)
}