function showMessage() {
    let message: string = 'Welcome to a Typescript app';

    alert(message);

    let element = document.getElementById('welcome-msg');

    if (element) {
        element.innerHTML = 'Thanks for visiting!';
    }
}