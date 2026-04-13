function speak(text) {
    if(!text) return;

    const utterance = new SpeechSynthesisUtterance(text);

    utterance.rate = 1; //speed
    utterance.pitch = 1; //tone

    //stop any ongoing speech
    speechSynthesis.cancel();

    speechSynthesis.speak(utterance);
}

function stop() {
    speechSynthesis.cancel();
}