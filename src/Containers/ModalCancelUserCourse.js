import React, { memo } from "react";
import PropTypes from "prop-types";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import { NotiCourse } from "../Components";
import { useDispatch, useSelector } from "react-redux";
import { cancelUserRegistedAction } from "../Redux/actionManagerCourse/cancelUserRegistedAction";
import { getInfoCourseAction } from "../Redux/actionManagerCourse/getInfoCourseAction";

function ConfirmationDialogRaw(props) {
  const { onClose, value: valueProp, open, ...other } = props;
  const [value, setValue] = React.useState(valueProp);
  const radioGroupRef = React.useRef(null);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (!open) {
      setValue(valueProp);
    }
  }, [valueProp, open]);

  const handleEntering = () => {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus();
    }
  };

  const handleCancel = () => {
    onClose();
  };
  const { userClick, courseClick } = useSelector(
    (state) => state.UserManagerReducer
  );
  const handleOk = () => {
    const data = {
      maKhoaHoc: courseClick.maKhoaHoc,
      taiKhoan: userClick.taiKhoan,
    };
    const action = cancelUserRegistedAction(data);
    dispatch(action);

    const _action = getInfoCourseAction(data);
    dispatch(_action);
    onClose(value);
  };
  return (
    <>
      <NotiCourse.Overlay>
        <Dialog
          disableBackdropClick
          disableEscapeKeyDown
          maxWidth="xs"
          onEntering={handleEntering}
          aria-labelledby="confirmation-dialog-title"
          open={open}
          {...other}
        >
          <DialogTitle id="confirmation-dialog-title">
            <NotiCourse.Title color="warning">
              Xác nhận không duyệt tài khoản này?
            </NotiCourse.Title>
          </DialogTitle>
          <DialogActions>
            <NotiCourse.Button autoFocus onClick={handleCancel}>
              Huỷ
            </NotiCourse.Button>
            <NotiCourse.Button onClick={handleOk} color="danger">
              Xác nhận
            </NotiCourse.Button>
          </DialogActions>
        </Dialog>
      </NotiCourse.Overlay>
    </>
  );
}

ConfirmationDialogRaw.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

function ModalCancelUserCourseContainer({
  open,
  setOpen,
  value,
  setValue,
  setOpenPopup,
}) {
  return (
    <ConfirmationDialogRaw
      id="id"
      keepMounted
      open={open}
      onClose={(newValue) => {
        setOpen(false);
        setOpenPopup(false);
        if (newValue) {
          setValue(newValue);
        }
      }}
      value={value}
    />
  );
}

export default memo(ModalCancelUserCourseContainer);
