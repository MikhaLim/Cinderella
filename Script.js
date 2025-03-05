function ToVerifyaMessage() {
    let userMessage = prompt('Input a message');

    let resultElement = document.getElementById('result');

    if (userMessage.includes('FR') && userMessage.includes('AI')) {
        resultElement.innerHTML = `The message "${userMessage}" is legitimate!`;
    } else if (userMessage.includes('FR')) {
        resultElement.innerHTML = `The message "${userMessage}" is legitimate!`;
    } else if (userMessage.includes('AI') || userMessage.includes('aI') || userMessage.includes('Ai')) {
        resultElement.innerHTML = `The message "${userMessage}" is fake!`;
    } else {
        resultElement.innerHTML = `The message "${userMessage}" is not yet encoded!`;
    }
}
