const button = document.getElementById('get-joke-button');
const contentBox = document.getElementById('joke-content');
button.addEventListener('click', async function()
{
    const response = await fetch(' https://hindi-jokes-api.onrender.com/jokes?api_key=ad156c047dcfcae6406d6d337b0f');
    const data = await response.json();
    contentBox.innerText = data.jokeContent;
})