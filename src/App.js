import Palette from "./Palette";
import seedColorPalettes from "./seedColorPalettes";

function App() {
  return (
    <div>
      <Palette {...seedColorPalettes[4]} />
    </div>
  );
}

export default App;
