function GetAllMovies() {
    return [
        {title: 'A New Hope', director: 'George Lucas', yearReleased: 1977, streaming: true},
        {title: 'The Empire Strikes Back', director: 'Irvin Kershner', yearReleased: 1980, streaming: false},
        {title: 'Return of the Jedi', director: 'Richard Marquand', yearReleased: 1983, streaming: true},
        {title: 'The Phantom Menace', director: 'George Lucas', yearReleased: 1999, streaming: false},
        {title: 'Attack of the Clones', director: 'George Lucas', yearReleased: 2002, streaming: true},
        {title: 'Revenge of the Sith', director: 'George Lucas', yearReleased: 2005, streaming: true},
        {title: 'The Force Awakens', director: 'J.J. Abrams', yearReleased: 2015, streaming: false},
        {title: 'The Last Jedi', director: 'Rian Johnson', yearReleased: 2017, streaming: true},
        {title: 'The Rise of Skywalker', director: 'J.J. Abrams', yearReleased: 2019, streaming: true}
    ];
}

function GetTitles(director: string): string[];
function GetTitles(director: string, streaming: boolean): string[];
function GetTitles(director: string, streaming?: boolean): string[] {
    const allMovies = GetAllMovies();
    const searchResults: string[] = [];

    if (streaming != undefined) {
        for (let movie of allMovies) {
            if (movie.director === director && movie.streaming === streaming) {
                searchResults.push(movie.title);
            }
        }
    } else {
        for(let movie of allMovies) {
            if (movie.director === director) {
                searchResults.push(movie.title);
            }
        }
    }

    return searchResults;
}

let movies: string[] = GetTitles('George Lucas', false);
movies.forEach(title => console.log(title));