import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/FooterStyles";

class Footer extends Component {
  render() {
    const { emoji, paletteName, classes } = this.props;
    return (
      <footer className={classes.paletteFooter}>
        {paletteName}
        <span className={classes.emoji}>{emoji}</span>
      </footer>
    );
  }
}

export default withStyles(styles)(Footer);
