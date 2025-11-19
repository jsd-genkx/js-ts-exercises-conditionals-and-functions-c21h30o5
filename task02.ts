// TODO-02: Use if/else to check if it's a number
// (hint: typeof or isNaN)

const userInput = ["hello", 10, null, NaN];
// Try changing to "hello", 10, null, NaN

for (let i=0; i<userInput.length; i++) {

        if ( ( typeof(userInput[i])==="number" ) && !( isNaN(userInput[i]) )) {
            console.log(`True : ${userInput[i]} is a number.`);
        } else {
            console.log(`False: ${userInput[i]} is a ${typeof(userInput[i])}`);
        };
};



/*if (typeof(userInput) === "number") {
    console.log("It's number.");
} else {
    console.log("NO, it's not!!!!!!!!!!!");
};*/

/*if (isNaN(userInput)) {
    console.log("isNaN")
} else {
    console.log("gotchaaa");
};*/