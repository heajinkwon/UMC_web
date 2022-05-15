const $div = document.querySelector(".container");
/* dom을 선택한 변수 구분하기위해 $ 달러표시 */
const $form = document.querySelector("form");
const $input = document.querySelector("input");
const $button = document.querySelector("button");

// 1. 이벤트 원클릭 
// $div.이벤트이름 = 콜백함수 
// 이벤트이름은 모두 소문자 

//$div.onclick = handleClick;
// ()가 없는이유 콜백함수이기 때문

//$div.onclick = () => console.log('clicked');
//$div.onclick = () => alert("click");
// 2번째 enevt 만 시행됨

//function handleClick() {
//    console.log('clicked');
//}

// 2. addEventListener

//$div.addEventListener('click', () => console.log('clicked'));

//$div.addEventListener('click', handleClick);
//$div.addEventListener('click', () => alert('clicked'));

// 3. removeEventListener
// remove할 때는 익명함수이면 안됨.
//$div.removeEventListener('click',handleClick );

// 4. event

$div.addEventListener('click', handleClick);

// 현재 이벤트에 대한 정보
// 이 정보 중 taget을 많이 쓸 것임
function handleClick(event)
{
    console.log(event.target.innerText);
}

$input.addEventListener('change',hadleChange);

function hadleChange(event){
    console.log(event.target);
    console.dir(event.target); // 객체에 대한 정보
    console.log(event.target.value); // 입력값
}


$form.addEventListener('submit',handleSubmit);

// form의 submit event는 누르면 form을 제출해서 새로고침됨
function handleSubmit(event){ // 해당 event는 input에 입력을 받았을 때가 아니라
                              // 제출되었을 때임 
                              // 이 함수내에서 event.target.value하면 입력 값 나오는것이 X
    
    event.preventDefault(); // 새로고침 되지 않음
    const inputValue = $input.value;
    console.log(inputValue);
    $input.value = '';
}