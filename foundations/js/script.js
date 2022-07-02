let sum = (a, b) => a + b;

function capitalise(str) {
    return str[0].toUpperCase() + str.slice(1);
}

function lastLetter(str) {
    return str[str.length - 1];
}

console.log("Hello, World!");
console.log("" + sum(2, 3) + " is the sum of 2 and 3.");
console.log(capitalise("nothing"));
console.log(lastLetter("This should only return 1"));