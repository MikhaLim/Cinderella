function checkMessage() {
    let message = prompt("Enter a message:");

    if (message.indexOf("FR") !== -1 && message.indexOf("AI") !== -1) {
        document.getElementById("output").innerHTML = `The message "${message}" is legitimate!`;
    } else if (message.indexOf("FR") !== -1) {
        document.getElementById("output").innerHTML = `The message "${message}" is legitimate!`;
    } else if (message.indexOf("AI") !== -1 || message.indexOf("aI") !== -1 || message.indexOf("Ai") !== -1) {
        document.getElementById("output").innerHTML = `The message "${message}" is tampered with!`;
    } else {
        document.getElementById("output").innerHTML = `The message "${message}" is not yet encoded!`;
    }
}
