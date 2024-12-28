const jokeLoader = document.getElementById("jokeBtn");
const jokeTextArea = document.getElementById("joke")
jokeLoader.addEventListener('click', loadJokeCallback)


const dadJokeUrl = "https://icanhazdadjoke.com";
config = {headers: {'Accept': "application/json"}}

loadJokeCallback();

async function loadJokeCallback() {
    const response = await fetch(dadJokeUrl, config);
    const jsonResponse = await response.json();
    jokeTextArea.innerText = jsonResponse.joke;
}   