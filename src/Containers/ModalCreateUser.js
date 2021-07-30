import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import CreateUserContainer from "./CreateUser";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    fontSize: "2rem",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

export default function ModalCreateUserContainer({
  openPopupCreateUser,
  setOpenPopupCreateUser,
}) {
  return (
    <>
      <Dialog
        onClose={() => {
          setOpenPopupCreateUser(false);
        }}
        aria-labelledby="customized-dialog-title"
        open={openPopupCreateUser}
        maxWidth="lg"
      >
        <DialogTitle
          onClose={() => {
            setOpenPopupCreateUser(false);
          }}
        ></DialogTitle>
        <CreateUserContainer setOpenPopupCreateUser={setOpenPopupCreateUser} />
      </Dialog>
    </>
  );
}
