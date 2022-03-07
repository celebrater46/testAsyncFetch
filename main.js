"use strict";

const getText = async(path) => {
    const response = await fetch(path, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/text'
        }
    });
    return response.text();
}

console.log(getText("./test.txt"));