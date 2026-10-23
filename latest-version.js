(() => {
  const versionBadges = document.querySelectorAll("[data-latest-version]");
  if (!versionBadges.length) return;

  const numericParts = (version) => version.split(/[+-]/, 1)[0].split(".").map(Number);
  const isNewerOrEqual = (candidate, fallback) => {
    const candidateParts = numericParts(candidate);
    const fallbackParts = numericParts(fallback);
    const length = Math.max(candidateParts.length, fallbackParts.length);
    for (let index = 0; index < length; index += 1) {
      const difference = (candidateParts[index] || 0) - (fallbackParts[index] || 0);
      if (difference) return difference > 0;
    }
    return true;
  };

  const setVersion = (version) => {
    if (!/^\d+(?:\.\d+){1,3}(?:[-+][0-9A-Za-z.-]+)?$/.test(version)) return;
    versionBadges.forEach((badge) => {
      if (!isNewerOrEqual(version, badge.dataset.versionFallback || "0")) return;
      const prefix = badge.dataset.versionPrefix || "Latest version";
      badge.textContent = `✦ ${prefix} ${version}`;
    });
  };

  fetch("./appcast.xml", { cache: "no-store" })
    .then((response) => {
      if (!response.ok) throw new Error("Could not load the update feed");
      return response.text();
    })
    .then((xml) => {
      const document = new DOMParser().parseFromString(xml, "application/xml");
      if (document.querySelector("parsererror")) throw new Error("Invalid update feed");
      const version = document.getElementsByTagNameNS("*", "shortVersionString")[0]?.textContent?.trim();
      if (version) setVersion(version);
    })
    .catch(() => {
      // Keep the version bundled in the page if the update feed is unavailable.
    });
})();
