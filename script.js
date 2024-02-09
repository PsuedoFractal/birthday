document.addEventListener('DOMContentLoaded', function() {
    const wavingTeddyGif = document.getElementById('waving-teddy-gif');
    const huggingTeddyGif = document.getElementById('hugging-teddy-gif');
    const birthdayMessage = document.getElementById('birthday-message');
    const message = document.getElementById('message');
    const clickMeText = document.getElementById('click-me-text');

    wavingTeddyGif.addEventListener('click', function() {
        wavingTeddyGif.classList.add('hidden');
        clickMeText.classList.add('hidden');
        setTimeout(function() {
            huggingTeddyGif.classList.remove('hidden');
            huggingTeddyGif.classList.add('visible');
            birthdayMessage.classList.remove('hidden');
            birthdayMessage.classList.add('visible');
        }, 100);
    });

    birthdayMessage.addEventListener('click', function() {
        birthdayMessage.classList.remove('visible');
        birthdayMessage.classList.add('hidden');
        huggingTeddyGif.classList.remove('visible');
        huggingTeddyGif.classList.add('hidden');
        message.classList.remove('hidden');
        message.classList.add('visible');
    }, 100);
});
