"use strict";

export const URL = 'https://jsonplaceholder.typicode.com/users/';

export async function getUsers(id) {
    for (let i = 1; i <= id; i++) {
    let response = await fetch(URL + i);
    let user = await response.json();
    const userList = document.getElementById('inputSelect');
    let option = document.createElement('option');
    option.setAttribute("value", user.name);
    option.innerHTML = `${user.name}`
    userList.appendChild(option);
   }
}