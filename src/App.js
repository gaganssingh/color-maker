import Palette from "./Palette";
import seedColorPalettes from "./seedColorPalettes";

function App() {
  return (
    <div>
      <Palette {...seedColorPalettes[3]} />
    </div>
  );
}

export default App;
