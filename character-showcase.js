const characterProfiles = {
  kkeomeoksari: {
    name: "꺼먹살이",
    tagline: "간식 앞에서는 누구보다 진심!",
    description: "말랑한 눈빛으로 화면 한쪽을 지키는 든든한 친구예요. 가만히 바라보고 있으면 바쁜 마음도 조금 느긋해져요.",
    traits: ["말랑한 눈빛", "조용한 응원", "귀여운 점프"]
  },
  capybara: {
    name: "카피바라",
    tagline: "서두르지 않아도 괜찮아요.",
    description: "느긋한 걸음으로 Mac 화면을 산책하며 바쁜 하루에 작은 쉼표를 놓아줘요. TinyPaws의 대표 산책가예요.",
    traits: ["느긋한 산책", "평온한 표정", "든든한 존재감"]
  },
  cat: {
    name: "아메리칸 숏헤어",
    tagline: "궁금한 건 참을 수 없어요.",
    description: "초록빛 눈으로 화면 구석구석을 살펴보는 호기심 많은 친구예요. 길게 몸을 뻗는 점프도 놓치지 마세요.",
    traits: ["초록빛 눈", "호기심 가득", "날렵한 점프"]
  },
  "russian-blue": {
    name: "러시안 블루",
    tagline: "은빛 발걸음으로 사뿐사뿐.",
    description: "차분한 회색 털과 맑은 초록빛 눈이 매력적인 친구예요. 새침한 표정으로 화면을 거닐다가도 신나는 점프로 마음을 보여줘요.",
    traits: ["은빛 털", "초록빛 눈", "우아한 산책"]
  },
  hedgehog: {
    name: "고슴도치",
    tagline: "작지만 씩씩한 발걸음.",
    description: "동그란 몸에 용기를 가득 담고 오늘의 산책을 시작해요. 조그만 발로 바쁘게 걷는 모습이 매력적인 친구예요.",
    traits: ["용감한 마음", "복슬복슬 가시", "야무진 발걸음"]
  },
  poodle: {
    name: "푸들",
    tagline: "기분 좋은 발걸음 총총.",
    description: "포근한 털과 경쾌한 움직임으로 화면의 분위기를 환하게 밝혀줘요. 함께 걷다 보면 저절로 기분이 좋아져요.",
    traits: ["포근한 털", "경쾌한 산책", "신나는 점프"]
  },
  hamster: {
    name: "햄스터",
    tagline: "작은 몸으로 누구보다 바쁘게!",
    description: "통통 튀는 에너지로 화면 위를 귀엽게 누비는 친구예요. 작지만 존재감만큼은 누구에게도 지지 않아요.",
    traits: ["통통 튀는 에너지", "바쁜 발걸음", "앙증맞은 점프"]
  },
  "magic-girl": {
    name: "중년마법소녀",
    tagline: "오늘도 우아하게 변신 완료!",
    description: "분홍빛 마법봉과 함께 화면 위에 반짝이는 기운을 더하는 친구예요. 씩씩한 걸음과 화려한 점프로 평범한 하루를 특별하게 바꿔줘요.",
    traits: ["반짝이는 마법봉", "씩씩한 변신", "화려한 점프"]
  },
  "neutral-witch": {
    name: "마카오&조마",
    tagline: "둘이 함께라서 더 특별해요.",
    description: "서로 다른 매력을 가진 두 친구가 한마음으로 화면을 산책해요. 나란히 움직이는 든든하고 유쾌한 호흡을 지켜봐 주세요.",
    traits: ["두 배의 매력", "환상의 호흡", "든든한 동행"]
  },
  burger: {
    name: "버거",
    tagline: "빨간 망토를 두른 특별한 친구.",
    description: "다정한 눈빛과 듬직한 걸음으로 화면 곁을 지켜주는 스페셜 캐릭터예요. 빨간 망토와 사랑스러운 분홍 볼터치가 버거만의 멋진 포인트예요.",
    traits: ["스페셜 캐릭터", "분홍 볼터치", "빨간 망토"]
  }
};

const characterGroups = {
  cats: {
    label: "Meet the cats",
    characters: ["cat", "russian-blue"]
  },
  mystery: {
    label: "Meet the secret friends",
    characters: ["magic-girl", "neutral-witch"]
  }
};

const companionCountButtons = [...document.querySelectorAll("[data-companion-count]")];
const companionDemo = document.querySelector("[data-companion-demo]");

const updateCompanionCount = (count) => {
  if (!companionDemo || ![1, 3, 5].includes(count)) return;

  const pets = [...companionDemo.querySelectorAll(".multi-pet")];
  pets.forEach((pet, index) => {
    pet.hidden = index >= count;
  });

  companionCountButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(Number(button.dataset.companionCount) === count));
  });

  const countLabel = count === 1 ? "한 마리" : `${count}마리`;
  const englishLabel = companionDemo.querySelector("[data-companion-label]");
  const status = companionDemo.querySelector("[data-companion-status]");
  if (englishLabel) englishLabel.textContent = `${count} ${count === 1 ? "PAW" : "PAWS"} ON SCREEN`;
  if (status) status.textContent = `${countLabel}가 각자의 자리에서 걷는 중`;
  companionDemo.setAttribute("aria-label", `화면에서 독립적으로 움직이는 카피바라 ${countLabel}`);
};

