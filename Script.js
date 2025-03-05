function checkMessage() {
    let message = prompt("Enter a message:");

    if (message.includes("FR") && message.includes("AI")) {
        document.getElementById("output").innerHTML = `The message "${message}" is legitimate!`;
    } else if (message.includes("FR")) {
        document.getElementById("output").innerHTML = `The message "${message}" is legitimate!`;
    } else if (message.includes("AI")) {
        document.getElementById("output").innerHTML = `The message "${message}" is tampered with!`;
    } else if (message.includes("aI") || message.includes("Ai")) {
        document.getElementById("output").innerHTML = `The message "${message}" is tampered with!`;
    } else {
        document.getElementById("output").innerHTML = `The message "${message}" is not yet encoded!`;
    }
}
