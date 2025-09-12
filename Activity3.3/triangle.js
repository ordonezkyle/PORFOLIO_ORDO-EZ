// Prompt user for input
var a = prompt("Enter the length of side A:");
var b = prompt("Enter the length of side B:");
var c = prompt("Enter the length of side C:");

// Convert to numbers (allow decimals)
a = parseFloat(a);
b = parseFloat(b);
c = parseFloat(c);

// Validate numeric input
if (isNaN(a) || isNaN(b) || isNaN(c)) {
    window.alert("❌ Please enter valid numbers only!");
} else {
    determineTriangle(a, b, c);
}

function determineTriangle(a, b, c) {
    // Optional: check if lengths can form a triangle
    if (!(a + b > c && a + c > b && b + c > a)) {
        window.alert("Those lengths do not form a valid triangle.");
        return;
    }

    if (a === b && b === c) {
        window.alert("The triangle is EQUILATERAL.");
    } else if (a === b || b === c || a === c) {
        window.alert("The triangle is ISOSCELES.");
    } else {
        window.alert("The triangle is SCALENE.");
    }
}
