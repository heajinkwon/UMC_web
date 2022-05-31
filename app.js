const express = require('express')
const app = express();
const port = 5500;

// nodemon쓰면 바로바로 바뀐 내용이 적용됨. (서버 재실행할 필요 X)

// 라우팅은 URL 및 특정한 HTTP 요청메소드(GET, POST 등)인 특정 엔드포인트에 대한
// 클라이언트 요청에 애플리케이션이 응답하는 방법을 결정하는 것을 말함.

// CRUD 
// Create Read Update Delete

app.use(express.json());

const users = [
    {
        id: 1,
        name: "hyejin",
        username: "Jiny",
        email: "asdffew@naver.com",
        phonenumber: "010-4432-3333",
    },
    {
        id: 2,
        name: "kwon",
        username: "kw",
        email: "asdf@naver.com",
        phonenumber: "010-2323-5555"
    }
];

app.get("/", (req,res) => {
    res.send("Welcome!!!");
});

app.get("/users", (req,res)=> {
    res.json(users);
});

// 동적으로 입력되는 것 -> : (콜론) 입력
app.get("/users/:userId", (req,res) => {
                // req.params.userId는 string
    //console.log(req.params.userId);
    
    const user = users.find( (user) => user.id === parseInt(req.params.userId));
    // !user해야 undefined
    if(!user)
    {
        res.status(404).send("요청한 userId를 찾을 수 없습니다.");
    }
    res.status(200).json(user);
});

app.post("/users",(req,res) => {
    // id는 따로 관리
    const newUser = req.body;

    // key만 뽑아 배열로 만들어줌
    if(Object.keys(newUser).length === 0){
        res.status(400).send("user에 관한 정보를 입력해주세요.");
    }else if(Object.keys(newUser).length < 4)    {
        res.status(400).send("user를 추가하기 위해 필요한 정보를 모두 입력해주세요.");
    }else{
        // ... spread operator 
    // 내용물들 하나하나 복사해서 새로운 객체안에 다시 넣는 것
        users.push({
            // 가장 마지막 원소의 id에 + 1
            // 그냥 users.length + 1 하면 삭제한 후, id 가 중복될 수도
            id : parseInt(users[users.length-1].id) + 1,
            ...newUser,
        });
    }

    res.json(users)
});

app.put("/users/:userId", (req, res) => {
    const id = users.findIndex( user => user.id === parseInt(req.params.userId));
    if(id === -1)
    {
        res.status(404).send("요청한 id를 찾을 수 없습니다.");
    }

    console.log(id); 

    users[id] = {
        ...users[id], // 나머지 key값은 그대로 보존
        ...req.body // 수정한 내용만 변경 
    }

    res.status(200).json(users);
});

app.delete("/users/:userId", (req,res) => {
    const id = users.findIndex( user => user.id === parseInt(req.params.userId));
    if(id === -1)
    {
        res.status(404).send("요청한 id를 찾을 수 없습니다.");
    }

    // id , 삭제할 개수
    users.splice(id, 1 );

    res.status(200).json(users);
})

app.listen(port, () => {
    console.log(`서버 실행중..`);
});


