import Palette from "./Palette";
import seedColorPalettes from "./seedColorPalettes";
import { generatePalette } from "./colorHelpers";

function App() {
  console.log(generatePalette(seedColorPalettes[4]));
  return (
    <div>
      <Palette palette={generatePalette(seedColorPalettes[4])} />
    </div>
  );
}

export default App;
