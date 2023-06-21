let secondHand = document.getElementById("second")
let minsHand = document.getElementById("min")
let hourHand = document.getElementById("hour")

function setDate() {
    let now = new Date()

    let seconds = now.getSeconds()
    let secondsDegrees = (seconds / 60) * 360 + 90
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`

    let mins = now.getMinutes()
    let minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90
    minsHand.style.transform = `rotate(${minsDegrees}deg)`

    let hour = now.getHours()
    let hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90
    hourHand.style.transform = `rotate(${hourDegrees}deg)`

    let m = document.querySelector('.s');
    m.innerHTML = ' 초 '
    m.insertAdjacentText('afterbegin', seconds)
}

function getHDate() {
    let now = new Date()
    return now.getHours()
}
function getMDate() {
    let now = new Date()
    return now.getMinutes()
}

let firstH = document.querySelector('.h');
firstH.insertAdjacentText('afterbegin', getHDate())

let firstM = document.querySelector('.m');
firstM.insertAdjacentText('afterbegin', getMDate())

setInterval(() => {

    let h = document.querySelector('.h');
    h.innerHTML = ' 시 '
    h.insertAdjacentText('afterbegin', getHDate())

    let m = document.querySelector('.m');
    m.innerHTML = ' 분 '
    m.insertAdjacentText('afterbegin', getMDate())

},1000 * 60);

setInterval(setDate, 1000)

setDate()














































// const cache = Symbol('calendar')

// function createCalendar(el) {
//     if (cache in el) {
//         return el[cache]
//     }

//     const api = el[cache] = {
//         // do some
//     }

//     return api
// }

// allHTML = document.getElementById("html")

// createCalendar(allHTML)

// console.log(api.Creationresult) // true










































































// const weapon = Symbol.for('killingTool')
// const weaponPoninter = weapon
// const age = Symbol.for('pengIceBornAge')
// //age.prototype.description = 'hint: pengsoo face ice age expectation'
// const secretOfAnimal = age.description
// const character = {
//     name: 'Penguin',
//     [weapon]: null,
//     [weaponPoninter]: 'shutgun',
//     [age]: secretOfAnimal,
//     [Symbol.for("pengID")]: "CONFIDENTIALID",
//     warningLevel: '[Warning] It has a ' + weapon.toString().slice("Symbol".length) + '. It was born at ' + age.description
// }

// console.log(character[weaponPoninter])
// console.log(character[age])
// console.log(character[weapon])
// console.log(character[age])

// console.log(character[Symbol.for('killingTool')])
// console.log(character[Symbol.for("pengID")])

// for (let key in character) {
//     console.log(key)
// }

// console.log(Object.keys(character))
// console.log(Object.values(character))
// console.log(JSON.parse(JSON.stringify(character)))
// console.log(Object.keys(character))
// console.log(Object.values(character))
// //Object.values

// console.log('name' === Object.getOwnPropertyNames(character)[0])


// console.log(Object.getOwnPropertySymbols(character))
















































//const first = new Symbol(0)
//const firstS = Symbol('firstSymbol!')

//console.log(first)
//c/onsole.log(firstS)

// console.log(Symbol() === Symbol())
// console.log(Symbol('mysymbol') === Symbol('mysymbol'))




















































// const createJuicyFruit = (...params) =>
//     class JuicyFruit extends Fruit {
//         constructor() {
//             this.juice = 0
//             super(...params)
//         }
//         squeeze() {
//             if (this.calories <= 0) {
//                 return
//             }
//             this.calories -= 10
//             this.juice += 3
//         }

//         get capacity() {
//             return this.juice
//         }
//     }

// class Plum extends createJuicyFruit('plum', 30) {

// }

// let myFreshFood = new Plum()

// myFreshFood.squeeze()
// myFreshFood.squeeze()

// console.log(myFreshFood.capacity)
// console.log(myFreshFood.calories)














































// class Fruit {

// }

// class Banana extends Fruit {
//     constructor() {
//         super('banana', 105)
//     }

//     slice() {
//         this.pieces = 12
//     }
// }





















































// class MathUtil {
//     static sum(...numbers) {
//         return numbers.reduce((a,b) => a+b)
//     }
// }

// console.log(MathUtil.sum(1,2,3,4,5))













































// class Fruit {

// }

// class Person {
//     constructor() {
//         this.satiety = 0
//     }
//     eat(fruit) {
//         while (fruit.pieces > 0) {
//             fruit.bite(this)
//         }
//     }
// }

// const plum = new Fruit('plum', 40)
// const person = new Person()
// person.eat(plum)
// console.log(person.satiety)



















// class Counter {
//     constructor(start) {
//         this.count = start
//     }
//     get next() {
//         return this.count++
//     }
// }

// const counter = new Counter(23)
// console.log(counter.next)
// console.log(counter.next)
// console.log(counter.next)


// class LocalStorage {
//     constructor(key) {
//         this.key = key
//     }
//     get data() {
//         return JSON.parse(localStorage.getItem(this.key))
//     }
//     set data(data) {
//         localStorage.setItem(this.key, JSON.stringify(data))
//     } 
// }

// const foodStorage = new LocalStorage('groceries')
// foodStorage.data = ['apple','banana','grape']

// console.log(foodStorage.data)
















































// const items = ['a','b','c']
// var todo = checklist(items)
// todo.check()
// console.log(items)

// //items = ['d','e']

// todo.check()

// console.log(items)

// function checklist(items) {
//     return {
//         check: () => items.shift()
//     }
// }












































// const people = ['Tesla', 'Musk']
// var humans = people
// humans = 'evil'
// console.log(humans)

// const frozen = Object.freeze(
//     ['Ice', 'Icicle', 'Ice cube']
// )

// console.log(frozen)

// frozen.pop()  //error
























































// function printNumbers() {
//     for(let i=0; i<10; i++) {
//         setTimeout(function() {
//             console.log(i)
//         }, i*1000)
//     }
// }

// printNumbers()





// {{{  var deep = 'This is available from outer scope.';    }}}
// {{{  let shallow = 'This is dont know available from outer scope.';    }}}
// console.log(deep)
// console.log(shallow)


















































































// function tag(parts, ...values) {
//     return parts.reduce(
//         (all, part, index) => all + values[index - 1] + part
//     )
// }

// function upper(parts, ...values) {
//     return parts.reduce((all,part,index) => 
//         all + values[index - 1].toUpperCase() + part
//     )
// }

// var name = 'Marice'
// var emotion = 'thrilled'
// var text = upper`Hello, ${ name }. I am ${ emotion } to meet you`

// //console.log(text)

// function sanitized(parts, ...values) {
//     const dirty = parts.reduce((all,part,index) =>
//     `${all} ${values[index - 1]} ${part}`);
//     return DOMPurify.sanitize(dirty)

// }

// var comment = 'Evil comment<iframe src="http://blackspace.com">  </iframe>'
// const comment2 = `I love to do evil <img src="http://unsplash.it/100/100?random" onload="alert('you got hacked');" />`

// var html = sanitized`<div>${ comment }</div><br/><div>${ comment2 }</div>`
// console.log(html)


// document.getElementById('di').innerHTML = html






























































// var book = {
//     title: 'Modualr ES6',
//     excerpt: 'Here goes some properly sanitezed HTML',
//     tags: ['es6', 'template-literals', 'es6-in-depth', 'templatse-lwsiterals', 'es6-indd-depth']
// }

// var html = `
// <article>
// <header>
//     <h1>${ book.title }</h1>
// </header>
// <section>${ book.excerpt }</section>
// <footer>
//     <ul>
//         ${
//             book.tags
//                 .map(tag => `<li>${ tag }</li>`)
//                 .join('\n        ')
//         }
//     </ul>
// </footer>
// </article>`

// document.getElementById('di').innerHTML = html



























































// // Returning printed and customed car, default is Volkswagen brand car.
// function carFactory({ brand = 'Volkswagen', prototypeVersionMake = 1999, printedTime = (new Date(Date.now())).getFullYear() } = {}) {
//     return {
//         brand,
//         prototypeVersionMake,
//         printedTime
//     }
// }

// // This: getCarProductModel is the arrow simple function for car product info extraction
// var getCarProductModel = ({ brand, prototypeVersionMake, model }) => ( {
//     sku: brand + ':' + prototypeVersionMake + ':' + model,
//     brand,
//     prototypeVersionMake,
//     model    
// })

// var upgradeToFormidableCarBrand = (targetCar) => {
//     targetCar.brand = 'LuxuryDiorEditionVantzs'
//     targetCar.prototypeVersionMake = 2022
// }


// var myWishCustomCar = { prototypeVersionMake: 2011 }
// var customFinishedCar = carFactory(myWishCustomCar)

// var aliceVIPSpecialCar = {
//     owner: {
//         id: 'e2c35a876a9a67sc',
//         name: 'Donald Draper'
//     },
//     brand: 'Peugeot',
//     prototypeVersionMake: 2015,
//     model: '208',
//     preferences: {
//         airbags: true,
//         airconditioning: false,
//         color: 'red'
//     }
// }
// // existing car..

// // do func call
// upgradeToFormidableCarBrand(aliceVIPSpecialCar)

// // upgraded car!!


// console.log("aliceVIPSpecialCar",aliceVIPSpecialCar)

// var carModelObj = getCarProductModel(aliceVIPSpecialCar)

// console.log("carModelObj",carModelObj)

// var newCustomedcarModelObj = carFactory(carModelObj)
// console.log("newCustomedcarModelObj",newCustomedcarModelObj)

// console.log("customFinishedCar",customFinishedCar)