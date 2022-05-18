// 동기 : synchronous : 순서대로 일을 처리하는 방식
// 비동기 : asynchronous : 순서대로 일을 처리하지 않고 빨리 처리할 수 있는 것들을 먼저 처리하는 방식

// JS는 원래 동기적 언어

// 콜백함수 : 특정 시간뒤에 다시 호출해서 다시 실행

console.log('1')
setTimeout(function() { // 비동기적으로 실행
    console.log('2')
},10) // 동기적 실행 다끝나고 비동기 실행 될 때, 10ms 뒤에 실행되는 것임
console.log('3')
console.log('4')
setTimeout(function() { // 비동기적으로 실행
    console.log('5')
},5)
console.log('6')
setTimeout(function() { // 비동기적으로 실행
    console.log('7')
},40)
console.log('8')
setTimeout(function() { // 비동기적으로 실행
    console.log("9")
},30)
conosole.log('10')

// 출력
// 1 3 4 6 8 10 5 2 9 7

// function syncFunc(syncCallback)
// {
//     syncCallback();
// }

// function asynFunc(asynCallback)
// {
//     setTimeout(asynCallback, 3000);
// }

// // 함수 안에 함수호출 --> 콜백함수
// syncFunc( () => console.log("sync") ); // 동기적으로 실행
// asynFunc( () => console.log('async') ); // setTimeout에 넣어져 비동기적으로 실행

// 출력
// 1 3 4 6 8 10 sync 5 2 9 7 async

// function syncFunc(syncCallback)
// {
//     syncCallback();
// }

// function asynFunc(asynCallback)
// {
//     setTimeout(() => {
//         asynCallback();
//         syncFunc(() => console.log('sync')); // callback 중첩
//     }, 3000);

// }

// asynFunc(() => console.log('async')); // async 후에 sync

const posts = [
    { post_id: 1, post_title: "첫번쨰 글" },
    { post_id: 2, post_title: "두번쨰 글" },
    { post_id: 3, post_title: "세번쨰 글" },
];
  
  const comments = [
    { post_id: 1, comment_id: 1, comment: "첫번쨰 글 첫번쨰 코멘트" },
    { post_id: 2, comment_id: 1, comment: "두번쨰 글 첫번쨰 코멘트" },
    { post_id: 2, comment_id: 2, comment: "두번쨰 글 두번쨰 코멘트" },
    { post_id: 2, comment_id: 3, comment: "두번쨰 글 세번쨰 코멘트" },
    { post_id: 3, comment_id: 1, comment: "세번쨰 글 첫번쨰 코멘트" },
    { post_id: 3, comment_id: 2, comment: "세번쨰 글 두번쨰 코멘트" },
];
  
const postNum = 2;

// const getPost = (id, onSuccess, onError) => {
//     setTimeout(() => {
//     const post = posts.find( post => post.post_id === id);
//     if(post)
//         onSuccess(post.post_id);
//     else
//         onError("찾는 포스트 없다");
//       }, 3000)
// }

// const getComments = (post_id, onSuccess, onError) => {
//     setTimeout(() => {
//                     // 일치하는 모든것을 가져온다.
//                     // post_id 가 일치하는 모든 comment를 배열에 담아서 result에 저장
//     const result = comments.filter( comment => comment.post_id === post_id);
//     if(result.length > 0) // post_id 가 일치하는 comment가 없는경우
//         onSuccess(result);    // result 는 빈 배열 (true)라고 나옴
//     else                   // 따라서, result.length >0 으로 확인해줘야함.
//         onError("찾는 포스트에 코멘드가 없다");
//         }, 4000)
// }

// getPost(
//     postNum,  // getPost의 인자 1 id
//     (post_id) => {
//         console.log('post', post_id);
//         getComments(
//             post_id,   // getComments의 인자 1 (post_id)
//             (result) => { // getComments의 인자 2 (onSuccess)
//                 console.log('Comments : ', result)
//             },
//             (message) => { // getComments의 인자 3 (onError)
//                 console.log(message);
//             }
//           )
//       }, // getPost의 인자 2 (onSuccess)
//     (message) => {
//         console.log(message)  // getPost의 인자 3 (onError)
//     }
// )

// Promise : pending (진행중) , fulfilled (성공적으로 끝난 상태) , rejected (실제로 끝난 상태)

// 성공했을 때 실행할 함수, 실패했을 때 실행할 함수
// new Promise(resolve, reject)

const getPost = (id) => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        const post = posts.find((post) => post.post_id === id);
        if (post)
            resolve(post.post_id);
        else
          reject("찾는 포스트 없다");
      }, 3000);
    });
};

const getComments = (post_id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const result = comments.filter((comment) => comment.post_id === post_id);
        if (result.length > 0) 
          resolve(result);
        else 
          reject("찾는 포스트에 코멘트가 없다");
      }, 4000);
    });
  };
  
// .then 성공했을 때 resolve 실행되었을 때 promise를 받음
// .catch 실패했을 때 reject 실행되었을 때 promise를 받음

// getPost(postNum)
// .then(postId => {
//     console.log("post : ",postId)
//     return getComments(postId)
// })
// .then(result => conosole.log("comments : ", result))
// .catch(message => console.log(message))

// promise를 이용한 것이 중첩 콜백보다 간단하다.

// async await --> 비동기적인 것을 동기적으로 ,,

async function getResult() {
                        //  값 받을 때 까지 기다림
    const postId_result = await getPost(postNum);
    const comments_result = await getComments(postId_result);
    console.log("posts : ", postId_result, "comments : ", comments_result);
}

getResult();
