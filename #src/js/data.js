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