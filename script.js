function searchItems() {
    const input = document.getElementById("searchInput");
    const cards = document.querySelectorAll(".item-card");
    const query = input.value.trim().toLowerCase();

    cards.forEach(function(card) {
        const text = card.textContent.toLowerCase();

        if (text.includes(query)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

function showLogin() {
    alert("Бұл функция келесі кезеңде PHP арқылы жасалады!");
}
