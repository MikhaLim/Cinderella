function ToVerifyaMessage () {
    let input = prompt('Input a message');

    if (input.indexOf('FR') !==  -1) {
        document.getElementById('result').innerHTML = 'The message "' + input + '" is legitimate!';
    } else if (input.indexOf('FR') !==  -1 && input.indexOf('AI') !==  -1) {
        document.getElementById('result').innerHTML = 'The message "' + input + '" is legitimate!';
    } else if (input.indexOf('AI') !== -1) {
        document.getElementById('result').innerHTML = 'The message "' + input + '" is fake!';
    } else if (input.indexOf('aI') !==  -1 || input.indexOf('Ai') !==  -1) {
        document.getElementById('result').innerHTML = 'The message "' + input + '" is fake!';
    } else {
        document.getElementById('result').innerHTML = 'The message "' + input + '" is not yet encoded!';
    }
}
