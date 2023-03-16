// function getData(data) { // Promise Objesi döndüren foksiyon
//     return new Promise(function(resolve,rejact){
//         setTimeout(function(){

//             if(typeof data === "string"){
//                 // Olumlu
//                 resolve(data);
//             }
//             else {
//                 // Olumsuz
//                 rejact(new Error("Lütfen string bir değer girin"));
//             }
            
//         },5000);

//     });

// }

// getData("Merhaba")
// .then(response => console.log("Gelen Değer" + response))
// .catch(err => console.error(err));

function addTwo(number){
    return new Promise((resolve,rejact) => {
        setTimeout(function(){
            if (typeof number === "number"){
                resolve(number+2);
            }
            else {
                rejact(new Error("Lütfen bir sayı girin"));
            }
        },3000);
    });
}

addTwo(10)
.then(response => {
    console.log(response);
    return response + 2;
}).then(response2 => console.log(response2))
.catch(err => console.error(err));
// 1 tane catch - birden çok then - Promise Chain
