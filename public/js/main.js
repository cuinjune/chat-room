async function getChatData() {
    const chatUrl = "/api/v1/chat";
    const chatUrlApiOptions = {method: "GET"};
    const chatUrlResponse = await fetch(chatUrl, chatUrlApiOptions);
    const chatJson = await chatUrlResponse.json();
    return chatJson;
}

async function addChatDataElement(name, message) {
    const chatUrl = "/api/v1/chat";
    const chatUrlApiOptions = {method: "POST", headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}, body: JSON.stringify({name: name, message: message})};
    const chatUrlResponse = await fetch(chatUrl, chatUrlApiOptions);
    const chatJson = await chatUrlResponse.json();
    return chatJson;
}

async function clearChatData() {
    const chatUrl = "/api/v1/chat";
    const chatUrlApiOptions = {method: "DELETE", headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}};
    const chatUrlResponse = await fetch(chatUrl, chatUrlApiOptions);
    const chatJson = await chatUrlResponse.json();
    return chatJson;
}

window.addEventListener('DOMContentLoaded', async () => {

    addChatDataElement("David", "That's Cool man!!");
    const chatData = getChatData();
    console.log(chatData);

    // clearChatData();

});