function LogMessage(message: string): void {
    console.log(message);
}

// becomes

const logMessage = (message: string) => console.log(message);

logMessage('Enjoy the Movie');