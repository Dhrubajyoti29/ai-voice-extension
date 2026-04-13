let lastSpokenText = "";

// Observe DOM changes
const observer = new MutationObserver(() => {
    const latest = getLatestMessage();

    if(!latest) return;

    //prevent repeated speech
    if (latest !== lastSpokenText) {
        lastSpokenText = latest;
        speak(latest);
    }
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});