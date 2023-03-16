// async function test(data) {
//     //async anahtar kelimesi 
//     //Promise return new promise şeklinde promise döneceğini söylüyor.
//     // return data;
//     let promise = new Promise((resolve,rejact) => {
//         setTimeout(() => {
//             resolve("Bu bir değerdir.");
//         },5000);
//     });

//     let response = await promise; // 5 saniye bekleyecek.

//     // console.log(response);
//     // console.log("Naber");

//     return response;
// }

// test("Merhaba").then(response => console.log(response));

// // Await sadece Async fonksiyonların içinde çalışır


// async function testData(data) {
//     let promise = new Promise((resolve,rejact) => {
//         setTimeout(() => {
//             if(typeof data === "string") {
//                 resolve(data);
//             }
//             else {
//                 rejact(new Error("Lütfen string bir değer girin"))
//             }
//         },5000);
//     })

//     const response = await promise;

//     return response;
// }

// testData("thriller")
// .then(data => console.log(data))
// .catch(err => console.log(err));


async function getCurrency(url){
    const response = await fetch(url); //Response Object

    const data = await response.json(); // Json object

    return data;

}

getCurrency("https://api.exchangeratesapi.io/latest")
.then(ahmet => console.log(ahmet));