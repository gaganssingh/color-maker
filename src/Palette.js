import React, { Component } from "react";
import ColorBox from "./ColorBox";
import { generatePalette } from "./colorHelpers";

import "./Palette.css";

class Palette extends Component {
  render() {
    const colorBoxes = this.props.colors.map((color) => (
      <ColorBox background={color.color} name={color.name} />
    ));
    return (
      <div className="Palette">
        {/* Put navbar here */}
        <div className="Palette-colors">{colorBoxes}</div>
        {/* Put footer here */}
      </div>
    );
  }
}

export default Palette;
