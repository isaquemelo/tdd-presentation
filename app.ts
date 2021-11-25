export default class PalindromeChecker {
    static isValid(text: String): boolean {
        const uncasedText = text.toLowerCase()
        return uncasedText.split("").reverse().join("") === uncasedText
    }
}