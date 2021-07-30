import React, { memo } from "react";
import PropTypes from "prop-types";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import { NotiCourse } from "../Components";
import { useDispatch, useSelector } from "react-redux";
import { getInfoCourseAction } from "../Redux/actionManagerCourse/getInfoCourseAction";
import { confirmCourseWaitingAction } from "../Redux/actions/confirmCourseWaitingAction";

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
    const action = confirmCourseWaitingAction(data);
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
              Xét duyệt khoá học này
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

function ModalConfirmUserCourseContainer({
  openConfirm,
  setOpenConfirm,
  valueConfirm,
  setValueConfirm,
  setOpenPopupConfirm,
}) {
  return (
    <ConfirmationDialogRaw
      id="id"
      keepMounted
      open={openConfirm}
      onClose={(newValue) => {
        setOpenConfirm(false);
        setOpenPopupConfirm(false);
        if (newValue) {
          setValueConfirm(newValue);
        }
      }}
      value={valueConfirm}
    />
  );
}

export default memo(ModalConfirmUserCourseContainer);
