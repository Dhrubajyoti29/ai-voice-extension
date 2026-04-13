function getAssistantMessages() {
    return document.querySelectorAll('section[data-turn="assistant"]');
}

function getLatestMessage() {
    const messages = getAssistantMessages();

    if (!messages.length) return null;
    const lastMessage = messages[messages.length - 1];
    return lastMessage.innerText.trim();
}