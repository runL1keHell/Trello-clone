"use strict";

export const URL = 'https://jsonplaceholder.typicode.com/users/';

export async function getUsers(id) {
    for (let i = 1; i <= id; i++) {
        try {
            let response = await fetch(URL + i);
            if (!response.ok) {
                throw new Error('Network response was not OK');
            }
            let user = await response.json();
            const userList = document.getElementById('inputSelect');
            let option = document.createElement('option');
            option.setAttribute("value", user.name);
            option.innerHTML = `${user.name}`;
            userList.appendChild(option);
        } catch (error) {
            console.error(`Error fetching user with ID ${i}:`, error.message);
        }
    }
}