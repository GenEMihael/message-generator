const stems = ['A bird in the hand is worth', 'I cannot believe you bought', 'Surely there is room for'];
const numbers = [2, 3, 4];
const words = ['pennies', 'crop tops', 'light spankings'];

const numGenerator = () => {
    return Math.floor(Math.random() * 3);
};

const message = () => {
    let numA = numGenerator();
    let numB = numGenerator();
    let numC = numGenerator();
    let messageStem = stems[numA];
    let messageNumber = numbers[numB];
    let messageWord = words[numC];
    return `${messageStem} ${messageNumber} ${messageWord}.`
};

console.log(message());