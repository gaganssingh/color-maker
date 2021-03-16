import { withStyles } from "@material-ui/styles";
import styles from "./styles/MiniPaletteStyles";

const MiniPalette = (props) => {
  const { classes, colors, emoji, paletteName, handleClick } = props;
  const colorBoxes = colors.map((color) => (
    <div
      key={color.name}
      className={classes.colorBoxes}
      style={{ backgroundColor: color.color }}
    ></div>
  ));

  return (
    <div className={classes.root} onClick={handleClick}>
      <div className={classes.colors}>{colorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
};

export default withStyles(styles)(MiniPalette);
