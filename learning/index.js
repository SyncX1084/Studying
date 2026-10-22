// Take Numbers and put into Array 

let nums = [];

function addNums(num1, num2) {
    nums.push(num1);
    nums.push(num2);

    return nums;
};

console.log(addNums(1, 5));

let numsTwo = [];

function numsBetween(num1, num2) {
    for (let i = num1 + 1; i < num2; i++) {
        numsTwo.push(i);
    };

    return numsTwo;
};

console.log(numsBetween(1, 50));