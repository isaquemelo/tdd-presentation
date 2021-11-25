import PalindromeChecker from '../app'

describe('', () => {
    test('should have a palindrome checker module exported', () => {
        const module = PalindromeChecker
        expect(module).toBeTruthy()
    })

    test('should have a isValid method', () => {
        const isPalindrome = PalindromeChecker.isValid
        expect(typeof isPalindrome).toBe('function')
    })

    test('should return true for valid palindromes', () => {
        const isPalindrome = PalindromeChecker.isValid
        expect(isPalindrome('ana')).toBe(true)
        expect(isPalindrome('reviver')).toBe(true)
    })

    test('should return false for invalid palindromes', () => {
        const isPalindrome = PalindromeChecker.isValid
        expect(isPalindrome('maria')).toBe(false)
    })

    test('should return true for valid cased palindromes', () => {
        const isPalindrome = PalindromeChecker.isValid
        expect(isPalindrome('Ana')).toBe(true)
        expect(isPalindrome('reVivEr')).toBe(true)
    })
})