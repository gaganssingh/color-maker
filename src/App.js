import { Switch, Route } from "react-router-dom";

import Palette from "./Palette";
import seedColorPalettes from "./seedColorPalettes";
import { generatePalette } from "./colorHelpers";
import PaletteList from "./PaletteList";

function App() {
  const findPalette = (id) =>
    seedColorPalettes.find((palette) => palette.id === id);

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => <PaletteList palettes={seedColorPalettes} />}
      />
      <Route
        exact
        path="/palette/:id"
        render={(routeProps) => (
          <Palette
            palette={generatePalette(findPalette(routeProps.match.params.id))}
          />
        )}
      />
    </Switch>
  );
}

export default App;
