interface Movie {
    title: string,
    director: string,
    yearReleased: number,
    streaming: boolean,
    length?: number,
    logReview?: ReviewLogger
  }
  
  interface ReviewLogger {
    (review: string): void;
  }
  
  interface Person {
      name: string;
      email: string;
  }
  
  interface Director extends Person{
    numMoviesDirected: number;
  }
  
  interface CastMember extends Person {
      role: string;
      rehearse: (sceneNumber: number) => void
  }
  
  class Performer implements CastMember {
    role: string = "";
    name: string = "";
    email: string = "";
  
    rehearse(sceneNumber: number): void {
      console.log(`${this.name} is rehearsing scebe number ${sceneNumber}.`);
    }
  }
  
  function GetAllMovies(): Movie[] {
    return [
      { title: 'A New Hope', director: 'George Lucas', yearReleased: 1977, streaming: true },
      { title: 'The Empire Strikes Back', director: 'Irvin Kershner', yearReleased: 1980, streaming: false },
      { title: 'Return of the Jedi', director: 'Richard Marquand', yearReleased: 1983, streaming: true },
      { title: 'The Phantom Menace', director: 'George Lucas', yearReleased: 1999, streaming: false },
      { title: 'Attack of the Clones', director: 'George Lucas', yearReleased: 2002, streaming: true },
      { title: 'Revenge of the Sith', director: 'George Lucas', yearReleased: 2005, streaming: true },
      { title: 'The Force Awakens', director: 'J.J. Abrams', yearReleased: 2015, streaming: false },
      { title: 'The Last Jedi', director: 'Rian Johnson', yearReleased: 2017, streaming: true },
      { title: 'The Rise of Skywalker', director: 'J.J. Abrams', yearReleased: 2019, streaming: true }
    ];
  }
  
  function GetReview(title: string): string | number {
    if (title == 'A New Hope') {
      return 'An instant classic!';
    }
    else {
      return Math.floor(Math.random() * 10);
    }
  }
  
  function PrintMovieInfo(movie: Movie) {
  
    console.log(`Title: ${movie.title}`);
    console.log(`Year Released: ${movie.yearReleased}`);
    console.log(`Director: ${movie.director}`);
  }
  
  function GetTitles(director: string): string[];
  function GetTitles(director: string, streaming: boolean): string[];
  function GetTitles(director: string, streaming?: boolean): string[] {
    const allMovies = GetAllMovies();
    const searchResults: string[] = [];
  
    if(streaming !== undefined) {
      for(let movie of allMovies) {
        if(movie.director === director && movie.streaming === streaming) {
          searchResults.push(movie.title);
        }
      }
    } else {
      for(let movie of allMovies) {
        if(movie.director === director) {
          searchResults.push(movie.title);
        }
      }
    }
    return searchResults;    
  }
  
class Video {
  private _producer: string = '';
  static medium: string = 'Audio/Visual';

  get producer(): string {
    return this._producer.toUpperCase();
  }

  set producer(newProducer: string) {
    this._producer = newProducer;
  }

    constructor(public title: string, private year: number) {
        console.log('Creating a new Video ...');
    }

    printItem(): void {
        console.log(`${this.title} was released in ${this.year}`);
        console.log(`Medium: ${Video.medium}`);
    }
}

let vid: Video = new Video('Return of the Jedi', 1983);
vid.printItem();
vid.producer = 'Sci-Fi Pictures';
console.log(vid.producer);