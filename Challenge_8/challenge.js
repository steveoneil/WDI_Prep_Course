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
var startNum = 1;
var endNum = 100;
for (i=startNum; i<=endNum; i++) {
    if (i % 3 == 0){
        if (i % 5 == 0){
            console.log("fizzbuzz");
        }
        else {
            console.log("buzz");
        }
    }
    else if (i % 5 == 0){
            console.log("fizz");
        }
        else {
            console.log(i);
        }
}

// EXERCISE #4 - Creates a string that represents an 8×8 grid
var gridSize = 8;
var line = "";
var squareToggle = 0;
for (i=1; i<=gridSize; i++){
    for (j=1; j<=gridSize; j++){
        if(squareToggle % 2 == 0){
            line = line + "#";
            squareToggle++;
        }
        else {
            line = line + " ";
            squareToggle++;
        }
    }
    line = line + "\n";
    squareToggle++;
}
console.log(line);
