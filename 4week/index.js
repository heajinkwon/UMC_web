// DOM
// document - html
const $body  =document.getElementsByTagNameNS('body');
const $container  =document.getElementsByClassName('container');
const $title = document.getElementById('title'); // 결과값 하나
const $cityList = document.getElementById('cityList');
const $cityList1 = document.getElementByTagName('cityList');
//const $cityList = document.getElementByTagName("li"); --> HTML Collection
const $cities = $cityList.querySelectorAll('li');
const $cityDiv = document.querySelector('.city');

console.log($body[0].innerText); // innerText : 태그안의 text 모두 나열 
console.log($body[0].innerHTML); // innerHTML : 태그안의 HTML 모두 나열

console.log($container[0].innerText);
console.log($title); // 결과값이 하나이면 배열이 아닌 element가 return 됨.

console.log($cityList);
cohnsole.log($cityList1);
console.log($cities);

// map은 배열일때만 사용 가능
// node selector는 foreach 적용 가능
$cities.forEach(city => console.log(city.innerText));

// 유사 배열을 배열로 변경
// spread operator , Array.from
// 1. spread operator

const newCities = [...$cities]
console.log(newCities);
newCities.map(city => console.log(city.innerText))

// 2. Array.from
const newCities1 = Array.from($cities)
console.log(newCities);
newCities1.map(city => console.log(city.innerText))

$body[0].style.backgroundColor = 'teal';
$cityDiv.style.color = 'grey';

// 3. element 추가
const worstCity = document.createElement("ul");
const worstCityDiv = document.createElement('div');
const worstCitySubTitle = document.createElement('h2');
const worstCityArr = ['Cairo','London','Risbon','Sydney'];

worstCitySubTitle.innerText = "< Worst 5 >";
worstCityDiv.appendChild(worstCitySubTitle);

worstCityArr.map(city => {
    const worstCityItem = document.createElement('li');
    worstCityItem.innerText = city;
    console.log(worstCityItem);
    worstCity.appendChild(worstCityItem);
    console.log(worstCity);
})

worstCityDiv.appendChild(worstCity);
$container[0].appendChild(worstCityDiv);


/*
const worstCityList = `
<ul>
    <li>Cairo</li>
    <li>London</li>
    <li>Risbon</li>
    <li>Sydney</li>
</ul>
`

$cityDiv.insertAdjacentHTML('beforeend',worstCityList)

$container[0].appendChild(worstCity);
*/

// classList
worstCityDiv.classList.add('city');
worstCityDiv.classList.remove('city');


//setAttribute
worstCity.setAttribute("name","worstCity");
console.log(worstCity);