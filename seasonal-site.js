(() => {
  const christmasStartsAt = Date.UTC(2026, 10, 16, 15); // 2026-11-17 00:00 KST
  const christmasEndsAt = Date.UTC(2026, 11, 26, 15); // 2026-12-27 00:00 KST
  // Matches SeasonalCostume in the app: 2027-01-01 to 2027-02-10 00:00 KST (exclusive).
  const seolbimStartsAt = Date.UTC(2026, 11, 31, 15);
  const seolbimEndsAt = Date.UTC(2027, 1, 9, 15);
  const now = Date.now();
  const previewSeason = new URLSearchParams(location.search).get("season");
  // Seolbim stays secret until launch: its ?season preview only works on a local server.
  const canPreviewSeolbim = now >= seolbimStartsAt || ["localhost", "127.0.0.1"].includes(location.hostname);
  if ((previewSeason === "seolbim" && canPreviewSeolbim) || (!previewSeason && now >= seolbimStartsAt && now < seolbimEndsAt)) return applySeolbim();
  const preview = previewSeason === "christmas";
  if (!preview && (now < christmasStartsAt || now >= christmasEndsAt)) return;

  // Apply the seasonal class before the stylesheet loads, so visitors do not
  // see the non-seasonal design flash during the event.
  document.documentElement.classList.add("christmas-site");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const swapCopy = () => {
    document.querySelectorAll("[data-christmas-text]").forEach((element) => {
      element.textContent = element.dataset.christmasText;
    });
    document.querySelectorAll("[data-christmas-html]").forEach((element) => {
      element.innerHTML = element.dataset.christmasHtml;
    });
  };

  // Character sprites → costume versions from scripts/make_christmas_web_assets.py.
  const costumeFor = (src) => src
    .replace(/\.\/character-assets\/capybara-walk\.png$/, "./website-assets/christmas/capybara-walk-1.png")
    .replace(/\.\/character-assets\/([a-z-]+)\.png$/, (match, slug) => (/-(walk|jump)$/.test(slug) ? match : `./website-assets/christmas/${slug}.png`))
    .replace(/\.\/website-assets\/walk\/([a-z-]+)-walk-(\d)\.png$/, (match, slug, frame) => `./website-assets/christmas/${slug}-walk-${(Number(frame) % 2) + 1}.png`);
  const dressCharacters = () => {
    document.querySelectorAll("img[src]").forEach((image) => {
      const src = image.getAttribute("src");
      const costume = costumeFor(src);
      if (costume !== src) image.setAttribute("src", costume);
    });
  };

  const fillStocking = () => {
    const goal = document.querySelector("[data-stocking-cups]");
    if (!goal) return;
    const cups = Number(goal.dataset.stockingCups) || 0;
    const target = Number(goal.dataset.stockingGoal) || 100;
    goal.querySelectorAll("[data-stocking-count]").forEach((element) => { element.textContent = cups; });
    goal.querySelectorAll("[data-stocking-goal-label]").forEach((element) => { element.textContent = target; });
    // Wait a frame so the fill animates in from empty.
    requestAnimationFrame(() => goal.style.setProperty("--fill", Math.min(cups / target, 1)));
  };

  const snowHero = () => {
    const hero = document.querySelector(".home-hero");
    if (!hero) return;

    const canvas = document.createElement("canvas");
    canvas.className = "snow-canvas";
    canvas.setAttribute("aria-hidden", "true");
    const ground = document.createElement("div");
    ground.className = "snow-ground";
    const walker = document.createElement("div");
    walker.className = "snow-walker";
    walker.setAttribute("aria-hidden", "true");
    walker.innerHTML = '<img src="./website-assets/christmas/capybara-walk-1.png" alt="">';
    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "snow-toggle";
    hero.append(canvas, ground, walker, toggle);

    const context = canvas.getContext("2d");
    const walkFrame = walker.querySelector("img");
    let width = 0;
    let height = 0;
    const resize = () => {
      const ratio = window.devicePixelRatio || 1;
      width = hero.clientWidth;
      height = hero.clientHeight;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };
    resize();
    new ResizeObserver(resize).observe(hero);

    const flakes = Array.from({ length: 90 }, () => ({
      x: Math.random() * width, y: Math.random() * height,
      r: 1 + Math.random() * 2.4, speed: .3 + Math.random() * .8, phase: Math.random() * 6,
    }));
    const drawFlakes = () => {
      context.clearRect(0, 0, width, height);
      context.fillStyle = "rgba(255, 255, 255, .85)";
      flakes.forEach((flake) => {
        context.beginPath();
        context.arc(flake.x, flake.y, flake.r, 0, Math.PI * 2);
        context.fill();
      });
    };

    let running = !reduceMotion;
    let x = width * .72;
    let tick = 0;
    walker.style.transform = `translateX(${x}px)`;

    const setToggle = () => {
      toggle.textContent = running ? "눈 멈추기" : "눈 내리기";
      toggle.setAttribute("aria-pressed", String(running));
    };
    toggle.addEventListener("click", () => {
      running = !running;
      setToggle();
      if (running) requestAnimationFrame(step);
    });
    setToggle();
    drawFlakes();

    function step() {
      if (!running) return;
      tick += 1;
      flakes.forEach((flake) => {
        flake.y += flake.speed;
        flake.x += Math.sin((flake.y + flake.phase * 40) / 40) * .4;
        if (flake.y > height) { flake.y = -4; flake.x = Math.random() * width; }
      });
      drawFlakes();

      if (tick % 10 === 0) walkFrame.src = `./website-assets/christmas/capybara-walk-${((tick / 10) % 2) + 1}.png`;
      x -= .7;
      if (x < -90) x = width + 10;
      walker.style.transform = `translateX(${x}px)`;

      if (tick % 26 === 0) {
        const print = document.createElement("span");
        print.className = "snow-print";
        print.style.left = `${x + 50}px`;
        print.style.bottom = `${tick % 52 ? 26 : 30}px`;
        hero.append(print);
        setTimeout(() => { print.style.opacity = "0"; }, 1500);
        setTimeout(() => print.remove(), 4600);
      }
      requestAnimationFrame(step);
    }
    if (running) requestAnimationFrame(step);
  };

  const apply = () => {
    swapCopy();
    dressCharacters();
    fillStocking();
    snowHero();
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", apply, { once: true });
  else apply();

  function applySeolbim() {
    document.documentElement.classList.add("seolbim-site");
    const apply = () => {
      document.querySelectorAll("[data-seolbim-text]").forEach((element) => { element.textContent = element.dataset.seolbimText; });
      document.querySelectorAll("[data-seolbim-html]").forEach((element) => { element.innerHTML = element.dataset.seolbimHtml; });
      document.querySelectorAll("img[src]").forEach((image) => {
        const src = image.getAttribute("src");
        const dressed = src
          .replace(/\.\/character-assets\/capybara-walk\.png$/, "./website-assets/seolbim/capybara-walk-1.png")
          .replace(/\.\/character-assets\/([a-z-]+)\.png$/, (match, slug) => (/-(walk|jump)$/.test(slug) ? match : `./website-assets/seolbim/${slug}.png`))
          .replace(/\.\/website-assets\/walk\/([a-z-]+)-walk-(\d)\.png$/, (match, slug, frame) => `./website-assets/seolbim/${slug}-walk-${(Number(frame) % 2) + 1}.png`);
        if (dressed !== src) image.setAttribute("src", dressed);
      });
      const hero = document.querySelector(".home-hero");
      if (!hero) return;
      const scene = document.createElement("div");
      scene.className = "seolbim-scene";
      scene.setAttribute("aria-hidden", "true");
      scene.innerHTML = '<span class="seolbim-sun"></span><span class="seolbim-band"></span>'
        + '<span class="seolbim-parade"><img src="./website-assets/seolbim/cat-walk-1.png" alt=""><img src="./website-assets/seolbim/capybara-walk-1.png" alt=""><img src="./website-assets/seolbim/hedgehog-walk-1.png" alt=""></span>';
      hero.append(scene);
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const frames = scene.querySelectorAll(".seolbim-parade img");
      let frame = 1;
      setInterval(() => {
        frame = frame === 1 ? 2 : 1;
        frames.forEach((image) => { image.src = image.src.replace(/-walk-\d\.png$/, `-walk-${frame}.png`); });
      }, 220);
    };
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", apply, { once: true });
    else apply();
  }
})();
