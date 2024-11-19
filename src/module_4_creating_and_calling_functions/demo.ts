function GetReview(title: string): string | number {
    if (title == 'A New Hope') {
        return 'An instant classic!';
    } else {
        return Math.floor(Math.random() * 10);
    }
}

function PrintMovieInfo(title: string, yearReleased:number, ...cast: string[]) {
    console.log(`Title: ${title}`);
    console.log(`Year Releasedd: ${yearReleased}`);

    console.log('Cast:');
    for(const name of cast) {
        console.log(`  ${name}`);
    }
}

PrintMovieInfo('A New Hope', 1977, 'Carrie', 'Mark', 'Harrison');