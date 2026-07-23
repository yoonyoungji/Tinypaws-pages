const supportedLocales = ["ko", "en"];
const copy = {
  ko: {
    common: { home: "홈", support: "지원", privacy: "개인정보처리방침", releases: "버전 기록", download: "TinyPaws 다운로드", latest: "최신 버전 1.2.3", email: "문의 이메일", developer: "개발자: youngji Yoon", response: "답변은 보통 3영업일 안에 드립니다.", footer: "TinyPaws 공식 지원 및 개인정보처리방침", close: "닫기" },
    index: {
      title: "TinyPaws — Mac 데스크톱 펫", eyebrow: "TinyPaws · macOS 데스크톱 펫", heading: "Mac 화면에서 함께 걷는 작은 친구.", lead: "TinyPaws는 화면 위를 자연스럽게 움직이며 일상에 작은 생기를 더하는 macOS 데스크톱 펫입니다. 메뉴 막대에서 캐릭터와 움직임을 내 취향대로 설정해 보세요.", downloadCta: "최신 버전 다운로드", supportCta: "도움말 보기", privacyCta: "개인정보처리방침", releasesCta: "버전 기록",
      // TEMP: Restore the six-character copy, including Heukkongi, when reopening.
      // companions: "여섯 명의 데스크톱 친구", companionsLead: "카피바라, 고양이, 고릴라, 흑콩이, 푸들, 햄스터 중 마음에 드는 캐릭터를 고를 수 있어요.",
      companions: "다섯 명의 데스크톱 친구", companionsLead: "카피바라, 고양이, 고릴라, 푸들, 햄스터 중 마음에 드는 캐릭터를 고를 수 있어요.",
      features: "내 화면에 맞게 설정", featureItems: [["걷기 스타일", "화면 안을 자유롭게 걷거나, 모니터 테두리를 따라 걷게 할 수 있어요."], ["이동 범위", "현재 모니터 안에서만 또는 모든 연결된 모니터에서 움직이게 설정하세요."], ["디테일 조절", "사이즈, 투명도, 걷기 속도를 바꿔 작업 흐름에 맞출 수 있어요."]],
      showcase: "TinyPaws를 한눈에", showcaseLead: "화면 위에서 함께 걷고, 내 작업 환경에 맞게 설정하는 모습을 확인해 보세요.", showcaseItems: [["함께 걷는 작은 친구", "화면 위를 자연스럽게 걷고, 필요할 때는 원하는 위치로 옮길 수 있어요.", "01-main-ko-final.png"], ["취향에 맞춘 디테일", "캐릭터 크기와 투명도, 걷기 속도를 나에게 편한 방식으로 조절하세요.", "03-customize-ko-final.png"], ["내 화면에 맞는 움직임", "현재 모니터 안에서만 움직이게 하거나, 여러 화면을 자유롭게 오가게 할 수 있어요.", "04-placement-ko-final.png"], ["입력에 반응하는 재미", "타이핑과 스페이스바 입력에 맞춰 캐릭터가 더 생동감 있게 반응합니다.", "05-animation-ko-final.png"]],
      // keyboard: "키보드에 반응하는 움직임", keyboardLead: "입력하면 캐릭터가 걸어가고, 스페이스바로 점프합니다. 흑콩이는 스페이스바를 누르면 귀여운 간식 포즈를 취하고, 고릴라는 Delete 키를 빠르게 연속 입력하면 특별한 질주 효과를 보여줘요.",
      keyboard: "키보드에 반응하는 움직임", keyboardLead: "입력하면 캐릭터가 걸어가고, 스페이스바로 점프합니다. 고릴라는 Delete 키를 빠르게 연속 입력하면 특별한 질주 효과를 보여줘요.",
      // release: "1.2.3 업데이트", releaseLead: "흑콩이 전용 달리기 프레임을 추가해 빠른 움직임이 더 부드러워졌고, 연기 같은 잔상 대시 효과와 간식 포즈도 다듬었습니다.",
      release: "1.2.3 업데이트", releaseLead: "새로운 캐릭터 동작과 시각 효과를 다듬었습니다.",
      pages: "도움이 필요하신가요?", pagesLead: "사용 방법, 자주 묻는 질문, 개인정보 처리 방침을 확인할 수 있습니다.", coffee: "개발자에게 커피 사주기", coffeeLead: "TinyPaws가 즐거움을 더해 주었다면, 작은 응원으로 다음 업데이트를 함께 만들어 주세요.", toss: "토스로 응원하기", kakaopay: "카카오페이로 응원하기", supporters: "Coffee Supporters", supportersLead: "TinyPaws를 계속 다듬고 돌보는 데 힘을 보태 주신 분들께 감사드려요.", tossHelp: "휴대폰의 토스 앱으로 아래 QR 코드를 스캔해 주세요.", kakaopayHelp: "카카오페이 앱으로 아래 QR 코드를 스캔하거나 링크를 열어 주세요.", openKakao: "카카오페이 링크 열기"
    },
    releases: { title: "TinyPaws 버전 기록", eyebrow: "TinyPaws 업데이트", heading: "버전 기록", lead: "TinyPaws의 새 기능, 개선 사항, 수정 내역을 버전별로 확인하세요.", open: "릴리스 노트 보기" },
    support: {
      title: "TinyPaws 지원", eyebrow: "TinyPaws 지원", heading: "작은 Mac 친구를 위한 도움말.", lead: "TinyPaws 사용 중 도움이 필요하거나, 궁금한 점·오류·기능 제안이 있다면 언제든지 연락해 주세요.", overview: "앱 한눈에 보기", overviewItems: ["macOS 화면 위를 걷는 애니메이션 데스크톱 펫", "다섯 가지 캐릭터 선택", "사이즈·투명도·걷기 속도 조절", "자유 걷기 또는 테두리 따라 걷기", "현재 모니터 또는 전체 모니터 이동 범위 설정"], permissions: "권한 안내", permissionsLead: "키보드 반응 기능을 사용하려면 macOS의 손쉬운 사용 및 입력 모니터링 권한이 필요할 수 있습니다. 앱 메뉴의 ‘권한 안내 보기’에서 설정 위치를 확인할 수 있어요.", compatibility: "호환성", compatibilityItems: ["플랫폼: macOS", "최소 버전: macOS 13.0 이상", "형태: 메뉴 막대 데스크톱 컴패니언"], faq: "자주 묻는 질문", faqItems: [["캐릭터가 키보드 입력에 반응하지 않아요.", "시스템 설정 > 개인정보 보호 및 보안에서 TinyPaws의 손쉬운 사용 및 입력 모니터링 권한을 확인한 뒤 앱을 다시 열어 주세요."], ["캐릭터가 화면 일부를 가려요.", "캐릭터를 드래그해 옮기거나 메뉴 막대에서 사이즈와 투명도를 조절해 보세요."], ["고릴라의 특별 동작은 어떻게 쓰나요?", "Delete 키를 빠르게 연속 입력하면 특별 질주 효과가 실행됩니다."], ["오류를 제보하거나 기능을 제안하고 싶어요.", "macOS 버전, TinyPaws 버전, 문제를 재현하는 방법을 함께 적어 문의 이메일로 보내 주세요."]]
    },
    privacy: {
      title: "TinyPaws 개인정보처리방침", eyebrow: "TinyPaws 개인정보처리방침", heading: "TinyPaws 개인정보처리방침", lead: "이 방침은 TinyPaws가 사용하는 정보, 기기에 저장되는 정보, 그리고 앱이 수집하지 않는 정보를 설명합니다.", effective: "시행일: 2026년 6월 5일", local: "1. 기기에 저장되는 정보", localLead: "TinyPaws는 다음 실행 때 설정을 복원하기 위해 소량의 앱 설정을 Mac에 저장합니다.", localItems: ["선택한 캐릭터", "선택한 사이즈", "선택한 투명도", "선택한 걷기 속도", "선택한 이동 범위와 걷기 스타일"], localNote: "이 설정은 표준 macOS 앱 저장소를 통해 기기에만 저장되며, 개발자에게 전송되지 않습니다.", permissions: "2. 권한", permissionsLead: "TinyPaws의 핵심 기능에는 온라인 계정이나 클라우드 서비스가 필요하지 않습니다. 키보드 반응 기능을 쓰는 경우에만 macOS 권한이 필요할 수 있으며, 해당 권한은 기기에서만 처리됩니다.", logs: "3. 진단 로그", logsLead: "앱 상태와 문제 해결을 위해 Mac의 임시 로그 파일에 간단한 진단 메시지를 기록할 수 있습니다.", logsNote: "로그는 사용자가 지원팀에 직접 공유하지 않는 한 기기에 남아 있습니다.", none: "4. 수집하지 않는 정보", noneItems: ["계정 등록 정보", "결제 정보", "개인 식별 기반 분석 프로필", "클라우드 동기화 데이터", "브라우징 기록", "일반 사용 중 개발자에게 전송되는 개인정보"], third: "5. 제3자 서비스", thirdLead: "TinyPaws는 핵심 데스크톱 컴패니언 기능을 제공하기 위해 온라인 계정, 호스팅 백엔드, 제3자 분석 서비스를 요구하지 않습니다.", choices: "6. 사용자의 선택", choicesItems: ["언제든 이 기기에서 TinyPaws 설정을 검토하고 변경할 수 있습니다.", "언제든 앱을 삭제할 수 있습니다.", "앱 작동 방식에 관한 질문은 지원팀에 문의할 수 있습니다."], changes: "7. 방침 변경", changesLead: "TinyPaws의 기능 또는 데이터 처리 방식이 바뀌면 이 방침을 업데이트할 수 있습니다. 중요한 변경 사항은 개정 시행일과 함께 이 페이지에 반영합니다."
    }
  },
  en: {
    common: { home: "Home", support: "Support", privacy: "Privacy Policy", releases: "Release history", download: "Download TinyPaws", latest: "Latest version 1.2.3", email: "Support email", developer: "Developer: youngji Yoon", response: "Typical response time: within 3 business days", footer: "TinyPaws official support and privacy information", close: "Close" },
    index: {
      title: "TinyPaws — A Mac desktop pet", eyebrow: "TinyPaws · macOS desktop pet", heading: "A tiny friend that walks alongside your Mac.", lead: "TinyPaws is a macOS desktop pet that moves naturally across your screen and brings a little life to everyday work. Make it yours from the menu bar.", downloadCta: "Download latest version", supportCta: "Get support", privacyCta: "Privacy policy", releasesCta: "Release history",
      // companions: "Six desktop companions", companionsLead: "Choose the friend that feels right: Capybara, Cat, Gorilla, Heukkongi, Poodle, or Hamster.",
      companions: "Five desktop companions", companionsLead: "Choose the friend that feels right: Capybara, Cat, Gorilla, Poodle, or Hamster.",
      features: "Made to fit your desktop", featureItems: [["Walking style", "Let your companion wander freely or follow the edge of a display."], ["Movement range", "Keep it on the current display or let it explore every connected monitor."], ["Fine-tune the details", "Adjust size, opacity, and walk speed for the way you work."]],
      showcase: "See TinyPaws in action", showcaseLead: "See how your companion walks alongside your work and adapts to your desktop.", showcaseItems: [["A small friend at your side", "Your companion walks naturally across the screen and can be moved whenever you need.", "01-main-en-final.png"], ["Details tuned to you", "Adjust character size, opacity, and walking speed to suit the way you work.", "03-customize-en-final.png"], ["Movement for your setup", "Keep your companion on one display or let it wander across all of your screens.", "04-placement-en-final.png"], ["A more lively desktop", "Your companion reacts to typing and the Space bar for a more playful presence.", "05-animation-en-final.png"]],
      // keyboard: "Movement that reacts to your keyboard", keyboardLead: "Your companion walks as you type and jumps with the Space bar. Heukkongi does a cute snack pose with Space; Gorilla has a special rampage effect when you rapidly press Delete.",
      keyboard: "Movement that reacts to your keyboard", keyboardLead: "Your companion walks as you type and jumps with the Space bar. Gorilla has a special rampage effect when you rapidly press Delete.",
      // release: "New in 1.2.3", releaseLead: "Heukkongi now has dedicated run frames for smoother fast movement, a smoky phantom-dash effect, and a refined snack pose.",
      release: "New in 1.2.3", releaseLead: "Refined character movement and visual effects.",
      pages: "Need a hand?", pagesLead: "Find usage help, FAQs, and details about privacy.", coffee: "Buy Developer a Coffee", coffeeLead: "If TinyPaws brightens your desktop, a small show of support helps make the next update possible.", toss: "Support with Toss", kakaopay: "Support with Kakao Pay", supporters: "Coffee Supporters", supportersLead: "Thank you to everyone helping keep TinyPaws warm, cozy, and growing.", tossHelp: "Scan this QR code with the Toss app on your phone.", kakaopayHelp: "Scan this QR code with Kakao Pay, or open the link below.", openKakao: "Open Kakao Pay link"
    },
    releases: { title: "TinyPaws Release history", eyebrow: "TinyPaws updates", heading: "Release history", lead: "Browse new features, improvements, and fixes for every TinyPaws version.", open: "Read release notes" },
    support: {
      title: "TinyPaws Support", eyebrow: "TinyPaws Support", heading: "Help for your tiny Mac companion.", lead: "Need help using TinyPaws, have a question, found a bug, or want to suggest a feature? We would love to hear from you.", overview: "App overview", overviewItems: ["An animated desktop pet for macOS", "Five characters to choose from", "Size, opacity, and walk-speed controls", "Free wandering or edge-following movement", "Movement range for the current display or all displays"], permissions: "Permissions", permissionsLead: "Keyboard-reactive features may need macOS Accessibility and Input Monitoring permission. Use “View Permission Guide” in the app menu to find the right settings.", compatibility: "Compatibility", compatibilityItems: ["Platform: macOS", "Minimum version: macOS 13.0 or later", "App type: menu bar desktop companion"], faq: "Frequently asked questions", faqItems: [["My character does not react to keyboard input.", "Check TinyPaws in Accessibility and Input Monitoring under System Settings > Privacy & Security, then reopen the app."], ["The character covers part of my screen.", "Drag it somewhere else, or use the menu bar controls to adjust size and opacity."], ["How do I use the special Gorilla action?", "Rapidly press Delete with Gorilla selected to trigger its special rampage effect."], ["I want to report a bug or request a feature.", "Please include your macOS version, TinyPaws version, and steps to reproduce the issue in your email."]]
    },
    privacy: {
      title: "TinyPaws Privacy Policy", eyebrow: "TinyPaws Privacy Policy", heading: "Privacy Policy for TinyPaws", lead: "This policy explains what information TinyPaws uses, what is stored on your device, and what the app does not collect.", effective: "Effective date: June 5, 2026", local: "1. Information stored on your device", localLead: "TinyPaws stores a small set of preferences on your Mac so it can restore your settings the next time you open the app.", localItems: ["Selected character", "Selected size", "Selected opacity", "Selected walk speed", "Selected movement range and walking style"], localNote: "These preferences are stored only on your device using standard macOS app storage. They are not sent to us.", permissions: "2. Permissions", permissionsLead: "TinyPaws does not need an online account or cloud service for its core experience. Keyboard-reactive features may need macOS permissions, which are handled on your device.", logs: "3. Diagnostic logs", logsLead: "TinyPaws may write simple diagnostic messages to a temporary log file on your Mac for app status and troubleshooting.", logsNote: "These logs remain on your device unless you choose to share them with support.", none: "4. Information TinyPaws does not collect", noneItems: ["Account registration information", "Payment information", "Analytics profiles tied to your identity", "Cloud sync data", "Browsing history", "Personal data sent to the developer during normal use"], third: "5. Third-party services", thirdLead: "TinyPaws does not require an online account, hosted backend, or third-party analytics service to provide its core desktop-companion features.", choices: "6. Your choices", choicesItems: ["You can review and change TinyPaws settings on this device at any time.", "You can remove the app at any time.", "You can contact support with questions about how the app works."], changes: "7. Changes to this policy", changesLead: "This policy may be updated if TinyPaws adds new features or changes data practices. Material changes will be reflected here with a revised effective date."
    }
  }
};

