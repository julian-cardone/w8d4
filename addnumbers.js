const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
    if (numsLeft > 0) {
        rl.question("Put in a number:", (response) => {
            let parsed = parseInt(response);
            sum += parsed;
            console.log(sum);
            numsLeft--;
            addNumbers(sum, numsLeft, completionCallback);
        })
    }
    if (numsLeft === 0) {
        completionCallback(sum);
        rl.close();
    }
}

