// [이름, 종류, 직업, 성별]
//const pooh =['pooh','bear','disney character','boy'];
//pooh[1] : 무엇이 담겨있는지 모름 ( 배열의 한계 )

const pooh ={
    name : 'pooh',
    species :'bear',
    job : 'disney character',
    gender : 'boy',      // properties
    'say-Hi' : function(){  // method : 특수문자 들어가면 ''로 감싸주기
        console.log("I'm winnie the pooh, What's your name?");
    }
}

// 2. 객체 접근 : .  []
console.log(pooh.species);
console.log(pooh['species']);
console.log(pooh['say-Hi']); // function ~~
console.log(pooh['say-Hi']()) // 함수 호출 

// 3. 객체에 추가 및 삭제
pooh['say-Bye'] = function() {
    console.log("I'm winnie the pooh, See you later");
}
console.log(pooh);

pooh.favorites = ['honey','friends','cake'];
console.log(pooh);

delete pooh.favorites;
console.log(pooh);

// 생성자 함수 : 틀
function Character(name, species, job, gender) {
    this.name = name;
    this.species = species;
    this.job = job;
    this.gender = gender;
    this['say-Hi'] = function(){ 
        console.log(`I'm ${this.name}, What's your name?`);
    };
    this['say-Bye'] = function() {
        console.log(`I'm ${this.name}, See you later`);
    };
}

const winnie_the_pooh = new Character('winnie the pooh','bear','disney character','boy');
console.log(winnie_the_pooh);
console.log(winnie_the_pooh['say-Hi']());

const snoopy = new Character('snoopy','dog','comic book character','boy');
const pikachu = new Character('pikachu','squirrel','poketmon character','boy');

winnie_the_pooh.favorites = ['honey','friends','cake'];
console.log(winnie_the_pooh);

const obj = new Object();
console.log(obj);
obj.name = 'dwell';
obj.greeting = function(){
    console.log('hi')
}

const obj = new Object({
    name : 'dwell',
    greeting : function(){
        console.log('hi');
    }
})

console.log(obj);