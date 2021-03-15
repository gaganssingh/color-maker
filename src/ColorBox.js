import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";

import "./ColorBox.css";

class ColorBox extends Component {
  state = {
    copied: false,
  };

  changeCopyState = () =>
    this.setState({ copied: true }, () =>
      setTimeout(() => this.setState({ copied: false }), 1500)
    );

  // changeCopyState = () => this.setState({ copied: true });

  render() {
    const { name, background, colorId, paletteId } = this.props;

    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background }} className="ColorBox">
          {/* Fill screen with "Copied" text upon click-to-copy */}
          <div
            className={`copy-overlay ${this.state.copied && "show"}`}
            style={{ background }}
          ></div>
          <div className={`copy-msg ${this.state.copied && "show"}`}>
            <h1>copied</h1>
            <p>{this.props.background}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span>{name}</span>
            </div>
            <button className="copy-button">Copy</button>
          </div>
          <Link
            to={`/palette/${paletteId}/${colorId}`}
            onClick={(e) => e.stopPropagation()}
          >
            <span className="see-more">More</span>
          </Link>
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
