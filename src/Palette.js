import React, { Component } from "react";
import ColorBox from "./ColorBox";
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
    const { colors } = this.props.palette;
    const { level, format, open } = this.state;
    const colorBoxes = colors[level].map((color) => (
      <ColorBox background={color[format]} name={color.name} />
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
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
        />
        <div className="Palette-colors">{colorBoxes}</div>
        {/* Put footer here */}
      </div>
    );
  }
}

export default Palette;
