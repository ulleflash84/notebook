// unions
type MyBool = true | false
type WindowStates = "open" | "closed" | "minimized"
type LockStates = "locked" | "unlocked"
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9

// union as parameter (e. g. array or a string)
function getLength(obj: string | string[]) {
    return obj.length
}