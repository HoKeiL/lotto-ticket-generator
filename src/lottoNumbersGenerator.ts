/**
 * lotto-ticket-generator
You will write a function which generates and prints a list of 6 random, unique (non-repeating) integers which can be anywhere in the range from 1 to 70.

The numbers must be printed in ascending order.
 */
function generateLottoNumbers(): number[] {
    const outputArray: number[] = [];
    while (outputArray.length < 6) {
        const randomNumber = getRandomIntInclusive(1, 70);
        if (isUnique(outputArray, randomNumber)) {
            outputArray.push(randomNumber);
        }
    }
    return sortAscendingOrder(outputArray);
}

function getRandomIntInclusive(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

function compareNumbersInArray(a: number, b: number) {
    return a - b;
}

function sortAscendingOrder(array: number[]): number[] {
    return array.sort(compareNumbersInArray);
}
function isUnique(array: number[], numberToCheck: number): boolean {
    return !array.includes(numberToCheck);
}

console.log(generateLottoNumbers());
console.log(generateLottoNumbers());
console.log(generateLottoNumbers());
console.log(generateLottoNumbers());

export {
    generateLottoNumbers,
    getRandomIntInclusive,
    compareNumbersInArray,
    sortAscendingOrder,
    isUnique,
};
