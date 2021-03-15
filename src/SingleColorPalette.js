import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import ColorBox from "./ColorBox";
import Footer from "./Footer";

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.state = {
      format: "hex",
    };
  }

  gatherShades = (palette, colorToFilterBy) => {
    let shades = [];
    let allColors = palette.colors;
    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter((color) => color.id === colorToFilterBy)
      );
    }
    return shades.slice(1);
  };

  changeFormat = (val) => this.setState({ format: val });

  render() {
    const { format } = this.state;
    const { emoji, paletteName, id } = this.props.palette;
    const colorBoxes = this._shades.map((color) => (
      <ColorBox
        key={color.name}
        name={color.name}
        background={color[format]}
        showLink={false}
      />
    ));

    return (
      <div className="SingleColorPalette Palette">
        <Navbar handleChange={this.changeFormat} showLevelSlider={false} />
        <div className="Palette-colors">
          {colorBoxes}
          <div className="ColorBox go-back-container">
            <Link to={`/palette/${id}`} className="go-back-button">
              GO BACK
            </Link>
          </div>
        </div>
        <Footer emoji={emoji} paletteName={paletteName} />
      </div>
    );
  }
}

export default SingleColorPalette;
