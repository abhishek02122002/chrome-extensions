fetch("https://icanhazdadjoke.com/slack")
.then(response => response.json())
.then(jokedData => {const jokeText = jokedData.attachments[0].text
    const jokeElement = document.getElementById('joke-element');
    jokeElement.innerHTML = jokeText;


});