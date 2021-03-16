import { Switch, Route } from "react-router-dom";

import Palette from "./Palette";
import seedColorPalettes from "./seedColorPalettes";
import { generatePalette } from "./colorHelpers";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";

function App() {
  const findPalette = (id) =>
    seedColorPalettes.find((palette) => palette.id === id);

  return (
    <Switch>
      <Route exact path="/palette/new" render={() => <NewPaletteForm />} />
      <Route
        exact
        path="/"
        render={(routeProps) => (
          <PaletteList palettes={seedColorPalettes} {...routeProps} />
        )}
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
      <Route
        path="/palette/:paletteId/:colorId"
        render={(routeProps) => (
          <SingleColorPalette
            colorId={routeProps.match.params.colorId}
            palette={generatePalette(
              findPalette(routeProps.match.params.paletteId)
            )}
          />
        )}
      />
    </Switch>
  );
}

export default App;
