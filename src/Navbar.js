import React, { Component } from "react";
import Slider from "rc-slider";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";

import "rc-slider/assets/index.css";
import styles from "./styles/NavbarStyles";

class Navbar extends Component {
  state = {
    format: "hex",
  };

  handleFormatChange = (e) => {
    this.setState({ format: e.target.value });
    this.props.handleChange(e.target.value);
  };

  render() {
    const { level, changeLevel, showLevelSlider, classes } = this.props;
    const { format } = this.state;

    return (
      <header className={classes.navbar}>
        <div className={classes.logo}>
          <Link to="/">color maker</Link>
        </div>
        {showLevelSlider && (
          <div>
            <span>Level: {level}</span>
            <div className={classes.slider}>
              <Slider
                defaultValue={level}
                min={100}
                max={900}
                step={100}
                onAfterChange={changeLevel}
              />
            </div>
          </div>
        )}
        <div className={classes.selectContainer}>
          <Select value={format} onChange={this.handleFormatChange}>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1)</MenuItem>
          </Select>
        </div>
      </header>
    );
  }
}

export default withStyles(styles)(Navbar);
