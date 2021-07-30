import React, { useLayoutEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import { useDispatch, useSelector } from "react-redux";
import { ModalDetail, Manager } from "../Components";
import { GET_USER_CLICK } from "../Redux/constants/UserManager/UserManagerConstants";
import ModalCancelUserCourseContainer from "./ModalCancelUserCourse";
import ModalConfirmUserCourseContainer from "./ModalConfirmUserCourse";
import { registerCourseAction } from "../Redux/actions/registerCourseAction";
import { getInfoCourseAction } from "../Redux/actionManagerCourse/getInfoCourseAction";

export default function DetailCourseManagerContainer() {
  const dispatch = useDispatch();

  const { courseClick } = useSelector((state) => state.UserManagerReducer);
  const { courseUnRegistration, courseWaitingList, listStudent } = useSelector(
    (state) => state.CoursesManagerReducer
  );

  const [_listStudent, _setListStudent] = useState(listStudent);
  const [_listWaiting, _setListWaiting] = useState(courseWaitingList);
  const [_courseUnRegistration, _setCourseUnRegistration] =
    useState(courseUnRegistration);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useLayoutEffect(() => {
    _setListStudent(listStudent);
    _setCourseUnRegistration(courseUnRegistration);
    _setListWaiting(courseWaitingList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseUnRegistration, courseWaitingList, listStudent]);

  const columnWaiting = [
    {
      field: "id",
      headerName: "STT",
      width: 90,
    },
    {
      field: "taiKhoan",
      headerName: "Tài khoản",
      width: 350,
    },
    {
      field: "hoTen",
      headerName: "Họ và tên",
      width: 350,
    },
    {
      field: "biDanh",
      headerName: "Bí danh",
      width: 350,
    },
    {
      field: " ",
      headerName: " ",
      width: 400,
      renderCell: (params) => {
        return (
          <Manager.ButtonGroup>
            <Button
              color="secondary"
              className="detail"
              variant="contained"
              onClick={() => {
                handleConfirm(params.row);
              }}
              aria-haspopup="true"
              aria-controls="id"
            >
              Xác nhận ghi danh
            </Button>
            <Button
              color="secondary"
              className="delete"
              variant="contained"
              onClick={() => {
                handleCancel(params.row);
              }}
              aria-haspopup="true"
              aria-controls="id"
            >
              Không duyệt!
            </Button>
          </Manager.ButtonGroup>
        );
      },
    },
  ];

  const columnRegisted = [
    {
      field: "id",
      headerName: "STT",
      width: 90,
    },
    {
      field: "taiKhoan",
      headerName: "Tài khoản",
      width: 400,
    },
    {
      field: "hoTen",
      headerName: "Họ và tên",
      width: 500,
    },
    {
      field: "biDanh",
      headerName: "Bí danh",
      width: 300,
    },
    {
      field: "",
      headerName: "",
      width: 250,
      renderCell: (params) => {
        return (
          <Manager.ButtonGroup>
            <Button
              color="secondary"
              className="delete"
              variant="contained"
              onClick={() => {
                handleCancel(params.row);
              }}
              aria-haspopup="true"
              aria-controls="id"
            >
              Huỷ ghi danh
            </Button>
          </Manager.ButtonGroup>
        );
      },
    },
  ];

  const columnUnRegisted = [
    {
      field: "id",
      headerName: "STT",
      width: 90,
    },
    {
      field: "taiKhoan",
      headerName: "Tài khoản",
      width: 400,
    },
    {
      field: "hoTen",
      headerName: "Họ và tên",
      width: 500,
    },
    {
      field: "biDanh",
      headerName: "Bí danh",
      width: 300,
    },
    {
      field: "",
      headerName: "",
      width: 200,
      renderCell: (params) => {
        return (
          <Manager.ButtonGroup>
            <Button
              color="primary"
              variant="contained"
              onClick={() => {
                const data = {
                  maKhoaHoc: courseClick.maKhoaHoc,
                  taiKhoan: params.row.taiKhoan,
                };
                const action = registerCourseAction(data);
                dispatch(action);
                const _action = getInfoCourseAction(data);
                dispatch(_action);
              }}
            >
              Ghi danh
            </Button>
          </Manager.ButtonGroup>
        );
      },
    },
  ];

  const renderUnRegisted = () => {
    if (_courseUnRegistration.length < 1) {
      return (
        <ModalDetail.Content className="detail-course-manager">
          <ModalDetail.Subtitle>
            Danh sách học viên chưa đăng ký:
          </ModalDetail.Subtitle>
          <ModalDetail.Title>Tất cả học viên đã đăng ký!</ModalDetail.Title>
        </ModalDetail.Content>
      );
    } else {
      return (
        <ModalDetail.Content className="detail-course-manager list-student">
          <ModalDetail.Subtitle>
            Danh sách học viên chưa đăng ký:
          </ModalDetail.Subtitle>
          <DataGrid
            disableSelectionOnClick
            rows={_courseUnRegistration}
            columns={columnUnRegisted}
            pageSize={7}
          />
        </ModalDetail.Content>
      );
    }
  };

  const renderRegistered = () => {
    if (_listStudent.length < 1) {
      return (
        <ModalDetail.Content className="detail-course-manager">
          <ModalDetail.Subtitle>
            Danh sách học viên đã đăng kí:
          </ModalDetail.Subtitle>
          <ModalDetail.Title>
            Khoá học này chưa có học viên đăng kí!
          </ModalDetail.Title>
        </ModalDetail.Content>
      );
    } else {
      return (
        <ModalDetail.Content className="detail-course-manager">
          <ModalDetail.Subtitle>
            Danh sách học viên đã đăng kí:
          </ModalDetail.Subtitle>
          <DataGrid
            disableSelectionOnClick
            rows={_listStudent}
            columns={columnRegisted}
            pageSize={7}
          />
        </ModalDetail.Content>
      );
    }
  };

  const renderWaiting = () => {
    if (_listWaiting.length < 1) {
      return (
        <ModalDetail.Content className="detail-course-manager">
          <ModalDetail.Subtitle>
            Danh sách học viên đang chờ xét duyệt:
          </ModalDetail.Subtitle>
          <ModalDetail.Title>Không có học viên chờ xét duyệt</ModalDetail.Title>
        </ModalDetail.Content>
      );
    } else {
      return (
        <ModalDetail.Content className="detail-course-manager ">
          <ModalDetail.Subtitle>
            Danh sách học viên đang chờ xét duyệt:
          </ModalDetail.Subtitle>
          <DataGrid
            className="list-student"
            disableSelectionOnClick
            rows={_listWaiting}
            columns={columnWaiting}
            pageSize={7}
          />
        </ModalDetail.Content>
      );
    }
  };

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);
  const [openPopup, setOpenPopup] = useState(false);
  const handleCancel = (user) => {
    setOpen(true);
    dispatch({
      type: GET_USER_CLICK,
      user: user,
    });
  };

  const [openConfirm, setOpenConfirm] = React.useState(false);
  const [valueConfirm, setValueConfirm] = React.useState(null);
  const [openPopupConfirm, setOpenPopupConfirm] = useState(false);
  const handleConfirm = (user) => {
    setOpenConfirm(true);
    dispatch({
      type: GET_USER_CLICK,
      user: user,
    });
  };
  return (
    <ModalDetail.Overlay>
      <ModalDetail.Title className="detail-course-manager">
        Bạn đang xem chi tiết khoá học: <span>{courseClick.tenKhoaHoc}</span>
      </ModalDetail.Title>
      {renderWaiting()}
      {renderRegistered()}
      {renderUnRegisted()}
      <ModalCancelUserCourseContainer
        open={open}
        openPopup={openPopup}
        setOpen={setOpen}
        value={value}
        setValue={setValue}
        setOpenPopup={setOpenPopup}
      />
      <ModalConfirmUserCourseContainer
        openPopupConfirm={openPopupConfirm}
        openConfirm={openConfirm}
        setOpenConfirm={setOpenConfirm}
        valueConfirm={valueConfirm}
        setValueConfirm={setValueConfirm}
        setOpenPopupConfirm={setOpenPopupConfirm}
      />
    </ModalDetail.Overlay>
  );
}
