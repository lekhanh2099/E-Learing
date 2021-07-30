import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { useDispatch } from "react-redux";
import { Warning } from "../Components";
import { DialogContent } from "@material-ui/core";

import * as CONSTANTS from "../Constants/setting";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function NotificationLogInContainer() {
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    dispatch({
      type: CONSTANTS.HIDDEN_WARNING,
    });
  };

  return (
    <Warning.Overlay>
      <Dialog
        open={handleClickOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          <Warning.Title>Đăng nhập thành công</Warning.Title>
        </DialogTitle>
        <DialogContent>
          <Warning.Content>
            <span className="material-icons">check_circle_outline</span>
          </Warning.Content>
        </DialogContent>
        <DialogActions>
          <Warning.Button onClick={handleClose} color="primary">
            Okay
          </Warning.Button>
        </DialogActions>
      </Dialog>
    </Warning.Overlay>
  );
}
