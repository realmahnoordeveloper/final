const increaseButtonEl = document.querySelector(".counter__button--increase");
const decreaseButtonEl = document.querySelector(".counter__button--decrease");
const counterValueEl = document.querySelector(".counter__value");
const resetButtonEl = document.querySelector(".counter__reset-button");

// Start from 0
counterValueEl.textContent = 0;

// Increase (max = 5)
increaseButtonEl.addEventListener("click", function () {
    let currentValue = +counterValueEl.textContent;

    if (currentValue < 5) {
        counterValueEl.textContent = currentValue + 1;
    }
});

// Decrease (min = 0)
decreaseButtonEl.addEventListener("click", function () {
    let currentValue = +counterValueEl.textContent;

    if (currentValue > 0) {
        counterValueEl.textContent = currentValue - 1;
    }
});

// Reset (back to 0)
resetButtonEl.addEventListener("click", function () {
    counterValueEl.textContent = 0;
});