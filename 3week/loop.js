//1. for문
// for (초기값 ; 종료조건 ; 증감) {
//   실행할 코드
// }

// for(let i =1; i<11; i++)
// {
//     console.log(i);
// }

// const numArr = [45,33,11,98,22];
// for(let i =0; i<numArr.length; i++)
// {
//     console.log(numArr[i]);
//     numArr[i] += 10;
// }
// console.log(numArr);

// 2. while문
// 시작점
// while (조건) {
//   코드
//   증감
// }


// let i = 1;
// while(i <11)
// {
//     console.log(i);
//     i++;
// }

// while(true)
// {
//     if(i > 10){
//         break;
//     }
//     i++;
//     if ( i%2!=0){
//         continue;
//     }
//     console.log(i);
// }

// const numArr1 = [45,33,11,98,22];
// let i = 0;
// while(i < numArr1.length)
// {
//     console.log(numArr1[i]);
//     numArr1[i] += 10;
//     i++;
// }

// console.log(numArr1);

// 3. do while문
// let i =1;
// do{
//    console.log(i);
//    i++; 
// }while(i<11)

let i =12;
do{
   console.log(i); //--> 한번이라도 실행!
   i++; 
}while(i<11)