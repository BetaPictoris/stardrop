const cdnBaseURL = "https://cdn.ozx.me";

const categories = {
  Games: {
    JourneyOfThePrairieKing: ["FinalBossAndEnding", "Overworld", "TheOutlaw"],
  },

  NPCThemes: {
    Normal: [
      "Abigail",
      "Alex",
      "AlexKeepsake",
      "DrHarvey",
      "Elliott",
      "Grandpa",
      "Haley",
      "Leah",
      "Maru",
      "Penny",
      "Sebastian",
      "Wizard",
    ],
    SamsBand: ["Bluegrass", "Electronic", "Heavy", "Pop", "Practice"],
  },

  Other: {
    Events: [
      "Fair",
      "FestivalGame",
      "FlowerDance",
      "FunFestival",
      "GoldenStar",
      "LuauFestival",
      "MoonlightJellies",
      "SpiritsEve",
      "Wedding",
      "WinterFestival",
    ],

    Normal: [
      "ButtercupMelody",
      "CloudCountry",
      "DistantBanjo",
      "Jaunty",
      "Load",
      "MusicBox",
      "Overture",
      "Playful",
      "SettlingIn",
      "Violin",
    ],
  },

  Places: {
    Mines: [
      "AFlickerInTheDeep",
      "Cloth",
      "CrystalBells",
      "Danger",
      "Icicles",
      "MagicalShoes",
      "MarimbaOfFrozenBones",
      "StarLumpy",
      "TheLavaDwellers",
      "VisitorToTheUnknown",
    ],

    Normal: [
      "ADarkCornerOfThePast",
      "CalicoDesert",
      "CountryShop",
      "InTheDeepWoods",
      "PelicanTown",
      "TheAdventureGuild",
      "TheLibraryAndMuseum",
      "TheStardropSaloon",
    ],
  },

  Seasons: {
    Fall: ["GhostSynth", "RavensDescent", "TheSmellOfMushroom"],
    Spring: [
      "ItsABigWorldOutside",
      "TheValleyComesAlive",
      "WildHorseradishJam",
    ],
  },
};

export function getRandomSong() {
  const category =
    Object.keys(categories)[
      Math.floor(Math.random() * Object.keys(categories).length)
    ];
  const subCat = Object.keys(categories[category])[
    Math.floor(Math.random() * Object.keys(categories[category]).length)
  ];
  const file =
    categories[category][subCat][
      Math.floor(Math.random() * categories[category][subCat].length)
    ];
  return `${cdnBaseURL}/sdv/music/${category}/${subCat}/${file}.mp3`;
}

export async function getTitle(url) {
  return fetch(url)
    .then((response) => response.text())
    .then((data) => {
      let title = data.slice(0, 202);
      title = title
        .match(new RegExp("��(.*)TPE1"))
        .toString()
        .match(new RegExp("TPE1(.*)"))
        .toString();
      title = title.split(",")[1].replaceAll("\u0000", "");
      return title;
    });
}
