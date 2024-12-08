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

interface Director extends Person {
    numMoviesDirected: number;
}

interface CastMember extends Person {
    role: string;
    rehearse: (sceneNumber: number) => void
}

export { Movie, ReviewLogger as Logger, Person, Director, CastMember };