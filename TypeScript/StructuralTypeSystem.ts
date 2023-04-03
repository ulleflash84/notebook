// One of TypeScript’s core principles is that type checking focuses on the shape that values have.
// This is sometimes called “duck typing” or “structural typing”.
// When it walks like a duck, quacks like a duck and swims like a duck, then it must be a duck.
// In a structural type system, if two objects have the same shape, they are considered to be of the same type.

interface Point {
    x: number
    y: number
}

function logPoint(p: Point) {
    console.log(`${p.x}, ${p.y}`)
}

const point = { x: 12, y: 26 }; // variable "point" is declared without usage of interface "Point"
logPoint(point); // this works, because of structural typing, "point" has x and y, thus it can be used

const rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect); // this works as well, because of structural typing