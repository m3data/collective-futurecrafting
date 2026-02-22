document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".filter-button");
  const cards = document.querySelectorAll(".org-card");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      // Update button states
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter.toLowerCase().replace(/\s+/g, '-');

      cards.forEach(card => {
        if (filter === "all") {
          card.style.display = "block";
        } else {
          const match = card.classList.contains(`focus-${filter}`);
          card.style.display = match ? "block" : "none";
        }
      });
    });
  });
});