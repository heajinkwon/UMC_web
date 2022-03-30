function multiply10(num) {
    const result = num*10;
    console.log(result);
    //return result;
}

// const data = multiply10(10);
// console.log(data);

multiply10(10);

// =========================================================
// arrow function :

/*
const multiply3 = (num) => {
    const result = num * 3;
    return result;
}
*/

const multiply3 = (num) => num * 3;

const data = multiply3(100);
console.log(data);