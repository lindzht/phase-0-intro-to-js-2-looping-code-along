// Code your solutions in this file

// for (let age = 30; age < 40; age++){
//     console.log(`I'm ${age} years old. Happy bday to me!`);
//     // debugger;
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts){
//     for (let i = 0; i < gifts.length; i++){
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         // debugger;
//     }
//     return gifts;
// }

// function wrapGifts(gifts){
//     let i = 0;
//     while (i < gifts.length){
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         i++;
//     }
//     return gifts
// }

// wrapGifts(gifts);

function writeCards(names, event){
    let newArray = [];
    for(let key = 0; key < names.length; key++){
        newArray.push(`Thank you, ${names[key]}, for the wonderful ${event} gift!`);
    }
    return newArray
};



// const countDown = function(){
//     for (let number = 10; number >= 0; number--){
//     console.log(`${number}`);
// }
// };

function countDown(number){
    let i = 0
    while (number >= i){
        console.log(number);
        number--
    }
};

countDown(10);