// TEMP: Restore the Heukkongi entry when reopening the character.
// const characters = [["capybara", "Capybara", "카피바라"], ["cat", "Cat", "고양이"], ["gorilla", "Gorilla", "고릴라"], ["heukkongi", "Heukkongi", "흑콩이"], ["poodle", "Poodle", "푸들"], ["hamster", "Hamster", "햄스터"]];
const characters = [["capybara", "Capybara", "카피바라"], ["cat", "Cat", "고양이"], ["gorilla", "Gorilla", "고릴라"], ["poodle", "Poodle", "푸들"], ["hamster", "Hamster", "햄스터"]];
const releaseVersions = ["1.2.3", "1.2.2", "1.2.1", "1.2.0", "1.1.9", "1.1.8", "1.1.7", "1.1.6", "1.1.5", "1.1.4", "1.1.3", "1.1.2", "1.1.1", "1.0.9", "1.0.8", "1.0.7", "1.0.6", "1.0.5", "1.0.4", "1.0.3", "1.0.2", "1.0.1", "1.0"];
const esc = (value) => String(value).replace(/[&<>"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[char]);
const list = (items) => `<ul>${items.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>`;
const nav = (c) => `<nav class="nav" aria-label="Page links"><a href="./index.html">${c.home}</a><a href="./downloads/TinyPaws.dmg">${c.download}</a><a href="./release-notes.html">${c.releases}</a><a href="./support.html">${c.support}</a><a href="./privacy.html">${c.privacy}</a></nav>`;
const header = (c) => `<div class="topbar"><a class="brand" href="./index.html">TinyPaws</a><div class="locale-switcher" aria-label="Language"><button class="locale-button" type="button" data-locale="ko">한국어</button><button class="locale-button" type="button" data-locale="en">English</button></div></div>`;
const card = (title, content, full = false) => `<article class="card${full ? " full" : ""}"><h2>${esc(title)}</h2>${content}</article>`;

function indexPage(c) {
  const p = c.index;
  const featureCards = p.featureItems.map(([title, body]) => `<article class="feature"><h3>${esc(title)}</h3><p>${esc(body)}</p></article>`).join("");
  const characterCards = characters.map(([asset, en, ko]) => `<div class="character"><img class="character-icon" src="./character-assets/${asset}.png" alt="" loading="lazy"><strong>${esc(c === copy.ko ? ko : en)}</strong><small>${esc(c === copy.ko ? en : ko)}</small></div>`).join("");
  const showcaseCards = p.showcaseItems.map(([title, body, image]) => `<article class="showcase-item"><img src="./showcase-assets/${image}" alt="${esc(title)}" loading="lazy"><div class="showcase-copy"><h3>${esc(title)}</h3><p>${esc(body)}</p></div></article>`).join("");
  return `${header(c.common)}<section class="hero"><p class="eyebrow">${esc(p.eyebrow)}</p><h1>${esc(p.heading)}</h1><p class="lead">${esc(p.lead)}</p><div class="version-row"><div class="version-badge">✦ ${esc(c.common.latest)}</div><a class="btn primary download-button" href="./downloads/TinyPaws.dmg">${esc(p.downloadCta)}</a></div><div class="actions"><a class="btn secondary" href="./support.html">${esc(p.supportCta)}</a><a class="btn secondary" href="./privacy.html">${esc(p.privacyCta)}</a><a class="btn secondary" href="./release-notes.html">${esc(p.releasesCta)}</a></div></section><section class="grid">${card(p.companions, `<p class="muted">${esc(p.companionsLead)}</p><div class="character-grid">${characterCards}</div>`, true)}${card(p.showcase, `<p class="muted showcase-lead">${esc(p.showcaseLead)}</p><div class="showcase-grid">${showcaseCards}</div>`, true)}${card(p.features, `<div class="feature-grid">${featureCards}</div>`, true)}${card(p.keyboard, `<p class="muted">${esc(p.keyboardLead)}</p>`)}${card(p.release, `<p class="muted">${esc(p.releaseLead)}</p><p><a href="./release-notes.html">${esc(p.releasesCta)} →</a></p>`, false).replace('class="card"', 'class="card release"')}${card(p.pages, `<p class="muted">${esc(p.pagesLead)}</p>${nav(c.common)}`, true)}${card(p.coffee, `<p class="muted">${esc(p.coffeeLead)}</p><div class="payment-actions"><button class="payment-button primary" type="button" data-open-payment="toss">${esc(p.toss)}</button><button class="payment-button" type="button" data-open-payment="kakaopay">${esc(p.kakaopay)}</button></div><p class="muted"><strong>${esc(p.supporters)}</strong><br>${esc(p.supportersLead)}</p><div class="supporters-list"><span class="supporter-pill">🏆 <span class="supporter-rank">1</span> 김*상</span><span class="supporter-pill">🥈 <span class="supporter-rank">2</span> 장*민</span><span class="supporter-pill">🥉 <span class="supporter-rank">3</span> 한*수</span></div>`, true)}</section>${paymentModal(p, c.common)}`;
}

function releasesPage(c) {
  const p = c.releases;
  const releaseCards = releaseVersions.map((version) => `<a class="release-note-link" href="./release-notes/${version}.html"><strong>v${version}</strong><span>${esc(p.open)} →</span></a>`).join("");
  return `${header(c.common)}<section class="hero"><p class="eyebrow">${esc(p.eyebrow)}</p><h1>${esc(p.heading)}</h1><p class="lead">${esc(p.lead)}</p>${nav(c.common)}</section><section class="release-list" aria-label="${esc(p.heading)}">${releaseCards}</section>`;
}

function paymentModal(p, common) {
  return `<div class="payment-modal" id="paymentModal" hidden><div class="payment-sheet" role="dialog" aria-modal="true" aria-label="Payment options"><button class="payment-close" type="button" aria-label="${esc(common.close)}" data-close-payment>×</button><section class="payment-option" data-payment-option="toss" hidden><h2>${esc(p.toss)}</h2><p class="muted">${esc(p.tossHelp)}</p><div class="payment-qr"><img src="./support-assets/toss-qr.png" alt="Toss payment QR code"></div></section><section class="payment-option" data-payment-option="kakaopay" hidden><h2>${esc(p.kakaopay)}</h2><p class="muted">${esc(p.kakaopayHelp)}</p><div class="payment-qr"><img src="./support-assets/kakaopay-qr.jpeg" alt="Kakao Pay QR code"></div><a href="https://qr.kakaopay.com/Ej8FZ01vl" target="_blank" rel="noreferrer">${esc(p.openKakao)}</a></section></div></div>`;
}

function supportPage(c) {
  const p = c.support;
  const faqs = p.faqItems.map(([question, answer]) => `<div class="faq-item"><h3>${esc(question)}</h3><p class="muted">${esc(answer)}</p></div>`).join("");
  return `${header(c.common)}<section class="hero"><p class="eyebrow">${esc(p.eyebrow)}</p><h1>${esc(p.heading)}</h1><p class="lead">${esc(p.lead)}</p><div class="version-badge">✦ ${esc(c.common.latest)}</div>${nav(c.common)}</section><section class="grid">${card(c.common.email, `<p><a class="btn secondary" href="mailto:tinypawskr.official@gmail.com">tinypawskr.official@gmail.com</a></p><p class="muted">${esc(c.common.developer)}<br>${esc(c.common.response)}</p>`)}${card(p.overview, list(p.overviewItems))}${card(p.permissions, `<p class="muted">${esc(p.permissionsLead)}</p>`)}${card(p.compatibility, list(p.compatibilityItems))}${card(p.faq, faqs, true)}</section>`;
}

function privacyPage(c) {
  const p = c.privacy;
  return `${header(c.common)}<section class="hero"><p class="eyebrow">${esc(p.eyebrow)}</p><h1>${esc(p.heading)}</h1><p class="lead">${esc(p.lead)}</p>${nav(c.common)}</section><section class="stack"><article class="card"><p class="muted">${esc(p.effective)}<br>${esc(c.common.email)}: <a href="mailto:tinypawskr.official@gmail.com">tinypawskr.official@gmail.com</a></p></article><article class="card"><h2>${esc(p.local)}</h2><p>${esc(p.localLead)}</p>${list(p.localItems)}<p class="muted">${esc(p.localNote)}</p></article><article class="card"><h2>${esc(p.permissions)}</h2><p>${esc(p.permissionsLead)}</p></article><article class="card"><h2>${esc(p.logs)}</h2><p>${esc(p.logsLead)}</p><p class="muted">${esc(p.logsNote)}</p></article><article class="card"><h2>${esc(p.none)}</h2>${list(p.noneItems)}</article><article class="card"><h2>${esc(p.third)}</h2><p>${esc(p.thirdLead)}</p></article><article class="card"><h2>${esc(p.choices)}</h2>${list(p.choicesItems)}</article><article class="card"><h2>${esc(p.changes)}</h2><p>${esc(p.changesLead)}</p></article></section>`;
}

function initialLocale() {
  const fromUrl = new URLSearchParams(window.location.search).get("lang");
  if (supportedLocales.includes(fromUrl)) {
    localStorage.setItem("tinypaws-locale", fromUrl);
    return fromUrl;
  }
  const saved = localStorage.getItem("tinypaws-locale");
  if (supportedLocales.includes(saved)) return saved;
  return navigator.language.toLowerCase().startsWith("ko") ? "ko" : "en";
}

function render(locale, updateHistory = false) {
  const page = document.body.dataset.page;
  const c = copy[locale];
  document.documentElement.lang = locale;
  document.title = page === "index" ? c.index.title : page === "support" ? c.support.title : page === "releases" ? c.releases.title : c.privacy.title;
  const main = page === "index" ? indexPage(c) : page === "support" ? supportPage(c) : page === "releases" ? releasesPage(c) : privacyPage(c);
  document.getElementById("app").innerHTML = `<main class="wrap">${main}<footer>${esc(c.common.footer)}</footer></main>`;
  document.querySelectorAll("[data-locale]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.locale === locale));
    button.addEventListener("click", () => { localStorage.setItem("tinypaws-locale", button.dataset.locale); render(button.dataset.locale, true); });
  });
  setupPayment();
  if (updateHistory) {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", locale);
    history.replaceState(null, "", url);
  }
}

function setupPayment() {
  const modal = document.getElementById("paymentModal");
  if (!modal) return;
  const close = () => { modal.hidden = true; };
  document.querySelectorAll("[data-open-payment]").forEach((button) => button.addEventListener("click", () => {
    document.querySelectorAll("[data-payment-option]").forEach((option) => { option.hidden = option.dataset.paymentOption !== button.dataset.openPayment; });
    modal.hidden = false;
    modal.querySelector("[data-close-payment]").focus();
  }));
  modal.querySelector("[data-close-payment]").addEventListener("click", close);
  modal.addEventListener("click", (event) => { if (event.target === modal) close(); });
  document.addEventListener("keydown", (event) => { if (event.key === "Escape" && !modal.hidden) close(); });
}

render(initialLocale());
