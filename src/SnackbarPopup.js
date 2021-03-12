import React, { Component } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

class SnackbarPopup extends Component {
  render() {
    const { open, format, closeSnackbar } = this.props;
    return (
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={open}
        autoHideDuration={3000}
        message={<span id="message-id">Changed to {format.toUpperCase()}</span>}
        ContentProps={{
          "aria-describedby": "message-id",
        }}
        onClose={closeSnackbar}
        action={[
          <IconButton
            aria-label="close"
            color="inherit"
            onClick={closeSnackbar}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    );
  }
}

export default SnackbarPopup;
