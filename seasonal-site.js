(() => {
  const halloweenEndsAt = Date.UTC(2026, 9, 31, 15); // 2026-11-01 00:00 KST
  const isHalloweenActive = () => Date.now() < halloweenEndsAt;

  // Apply the seasonal class before the stylesheet loads, so visitors do not
  // see the non-seasonal design flash during the event.
  if (isHalloweenActive()) document.documentElement.classList.add("halloween-site");

  const apply = () => {
    if (!isHalloweenActive()) return;
    document.querySelectorAll("[data-halloween-text]").forEach((element) => {
      element.textContent = element.dataset.halloweenText;
    });
    document.querySelectorAll("[data-halloween-html]").forEach((element) => {
      element.innerHTML = element.dataset.halloweenHtml;
    });
  };

  window.TinyPawsSeasonalSite = { apply };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", apply, { once: true });
  else apply();
})();
