document.getElementById("toggle-reviews").onclick = function() {
    var moreReviews = document.getElementById("more-reviews");
    if (moreReviews.classList.contains("hidden")) {
        moreReviews.classList.remove("hidden");
        this.textContent = "Ver Menos Reviews";
    } else {
        moreReviews.classList.add("hidden");
        this.textContent = "Ver Mais Reviews";
    }
};
