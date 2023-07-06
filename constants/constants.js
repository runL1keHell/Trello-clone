"use strict";
export const ACTIONS = {
    addTodo: "Add todo",
    deleteAllDone: "Delete all",
};

export const BUTTON_TITLES = {
    editTodo: "EDIT",
    deleteTodo: "DELETE",
    moveTodoBack: "BACK",
    markToDoComplete: "COMPLETE",
    cancel: "Cancel",
    confirm: "Confirm",
    movetoInProgress: ">",
};

export const CARD_FIELDS = {
    title: "Title",
    description: "Description"
};

export const CARDS_LIMIT_INPROGRESS = 6;

export const ERROR_TITLE = {
    fieldError: "Title field is required to be filled in"
};

export const WARNING_LIMIT_INPROGRESS = {
    warningText: `There are ${CARDS_LIMIT_INPROGRESS} tasks In Progress already. Do you confirm adding one more?`
};

export const WARNING_DELETE_ALL_CARDS = {
    warningText: "Are you sure you want to delete all done tasks?"
};

export const remoteUsersCount = 3;

export const CARD_COLORS = {
    green: "#d5e8d4",
    gray: "#f5f5f5",
    blue: "#d9e8fb",
    red: "#f7cecc",
};

export const MOCK_API1 = 'https://649eda18245f077f3e9d00a8.mockapi.io/'

export const MOCK_API2 = 'https://64a321b9b45881cc0ae62cbb.mockapi.io'

