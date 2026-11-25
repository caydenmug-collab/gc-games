
const searchInput = document.getElementById("gameSearch");
const gameCards = document.querySelectorAll(".game-card");

// Search games by title
if (searchInput) {
    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.toLowerCase();

        gameCards.forEach(function (card) {
            const gameName = card.querySelector("h3")
                .textContent.toLowerCase();

            if (gameName.includes(searchTerm)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });
    });
}
