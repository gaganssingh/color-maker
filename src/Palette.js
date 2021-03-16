import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { withStyles } from "@material-ui/styles";
import SnackbarPopup from "./SnackbarPopup";

import styles from "./styles/PaletteStyles";

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
    const { classes } = this.props;
    const { level, format, open } = this.state;
    const colorBoxes = colors[level].map((color) => (
      <ColorBox
        key={color.id}
        background={color[format]}
        name={color.name}
        colorId={color.id}
        paletteId={id}
        showingFullPalette
      />
    ));

    return (
      <div className={classes.palette}>
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
        <div className={classes.colors}>{colorBoxes}</div>
        <Footer paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(Palette);
