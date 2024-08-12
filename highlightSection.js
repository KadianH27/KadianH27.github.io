document.addEventListener('DOMContentLoaded', () => {
    const highlightButton = document.querySelector('.highlight-button');
    const mockupSection = document.querySelector('.design-mockup');

    highlightButton.addEventListener('click', () => {
        mockupSection.classList.toggle('highlight');
    });
});
