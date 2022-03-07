"use strict";

// const getText = async(path) => {
//     const response = await fetch(path, {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/text'
//         }
//     });
//     return response.text();
// }
//
// console.log(getText("./test.txt")); // Promise

// const getText2 = async(path = '', data = {}) => {
//     const response = await fetch(path, {
//         method: 'GET',
//         mode: 'cors', // no-cors, *cors, same-origin
//         cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//         credentials: 'same-origin', // include, *same-origin, omit
//         headers: {
//             'Content-Type': 'application/text'
//             // 'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         redirect: 'follow', // manual, *follow, error
//         referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//         body: JSON.stringify(data) // body data type must match "Content-Type" header
//     });
//     return response.json(); // parses JSON response into native JavaScript objects
// }
//
// console.log(getText2("./test.json")); // Uncaught (in promise) TypeError: Failed to execute 'fetch' on 'Window': Request with GET/HEAD method cannot have body.

// const response = await fetch('/api/names', {
//     method: 'GET'
// });

const getJson = async() => {
    const response = await fetch('./test.json');
    const names = await response.json();
    // console.log(names);
    return names;
    // logs [{ name: 'Joker'}, { name: 'Batman' }]
}

const getAsyncJson = async() => {
    return await getJson();
}

// getJson();
console.log("loadNames returned: ");
// console.log(getJson()); // Promise
console.log(getAsyncJson()); // Promise