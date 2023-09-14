import {
    generateLottoNumbers,
    getRandomIntInclusive,
    compareNumbersInArray,
    sortAscendingOrder,
    isUnique,
} from "./lottoNumbersGenerator";

test("returne a number array with 6 numbers", () => {
    expect(generateLottoNumbers()).toHaveLength(6);
});

test("checks if it returns an number array in ascending order ", () => {
    expect(sortAscendingOrder([67, 20, 41, 46, 39, 18])).toEqual([
        18, 20, 39, 41, 46, 67,
    ]);
});

test("compare 2 numbers ", () => {
    expect(compareNumbersInArray(67, 20)).toBe(47);
    expect(compareNumbersInArray(41, 46)).toBe(-5);
});

test("return a random number and check if it is within the range ", () => {
    const min = 1;
    const max = 70;
    const randomNumber = getRandomIntInclusive(min, max);
    expect(randomNumber).toBeGreaterThanOrEqual(min);
    expect(randomNumber).toBeLessThanOrEqual(max);
});

test("check an number array to have no repeating number ", () => {
    const numberArray = [9, 19, 24, 26, 28];
    const numberToCheck = 49;
    expect(isUnique(numberArray, numberToCheck)).toBe(true);
});