companionCountButtons.forEach((button) => {
  button.addEventListener("click", () => updateCompanionCount(Number(button.dataset.companionCount)));
});

const characterDialog = document.getElementById("character-dialog");
const dialogImage = document.getElementById("character-dialog-image");
const dialogTitle = document.getElementById("character-dialog-title");
const dialogTagline = document.getElementById("character-dialog-tagline");
const dialogDescription = document.getElementById("character-dialog-description");
const dialogTraits = document.getElementById("character-dialog-traits");
const dialogLabel = document.getElementById("character-dialog-label");
const dialogChoices = document.getElementById("character-dialog-choices");

const showCharacterProfile = (slug, group = null) => {
  const profile = characterProfiles[slug];
  if (!profile || !characterDialog) return;

  dialogImage.src = `./character-intros/${slug}.png`;
  dialogImage.alt = `${profile.name}의 기본, 산책, 점프 모습을 담은 TinyPaws 친구 소개 이미지`;
  dialogTitle.textContent = profile.name;
  dialogTagline.textContent = profile.tagline;
  dialogDescription.textContent = profile.description;
  dialogTraits.replaceChildren(...profile.traits.map((trait) => {
    const span = document.createElement("span");
    span.textContent = trait;
    return span;
  }));

  if (dialogChoices) {
    dialogChoices.querySelectorAll("button").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.characterChoice === slug));
    });
  }
  if (dialogLabel) dialogLabel.textContent = group?.label ?? "Meet your friend";
};

const openCharacterDialog = (slugs, group = null) => {
  if (!characterDialog || !slugs.length) return;
  if (dialogChoices) {
    dialogChoices.hidden = slugs.length === 1;
    dialogChoices.replaceChildren(...slugs.map((slug) => {
      const profile = characterProfiles[slug];
      const choice = document.createElement("button");
      choice.type = "button";
      choice.dataset.characterChoice = slug;
      choice.textContent = profile.name;
      choice.addEventListener("click", () => showCharacterProfile(slug, group));
      return choice;
    }));
  }
  showCharacterProfile(slugs[0], group);
  characterDialog.showModal();
};

document.querySelectorAll("[data-character]").forEach((button) => {
  button.addEventListener("click", () => openCharacterDialog([button.dataset.character]));
});

document.querySelectorAll("[data-character-group]").forEach((button) => {
  button.addEventListener("click", () => {
    const group = characterGroups[button.dataset.characterGroup];
    if (!group) return;
    openCharacterDialog(group.characters, group);
  });
});

document.querySelector("[data-close-character]")?.addEventListener("click", () => characterDialog.close());
characterDialog?.addEventListener("click", (event) => {
  if (event.target === characterDialog) characterDialog.close();
});

const paymentCards = [...document.querySelectorAll("[data-payment-card]")];
paymentCards.forEach((card) => {
  card.addEventListener("toggle", () => {
    if (!card.open) return;
    paymentCards.forEach((otherCard) => {
      if (otherCard !== card) otherCard.open = false;
    });
  });
});

const wearableShowcase = document.querySelector("[data-wearable-showcase]");
if (wearableShowcase) {
  const accessoryNames = { sunglasses: "선글라스" };
  const accessoryState = {
    sunglasses: true
  };
  const status = wearableShowcase.querySelector("[data-wearable-status]");

  const updateWearablePreview = () => {
    Object.entries(accessoryState).forEach(([accessory, isOn]) => {
      const layer = wearableShowcase.querySelector(`[data-accessory-layer="${accessory}"]`);
      const button = wearableShowcase.querySelector(`[data-accessory-toggle="${accessory}"]`);
      if (layer) layer.toggleAttribute("hidden", !isOn);
      if (button) {
        button.setAttribute("aria-pressed", String(isOn));
        const stateLabel = button.querySelector("small");
        if (stateLabel) stateLabel.textContent = isOn ? "착용 중" : "벗음";
      }
    });

    const worn = Object.keys(accessoryState).filter((accessory) => accessoryState[accessory]);
    if (!status) return;
    status.textContent = worn.length
      ? `${worn.map((accessory) => accessoryNames[accessory]).join("와 ")} 착용 중`
      : "기본 모습으로 산책 중";
  };

  wearableShowcase.querySelectorAll("[data-accessory-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const accessory = button.dataset.accessoryToggle;
      accessoryState[accessory] = !accessoryState[accessory];
      updateWearablePreview();
    });
  });

  updateWearablePreview();
}
