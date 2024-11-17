function GetReview(title: string): string | number {
    if (title == 'A New Hope') {
        return 'An instant classic!';
    } else {
        return Math.floor(Math.random() * 10);
    }
}
const mod_3_demo_movieTitle: string = 'A New Hope';

let mod_3_demo_movieReview: string | number = GetReview(mod_3_demo_movieTitle);

console.log(`Movie title: ${mod_3_demo_movieTitle}`);

if (typeof(mod_3_demo_movieReview == 'string')) {
    console.log(`Review: ${mod_3_demo_movieReview}`);
} else {
    console.log(`Rating: ${mod_3_demo_movieReview}/10`)
}