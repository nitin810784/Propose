const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');
const btn = document.querySelector('.button');

noButton.addEventListener('mouseenter', () => {
    const yesIndex = Array.from(btn.children).indexOf(yesButton);
    const noIndex = Array.from(btn.children).indexOf(noButton);

    if (yesIndex < noIndex) {
        btn.insertBefore(noButton, yesButton);
    } else {
        btn.insertBefore(yesButton, noButton);
    }
});

yesButton.addEventListener('click', () => {
    // Display romantic line
    alert('You are my sunshine, my only sunshine. You make me happy when skies are gray.');

    setTimeout(() => {
        alert(`Thank you for accepting my proposal. You've made me the happiest person alive!`);
    }, 2000);
});