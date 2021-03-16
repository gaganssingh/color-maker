import { useState } from "react";
import clsx from "clsx";
import { withStyles } from "@material-ui/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";

import { ChromePicker } from "react-color";

import styles from "./styles/NewPaletteFormStyles";
import DragableColorBox from "./DragableColorBox";

const NewPaletteForm = () => {
  const classes = styles();
  const [open, setOpen] = useState(true);
  const [currentColor, setCurrentColor] = useState("yellow");
  const [colors, setColors] = useState(["purple", "#356233"]);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);
  const updateCurrentColor = (color) => setCurrentColor(color.hex);
  const addColor = () => setColors([...colors, currentColor]);
  // const addColor = () => console.log([])

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Create A Palette
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <Typography variant="h4">Design</Typography>
        <div>
          <Button variant="outlined" color="secondary">
            Clear
          </Button>
          <Button variant="outlined" color="primary">
            Random Color
          </Button>
        </div>
        <ChromePicker
          color={currentColor}
          onChangeComplete={updateCurrentColor}
        />
        <Button
          variant="contained"
          color="primary"
          style={{ backgroundColor: currentColor }}
          onClick={addColor}
        >
          Add Color
        </Button>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />

        {colors.map((color) => (
          <DragableColorBox color={color} />
        ))}
      </main>
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(NewPaletteForm);
