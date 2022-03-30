// 변수 : 선언, 초기화, 재할당

// 변하지 않는 데이터 값
const 변수1 = 'coding';

// const자료형 재할당 - > 오류
// 변수 1 = 'coding is hard';

// 변하는 데이터 값
let 변수2 = 'javascript';

// ====================================================

// 데이터 타입, 자료형 : 
// 1. string : 문자열

const str = '안녕';
const str2 = "hi";
const num = '2!!';

// 2. number : 숫자
const number = 2;

// 3. bigInt : 큰 값이 숫자

// 4. boolean : true, false
const bool = true;
const bool1 = false;

// 5. symbol : 중복되지 않는 고유 값

// 6. null / undefined
//둘다 비어있는 값 
const a = undefined; // 자동적으로 값이 없음.
const b = null; // 수동적으로 값이 없음. -> 값이 의도적으로 비어있음.

let variable;
console.log(variable);

// 8. object : 객체 - 함수, 배열, 객체

// ========================================================

// 1. 산술연산자 : +, -, /, *, **, %

const aa = 10%3;
console.log(aa);

const bb = 10 **2;
console.log(bb);

let cc = 5;
cc += 10; // cc = cc + 10;
console.log(cc);

cc -= 8; // cc = cc - 8;
console.log(cc);

// 2. 할당 연산자 : =

// 3. 문자열 연산자 : +
let data = 'happy' + 'birthday';
console.log(data);

data += '!!'; // data = data + '!!'
console.log(data);

// 비교 연산자 : 
// 1. == 대충비교
console.log(1 == '1') // true
console.log(nul == undefined) // true 

// 2. ===   ( == 과 같은데 ) 엄격히 비교
console.log(1 === '1') // false
console.log(nul === undefined) // false

// 3. != 대충 비교
console.log(1 != '1') // false

// 4. !== ( !=와 같은데 ) 엄격히 비교
console.log(1 !== '1') // true

// 5. 부등호 : > >= < <=
// 문자열은 길이가 더 긴 것이 큰 값.

// 논리연산자 : &&, ||, !(부정)
const numdata = 5;

// && :조건 중 하나라도 false가 되면 => false
console.log(numdata >0 && numdata < 10); // true
console.log(numdata >0 && numdata > 10); // false

// || : 두개의 조건이 모두 false여야지 => false
console.log(numdata >0 || numdata > 10); // true

// ! : 반대
console.log(!true) // false
console.log(!false) // true
console.log(!(numdata > 5)) // true


















