async function getChatData() {
    const chatUrl = "/api/v1/chat/data";
    const chatUrlApiOptions = { method: "GET" };
    const chatUrlResponse = await fetch(chatUrl, chatUrlApiOptions);
    const chatJson = await chatUrlResponse.json();
    return chatJson;
}

async function addChatDataElement(name, message) {
    const chatUrl = "/api/v1/chat/data";
    const chatUrlApiOptions = { method: "POST", headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }, body: JSON.stringify({ name: name, message: message }) };
    const chatUrlResponse = await fetch(chatUrl, chatUrlApiOptions);
    const chatJson = await chatUrlResponse.json();
    return chatJson;
}

async function clearChatData() {
    const chatUrl = "/api/v1/chat/data";
    const chatUrlApiOptions = { method: "DELETE", headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } };
    const chatUrlResponse = await fetch(chatUrl, chatUrlApiOptions);
    const chatJson = await chatUrlResponse.json();
    return chatJson;
}

async function getChatNumVisitors() {
    const chatUrl = "/api/v1/chat/numvisitors";
    const chatUrlApiOptions = { method: "GET" };
    const chatUrlResponse = await fetch(chatUrl, chatUrlApiOptions);
    const chatJson = await chatUrlResponse.json();
    return chatJson;
}

async function updateChatNumVisitors(num) {
    const chatUrl = `/api/v1/chat/numvisitors/${num}`;
    const chatUrlApiOptions = { method: "PUT", headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } };
    const chatUrlResponse = await fetch(chatUrl, chatUrlApiOptions);
    const chatJson = await chatUrlResponse.json();
    return chatJson;
}


function inputAreaNameKeyPressed() {
    var key = window.event.keyCode;
    if (key === 13) {
        event.preventDefault();
        return false;
    }
    else {
        return true;
    }
}

function addDivToChatArea(name, message) {
    const $chatArea = document.getElementById("chatArea");
    const $div = document.createElement('div');
    $div.className = "chatArea__text";
    $div.textContent = `${name}: ${message}`;
    $chatArea.appendChild($div);

    $chatArea.scrollTop = $chatArea.scrollHeight;
}

function sendCurrentChatMessage() {
    $name = document.getElementById("inputArea__name").value;
    $message = document.getElementById("inputArea__message").value;
    addChatDataElement($name, $message);
    addDivToChatArea($name, $message);
    document.getElementById("inputArea__message").value = "";
}

function inputAreaMessageKeyPressed() {
    var key = window.event.keyCode;
    if (key === 13) {
        sendCurrentChatMessage();
        event.preventDefault();
        return false;
    }
    else {
        return true;
    }
}

window.addEventListener('DOMContentLoaded', async () => {
    const chatData = await getChatData();
    for (let i = 0; i < chatData.length; ++i) {
        addDivToChatArea(chatData[i].name, chatData[i].message);
    }
    let numVisitors = await getChatNumVisitors();
    if (numVisitors < 1000000) {
        numVisitors++;
    }
    else {
        numVisitors = 0;
    }
    await updateChatNumVisitors(numVisitors);
    $name = document.getElementById("inputArea__name");
    $name.textContent = `Guest${numVisitors}`;

    //send button listener
    const $sendButton = document.querySelector("#inputArea__sendButton");
    $sendButton.addEventListener('click', (out) => {
        sendCurrentChatMessage();
    });
});