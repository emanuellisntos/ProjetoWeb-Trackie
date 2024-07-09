document.querySelectorAll('.main__section-events-c').forEach((section) => {
    const nextButton = section.querySelector('.next');
    const prevButton = section.querySelector('.prev');
    const cardsEvents = section.querySelector('.cards-events');

    nextButton.addEventListener('click', () => {
        cardsEvents.appendChild(cardsEvents.firstElementChild);
    });

    prevButton.addEventListener('click', () => {
        cardsEvents.insertBefore(cardsEvents.lastElementChild, cardsEvents.firstElementChild);
    });
});