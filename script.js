const getQuoteBtn = document.getElementById("getQuoteBtn");
const quoteText = document.getElementById("quoteText");

getQuoteBtn.addEventListener("click", () => {
    setLoadingState(true);
    getQuote();
});
/*Function*/
function setLoadingState(isLoading) {
    if (isLoading) {
        getQuoteBtn.classList.add("loading");
        getQuoteBtn.disabled = true;
        getQuoteBtn.textContent = "Seeking inspiration...";
    } else {
        getQuoteBtn.classList.remove("loading");
        getQuoteBtn.disabled = false;
        getQuoteBtn.textContent = "Discover Quote";
    }
}

async function getQuote() {
    try {
        const response = await fetch("https://dummyjson.com/quotes/random");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        quoteText.innerHTML = `"${data.quote}"<br><span style="display: block; margin-top: 12px; font-size: 0.95rem; color: var(--text-secondary); font-weight: 500;">— ${data.author}</span>`;
    } catch (error) {
        console.error("Error fetching quote:", error);
        quoteText.innerHTML = "Something went wrong. Let's try that again in a moment.";
    } finally {
        setLoadingState(false);
    }
}
