const cards = document.getElementById("cards");
const results = document.getElementById("results");

const normalButton = document.getElementById("normal-test");
const autoButton = document.getElementById("auto-test");
const selectorButton = document.getElementById("selector-test");


function createCards(useContentVisibility) {
    cards.innerHTML = "";

    if (useContentVisibility) {
        cards.classList.add("performance-auto");
    } else {
        cards.classList.remove("performance-auto");
    }

    const fragment = document.createDocumentFragment();

    for (let i = 1; i <= 5000; i++) {
        const card = document.createElement("article");

        card.className = "card";

        card.innerHTML = `
            <h2>Kaart ${i}</h2>
            <p>See on jõudlustesti kaart number ${i}.</p>
        `;

        fragment.appendChild(card);
    }

    cards.appendChild(fragment);
}


function forceLayout() {
    return cards.offsetHeight;
}


async function measureLayout(useContentVisibility) {
    cards.innerHTML = "";

    await new Promise((resolve) => {
        requestAnimationFrame(resolve);
    });

    const start = performance.now();

    createCards(useContentVisibility);
    forceLayout();

    const end = performance.now();

    return end - start;
}


normalButton.addEventListener("click", async () => {
    const time = await measureLayout(false);

    results.textContent =
        `Ilma content-visibility-ta: ${time.toFixed(2)} ms`;
});


autoButton.addEventListener("click", async () => {
    const time = await measureLayout(true);

    results.textContent =
        `content-visibility: auto: ${time.toFixed(2)} ms`;
});


function benchmarkSelector(selector, iterations = 200) {
    const start = performance.now();

    for (let i = 0; i < iterations; i++) {
        document.querySelectorAll(selector);
    }

    const end = performance.now();

    return end - start;
}


selectorButton.addEventListener("click", () => {
    if (cards.children.length !== 5000) {
        createCards(false);
        forceLayout();
    }

    const classTime = benchmarkSelector(".card");
    const elementTime = benchmarkSelector("article");
    const universalTime = benchmarkSelector("*");
    const deepTime = benchmarkSelector("#cards .card p");

    results.textContent =
        `Valijate mõõtmine:\n\n` +
        `.card: ${classTime.toFixed(2)} ms\n` +
        `article: ${elementTime.toFixed(2)} ms\n` +
        `*: ${universalTime.toFixed(2)} ms\n` +
        `#cards .card p: ${deepTime.toFixed(2)} ms`;
});