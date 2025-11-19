// TODO-03: Write if/else if to print:
// Password < 6 chars → "Too short"
// 6–10 chars → "Moderate"
// 11+ chars → "Strong"

const password = ["pass123", "pass1", "pass123456789"];

for (let i=0; i<password.length; i++) {
    console.log(i+1);

    if (password[i].length < 6) {
        console.log("Too short");
    } else if (6 <= password[i].length && password[i].length <= 10) {
        console.log("Moderate");
    } else {
        console.log("Strong");
    }

};
