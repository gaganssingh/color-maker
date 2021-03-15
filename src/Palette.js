import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Footer from "./Footer";
import Navbar from "./Navbar";

import "./Palette.css";
import SnackbarPopup from "./SnackbarPopup";

class Palette extends Component {
  state = {
    level: 500,
    format: "hex",
    open: false,
  };

  changeLevel = (newLevel) => this.setState({ level: newLevel });
  changeFormat = (val) => this.setState({ format: val, open: true });
  closeSnackbar = () => this.setState({ open: false });

  render() {
    const { colors, paletteName, emoji, id } = this.props.palette;
    const { level, format, open } = this.state;
    const colorBoxes = colors[level].map((color) => (
      <ColorBox
        key={color.id}
        background={color[format]}
        name={color.name}
        colorId={color.id}
        paletteId={id}
        showLink
      />
    ));

    return (
      <div className="Palette">
        <SnackbarPopup
          open={open}
          format={format}
          closeSnackbar={this.closeSnackbar}
        />
        <Navbar
          level={level}
          showLevelSlider={true}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
        />
        <div className="Palette-colors">{colorBoxes}</div>
        <Footer paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default Palette;
