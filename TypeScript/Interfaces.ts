// define the interface "User"
interface User {
    name: string
    age: number
}

// declare the object "ulle1"
const ulle1: User = {
    name: "Ulle",
    age: 38
}

// use interface "User" inside class "UserAccount"
class UserAccount {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

// declare the object "ulle2"
const ulle2: User = new UserAccount("Ulle", 39)

// use interface to return a value
function getAdminUser(): User {
    return { name: "Ulle", age: 38 }
}