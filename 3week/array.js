// 배열

// 1. 선언
const travel_spot1 = ['방콕','뉴욕','파리'];
console.log(travel_spot1);

// newArray 
const travel_spot2 = new Array['방콕','뉴욕','파리'];
console.log(travel_spot2);

// 하나씩 추가
const travel_spot3 = new Array();
travel_spot3[0] = '방콕';
travel_spot3[1] = '뉴욕';
travel_spot3[2] = '파리';
console.log(travel_spot3);

// 2. 접근 : index
const paris = travel_spot1[2];
console.log(paris); // 파리

// 3. 추가 및 삭제
// 배열 재할당 불가! 수정 및 삭제는 가능
// travel_spot1 = ['토론토','멜버른','바르셀로나','아테네']; 

// push
travel_spot1.push('토론토','퀘백');
console.log(travel_spot1); //방콕 뉴욕 파리 토론토 퀘벡

// unshift : 앞에 원소 추가
travel_spot1.unshift('바르셀로나');
console.log(travel_spot1); 
// 바르셀로나 방콕 뉴욕 파리 토론토 퀘벡

// splice : 원하는 지점에 추가 및 삭제
// -> splice(시작 index, 삭제하고 싶은 원소의 개수, 추가하고 싶은 원소들)
travel_spot1.splice(4,0,'멜버른','아테네'); 
console.log(travel_spot1);
// 바르셀로나 방콕 뉴욕 파리 멜버른 아테네 토론토 퀘백

// pop : 뒤에서 원소 삭제 ( 삭제된 원소 반환 )
const result = travel_spot1.pop();
console.log(travel_spot1);
// 바르셀로나 방콕 뉴욕 파리 멜버른 아테네 토론토
console.log(result);
// 퀘백

// shift : 앞에서 원소 삭제
const result1 = travel_spot1.shift();
console.log(travel_spot1);
// 방콕 뉴욕 파리 멜버른 아테네 토론토
console.log(result);
// 바르셀로나

// splice ( 삭제된 원소 반환 )
const result2 = travel_spot1.splice(3,3);
console.log(travel_spot1);
// 방콕 뉴욕 파리
console.log(result2);
// 멜버른 아테네 토론토

//
travel_spot1.splice(1,1,"이스탄불","하노이");
console.log(travel_spot1);
// 방콕 이스탄불 하노이