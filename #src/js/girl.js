

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


