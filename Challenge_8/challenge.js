// EXERCISE #1 - Create a for loop that prints out the numbers 1 to 100 in the console.
var startNum = 1;
var endNum = 100;
for (i=startNum; i<=endNum; i++) {
    console.log(i);
}

// EXERCISE #2 - Loop that makes seven calls to console.log to output a triangle.
var triangleSize = 7;
var line = "#";
for (i=1; i<=triangleSize; i++) {
    console.log(line);
    line = line + "#";
}

// EXERCISE #3 - The fizz buzz challenge

// EXERCISE #4 - Creates a string that represents an 8×8 grid

/*
var positions = [3,6];
var sum = 0;
for(var i=0; i<=positions.length; i++){
    for(var j=0; j<=numbers.length; j++){
        if (j == positions[i]) {
            sum = sum + numbers[j];
        }
    }
}
console.log(sum);
*/