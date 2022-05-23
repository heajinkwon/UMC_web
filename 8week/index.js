// HTTP = HyperTest Transfer Protocol
// HTTPS = HyperTest Transfer Protocol Secure  -> HTTP + 보안

// Front와 Server간의 데이터 통신
//     -> Request : url address / HTTP Request Method
//     <- Response

// HTTP Request Method
// GET : 접근하여 데이터 사용 -- body 필요 X
// POST : 기존 데이터에 새로운 데이터 추가 -- body 필요
// PUT : 기존 데이터 수정 -- body 필요
// DELETE : 데이터 삭제 -- body 필요 X

// Request 구성
// header 
// body
// startline

// Response
// XML , JSON
// JSON을 보통 사용

// fetch,  axios
// 데이터 통신은 비동기로 이루어짐 async
// async await이나 promise 이용!

// // 1. fetch : fetch(url, options)

// const result = []

// // 아래 한줄은 promise 객체가 반환됨 --> fetch는 기본적으로 promise객체형태!
// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response => response.json())
// .then(data => result.push(data)) // promise객체를 json형태로 바꾼 후, data출력 
// .catch(error => console.log(error))

// // 위의 response data error 는 매개변수이므로 자유롭게 이름 지정 가능
// console.log(result); // [ [{user1}, {user2}] ] 이러한 형태로 저장됨
    


// const result2 = []

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response => response.json())
// .then(data => data.map(item => result2.push(item)))  
// .catch(error => console.log(error))

// console.log(result2); // [{user1}, {user2}] map이용해서 [] 안에 저장


// const result3 = []

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response => response.json())
// .then(data => data.map(item => result3.push(item.name)))  
// .catch(error => console.log(error))

// console.log(result3); // name만 출력

// // await 꼭 입력
// // await : fetch가 실행되고, 결과 나올 때 까지 기다림
// // await을 지우면, fetch가 promise이므로 reponse에 promise가 그대로 들어감
// const dataFetch = async() => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();

//     return data;
// }

// const dataResult = dataFetch();
// console.log(dataResult)


// 2. axios

axios.get("https://jsonplaceholder.typicode.com/users")
.then(data => console.log(data.data))

const dataFetch = async() => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")

    return response;
}

const dataResult = dataFetch();
console.log(dataResult);