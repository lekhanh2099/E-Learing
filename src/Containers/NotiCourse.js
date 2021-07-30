import React, { useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { useDispatch, useSelector } from "react-redux";
import { NotiCourse } from "../Components";
import { DialogContent } from "@material-ui/core";
import * as CONSTANTS from "../Constants/setting";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function NotiCourseContainer() {
  const dispatch = useDispatch();

  // eslint-disable-next-line no-unused-vars
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const { dataNotification } = useSelector((state) => state.coursesReducer);
  const [noti, setNoti] = React.useState(dataNotification);
  useEffect(() => {
    setNoti(dataNotification);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleClose = () => {
    setOpen(noti.status);
    dispatch({
      type: CONSTANTS.HIDDEN_NOTIFY_TYPE,
    });
  };

  const renderIconNoti = (noti) => {
    if (noti.theme === "success") {
      return <span className="material-icons">check_circle</span>;
    } else if (noti.theme === "warning") {
      return (
        <>
          {noti.error ? null : <span className="material-icons">error</span>}
          <NotiCourse.Title color={noti.theme}>{noti?.error}</NotiCourse.Title>
        </>
      );
    } else if (noti.theme === "danger") {
      return (
        <>
          <span className="material-icons">(¬_¬ )!</span>
        </>
      );
    }
  };
  return (
    <NotiCourse.Overlay>
      <Dialog
        open={handleClickOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          <NotiCourse.Title color={noti.theme}>{noti.noti}</NotiCourse.Title>
        </DialogTitle>
        <DialogContent>
          <NotiCourse.Content color={noti.theme}>
            {renderIconNoti(noti)}
          </NotiCourse.Content>
        </DialogContent>
        <DialogActions>
          <NotiCourse.Button onClick={handleClose} color={noti.theme}>
            Okay
          </NotiCourse.Button>
        </DialogActions>
      </Dialog>
    </NotiCourse.Overlay>
  );
}
