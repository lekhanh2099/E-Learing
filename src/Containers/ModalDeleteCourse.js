import React, { memo } from "react";
import PropTypes from "prop-types";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import { NotiCourse } from "../Components";
import { useDispatch, useSelector } from "react-redux";
import { handleDeleteCourseAction } from "../Redux/actionManagerCourse/handleDeleteCourseAction";

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
  const { courseClick, groupId } = useSelector(
    (state) => state.UserManagerReducer
  );
  const handleOk = () => {
    onClose(value);
    const action = handleDeleteCourseAction(courseClick.maKhoaHoc, groupId);
    dispatch(action);
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
          <DialogTitle>
            <NotiCourse.Title color="warning">
              Bạn có chắc muốn xoá khoá học này khỏi hệ thống không?
            </NotiCourse.Title>
          </DialogTitle>
          <DialogActions>
            <NotiCourse.Button autoFocus onClick={handleCancel}>
              Huỷ
            </NotiCourse.Button>
            <NotiCourse.Button onClick={handleOk} color="danger">
              Xoá
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

function ModalDeleteCourseContainer({ open, setOpen, value, setValue }) {
  return (
    <ConfirmationDialogRaw
      keepMounted
      open={open}
      onClose={(newValue) => {
        setOpen(false);
        if (newValue) {
          setValue(newValue);
        }
      }}
      value={value}
    />
  );
}

export default memo(ModalDeleteCourseContainer);
