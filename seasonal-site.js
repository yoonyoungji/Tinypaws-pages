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

  const initCharacterCursor = () => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const characters = [
      "kkeomeoksari", "capybara", "cat", "russian-blue", "hedgehog",
      "poodle", "hamster", "magic-girl", "neutral-witch", "burger"
    ];
    const character = characters[Math.floor(Math.random() * characters.length)];
    const cursor = document.createElement("img");
    cursor.className = "tinypaws-character-cursor";
    cursor.src = `./character-assets/${character}.png`;
    cursor.alt = "";
    cursor.setAttribute("aria-hidden", "true");
    document.body.append(cursor);

    const moveCursor = (event) => {
      cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      cursor.classList.add("is-visible");
    };

    document.documentElement.classList.add("tinypaws-character-cursor-active");
    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", moveCursor);
    document.addEventListener("mouseleave", () => cursor.classList.remove("is-visible"));
    window.addEventListener("blur", () => cursor.classList.remove("is-visible"));
  };

  window.TinyPawsSeasonalSite = { apply };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      apply();
      initCharacterCursor();
    }, { once: true });
  } else {
    apply();
    initCharacterCursor();
  }
})();
