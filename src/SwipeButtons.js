import React from "react";
import "./SwipeButtons.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarIcon from "@material-ui/icons/Star";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import { IconButton } from "@material-ui/core";

function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton>
        <ReplayIcon fontSize="large" className="swipeButtons__repeat" />
      </IconButton>

      <IconButton>
        <CloseIcon fontSize="large" className="swipeButtons__left" />
      </IconButton>

      <IconButton>
        <StarIcon fontSize="large" className="swipeButtons__star" />
      </IconButton>

      <IconButton>
        <FavoriteIcon fontSize="large" className="swipeButtons__right" />
      </IconButton>

      <IconButton>
        <FlashOnIcon fontSize="large" className="swipeButtons__lightning" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
