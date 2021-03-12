import chroma from "chroma-js";

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

const generatePalette = (starterPalette) => {
  let newPalette = {
    id: starterPalette.id,
    paletteName: starterPalette.paletteName,
    emoji: starterPalette.emoji,
    colors: {},
  };

  // Fill the newPalette.colors property with empty array for each btightness level
  for (let level of levels) {
    //  .colors: {
    //   50: [],
    //   100: [],
    //   ...
    // }
    newPalette.colors[level] = [];
  }

  for (let color of starterPalette.colors) {
    let scale = generateScale(color.color, 10).reverse();
    for (let i in scale) {
      newPalette.colors[levels[i]].push({
        id: color.name.toLowerCase().replace(/ /g, "-"),
        name: `${color.name} ${levels[i]}`,
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i])
          .css()
          .replace("rgb", "rgba")
          .replace(")", ",1.0)"),
      });
    }
  }

  return newPalette;
};

const getRange = (hex) => {
  const end = "#fff";
  return [chroma(hex).darken(1.4).hex(), hex, end];
};

const generateScale = (hexColor, numOfColors) =>
  chroma.scale(getRange(hexColor)).mode("lab").colors(numOfColors);

export { generatePalette };
