let btn__open = document.getElementById('open');
let btn__close = document.getElementById('close');

btn__open.onclick = function() {
    popup.classList.add('open');
};

btn__close.onclick = function() {
    popup.classList.remove('open');
};



// const popupLinks = document.querySelectorAll('.popup-link');
// const body = document.querySelector('body');
// const lockPadding = document.querySelectorAll(".lock-padding");

// let unlock = true;

// const timeout = 800;

// if (popupLinks.length > 0) {
//     for (let index = 0; index < popupLinks.length; length++) {
//         const popupLink = popupLinks[index];
//         popupLink.addEventListener("click", function (e) {
//             const popupName = popupLink.getAttribute('href').replace('#', '');
//             const curentPopap = document.getElementById(popupName);
//             popupOpen(curentPopap);
//             e.preventDefault();
//         });
//     }
// }
// const popupCloseIcon = document.querySelectorAll('.close-popup');
// if (popupCloseIcon.length > 0) {
//     for (let index = 0; index < popupCloseIcon.length; index++) {
//         const el = popupCloseIcon[index];
//         el.addEventListener('click', function (e) {
//             popupClose(el.closest('.popup'));
//             e.preventDefault();
//         });
//     }
// }

// function popupOpen(curentPopup) {
//     if (curentPopup && unlock) {
//         const popupActive = document.querySelector('.popup.open');
//         if (popupActive) {
//             popupClose(popupActive, false);
//         } else {
//             bodyLock();
//         }
//         curentPopup.classList.add('open');
//         curentPopup.addEventListener("click", function (e) {
//             if (!e.target.closest('.popup__content')) {
//                 popupClose(e.target.closest('.popup'));
//             }
//         });
//     }
// }
// function popupClose(popupActive, doUnlock = true) {
//     if (unlock) {
//         popupActive.classList.remove('open');
//         if (doUnlock) {
//             bodyUnlock();
//         }
//     }
// }

// function bodyLock() {
//     const lockPaddingValue = window.innerHeight - document.querySelector('.wrapper').offsetWidth + 'px';

//     if (lockPadding.length > 0) {
//         for (let index = 0; index < lockPadding.length; index++) {
//             const el = lockPadding[index];
//             el.style.paddingRight = lockPaddingValue;
//         }
//     }
//     body.style.paddingRight = lockPaddingValue;
//     body.classList.add('lock');

//     unlock = false;
//     setTimeout(function () {
//         unlock = true;
//     }, timeout);
// }

// function bodyUnlock() {
//     setTimeout(function() {
//         if (lockPadding.length > 0) {
//             for (let index = 0; index < lockPadding.length; index++) {
//                 const el = lockPadding[index];
//                 el.style.paddingRight = '0px';
//             }
//         }
//         body.style.paddingRight = '0px';
//         body.classList.remove('lock');
//     }, timeout);

//     unlock = false;
//     setTimeout(function() {
//         unlock = true;
//     }, timeout);
// }

// document.addEventListener('keydown', function (e) {
//     if (e.which === 27) {
//         const popupActive = document.querySelector('.popup.open');
//         popupClose(popupActive);
//     }
// });


//Объявляет переменные
let map__girl = document.querySelector('.map__girl');
let btn__move = document.getElementById('btn__move')

// Заставляет двигаться девушку по нажатию на кнопку "В универ"

btn__move.onclick = function() {
    map__girl.classList.add('run');
};

//Создать массив, поместить туда все анимации
//Передебирать все анимации из массива 
//После проигрывания анимации - i, добавлять +1 



let rating = [
{
	"id": "123",
	"name": "Владимир",
	"lastName": "Ларионов",
	"img": "./male.png",
	"points": "463"
},
{
	"id": "9",
	"name": "Владимир",
	"lastName": "Сергеев",
	"img": "./male.png",
	"points": "521"
},
{
	"id": "231",
	"name": "Вениамин",
	"lastName": "Васильев",
	"img": "./male.png",
	"points": "865"
},
{
	"id": "321",
	"name": "Мария",
	"lastName": "Логинова",
	"img": "./female.png",
	"points": "865"
},
{
	"id": "492",
	"name": "Борис",
	"lastName": "Казанцев",
	"img": "./male.png",
	"points": "784"
},
{
	"id": "452",
	"name": "Полина",
	"lastName": "Калинина",
	"img": "./female.png",
	"points": "225"
},
{
	"id": "796",
	"name": "Даниил",
	"lastName": "Воробьёв",
	"img": "./male.png",
	"points": "642"
},
{
	"id": "4",
	"name": "Эрик",
	"lastName": "Аксёнов",
	"img": "./male.png",
	"points": "150"
},
{
	"id": "1155",
	"name": "Иван",
	"lastName": "Иванов",
	"img": "./male.png",
	"points": "100"
},
{
	"id": "12145",
	"name": "Артем",
	"lastName": "Алексеев",
	"img": "./male.png",
	"points": "1000"
}
]


let friend = [
{
	"id": "9",
	"name": "Владимир",
	"lastName": "Сергеев",
	"img": "./male.png"
},
{
	"id": "4",
	"name": "Эрик",
	"lastName": "Аксёнов",
	"img": "./male.png"
},
{
	"id": "15411",
	"name": "Ирина",
	"lastName": "Чеснокова",
	"img": "./female.png"
},
{
	"id": "15564",
	"name": "Дарина",
	"lastName": "Боброва",
	"img": "./female.png"
}
]
// Возвращает все id из массива rating/friend
_.map(rating, function(n){
	return n["id"];
})

_.map(friend, function(n){
	return n["id"];
})

//Возвращает все Имена из массива rating/friend
_.map(rating, function(n){
	return n["name"];
})

_.map(friend, function(n){
	return n["name"];
})

// Возвращает все Фамилии из массива rating/friend
_.map(rating, function(n){
	return n["lastName"];
})

_.map(friend, function(n){
	return n["lastName"];
})

//Возвращает все картинки из массива rating/friend
_.map(rating, function(n){
	return n["img"];
})

_.map(friend, function(n){
	return n["img"];
})

//Возвращает все очки рейтинга из массива rating
_.map(rating, function(n){
	return n["points"];
})