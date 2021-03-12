import Palette from "./Palette";
import seedColorPalettes from "./seedColorPalettes";
import { generatePalette } from "./colorHelpers";

function App() {
  console.log(generatePalette(seedColorPalettes[4]));
  return (
    <div>
      <Palette {...seedColorPalettes[3]} />
    </div>
  );
}

export default App;
