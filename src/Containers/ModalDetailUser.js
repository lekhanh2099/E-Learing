import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { ModalDetail } from "../Components";
import { memo } from "react";
import { Container } from "@material-ui/core";
import DetailUserManagerContainer from "./DetailUserManager";

const styles = (theme) => ({
  root: {
    margin: 0,
    "&.MuiDialogTitle-root": {
      padding: 0,
    },
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  modalDetail: {},
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle className={classes.root} {...other}>
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

function ModalDetailUserContainer({ openPopup, setOpenPopup }) {
  return (
    <Container fixed>
      <Dialog
        onClose={() => {
          setOpenPopup(false);
        }}
        aria-labelledby="customized-dialog-title"
        open={openPopup}
        maxWidth="lg"
      >
        <ModalDetail.Subtitle className="ModalDetail-Header">
          Thông tin chi tiết:
        </ModalDetail.Subtitle>
        <DialogTitle
          id="customized-dialog-title"
          onClose={() => {
            setOpenPopup(false);
          }}
        ></DialogTitle>
        <DetailUserManagerContainer setOpenPopup={setOpenPopup} />
      </Dialog>
    </Container>
  );
}

export default memo(ModalDetailUserContainer);
