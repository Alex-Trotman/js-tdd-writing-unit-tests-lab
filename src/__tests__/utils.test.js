// Your tests here
import { isPalindrome } from "../utils";

describe('isPalindrome', () => {
    it("Returns true if a word that reads the same forwards and backwards and returns false otherwise", () => {
        const word = "racecar"
        const reverse = isPalindrome(word);

        expect(reverse).toBe(true);
    })
})