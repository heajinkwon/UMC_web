// setItem : localstorage 정보를 저장할때 사용하는 메소드

// localStorage.setItem(key, value) ;
localStorage.setItem('name','Jiny');
localStorage.setItem('age',22);
// 값을 가져오면 숫자가 아닌 문자열이다.

// getItem : localstorage 정보를 가져올때 사용하는 메소드
const result = localStorage.getItem('age');
console.log(result)
console.log(typeof result)

// Object 생성
const travel = {
    destination : ['paris','sydney','taipei'],
    days : 100,
    mate : undefined,
    isAvailable : true
}

// 객체형태는 문자열로 저장이 되지 않음.
localStorage.setItem('travel',travel);

// JSON.stringify, JSON.parse
localStorage.setItem('travel',JSON.stringify(travel));
const data = localStorage.getItem('travel');
console.log(data); // 문자열로 나와서 data.destination하면 undefinend 로나옴
                   // key를 찾을 수 없다.

// JSON.parse는 key 찾기 가능
localStorage.setItem('travel',JSON.parse(travel));
const data2 = localStorage.getItem('travel');
console.log(data.destination); 

// removeItem
localStorage.removeItem('name');

// clear : 모두 제거
localStorage.clear(); 
