// Q1: Print Only Odd Numbers
function printOdd(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            console.log(arr[i]);
        }
    }
}

printOdd([1, 2, 3, 4, 5]);


// Q2: Count Odd Numbers
function countOdd(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            count = count + 1;
        }
    }

    return count;
}

console.log(countOdd([3, 6, 9, 10]));


// Q3: Print Array in Reverse
function printReverse(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

printReverse([10, 20, 30]);


// Q4: Multiply Each Element by 5
function multiplyByFive(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 5);
    }

    return newArr;
}

console.log(multiplyByFive([2, 4]));


// Q5: Find the Smallest Number
function findMin(arr) {
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return min;
}

console.log(findMin([8, 3, 6, 1]));


// Q6: Print Positive Numbers
function printPositive(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            console.log(arr[i]);
        }
    }
}

printPositive([-2, 5, -1, 7]);


// Q7: Count Numbers Greater Than 10
function countGreater(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 10) {
            count++;
        }
    }

    return count;
}

console.log(countGreater([5, 12, 20, 8]));


// Q8: Convert to Negative Numbers
function makeNegative(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            result.push(-arr[i]);
        } else {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(makeNegative([2, -4, 5]));


// Q9: Print Index with Value
function printIndexValue(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log("Index " + i + " : " + arr[i]);
    }
}

printIndexValue([10, 20]);


// Q10: Sum of Even Numbers
function sumEven(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            sum = sum + arr[i];
        }
    }

    return sum;
}

console.log(sumEven([1, 2, 4, 5]));


// Q11: Increment Array Values
function incrementArray(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] + 1);
    }

    return newArr;
}

console.log(incrementArray([4, 7]));


// Q12: Check Zero in Array
function hasZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            return true;
        }
    }

    return false;
}

console.log(hasZero([3, 0, 5]));
