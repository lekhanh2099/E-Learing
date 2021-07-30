import React, { useLayoutEffect, useState } from "react";
import { Button, FormControl, InputLabel, Select } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import { useDispatch, useSelector } from "react-redux";
import { ModalDetail, Manager, Form } from "../Components";
import { confirmCourseWaitingAction } from "../Redux/actions/confirmCourseWaitingAction";
import { registerCourseAction } from "../Redux/actions/registerCourseAction";
import {
  GET_COURSE_CLICK,
  GET_GROUP_ID,
} from "../Redux/constants/UserManager/UserManagerConstants";
import ModalCancelCourseUser from "./ModalCancelCourseUser";
import SearchUserContainer from "./SearchUser";
import { GROUP_ID } from "../groupIdManager";
import { getListUsersAction } from "../Redux/actions/getListUsersAction";

export default function DetailUserManagerContainer({ setOpenPopup }) {
  const dispatch = useDispatch();

  const {
    listUser,
    listCoursesRegistered,
    listCoursesWaitingComfirm,
    userClick,
    courseClick,
  } = useSelector((state) => state.UserManagerReducer);

  const [listRegistered, setListRegistered] = useState(listCoursesRegistered);
  const [listWaitings, setListWaitings] = useState(listCoursesWaitingComfirm);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useLayoutEffect(() => {
    setListWaitings(listCoursesWaitingComfirm);
    setListRegistered(listCoursesRegistered);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listCoursesRegistered, listCoursesWaitingComfirm, listUser]);

  const columns = [
    {
      field: "id",
      headerName: "STT",
      width: 90,
    },
    {
      field: "tenKhoaHoc",
      headerName: "Tên khóa học",
      width: 500,
    },
    {
      field: "choXacNhan",
      headerName: "Chờ xác nhận",
      width: 250,
      renderCell: (params) => {
        return (
          <Manager.ButtonGroup>
            <Button
              color="primary"
              variant="contained"
              onClick={() => {
                const data = {
                  maKhoaHoc: params.row.maKhoaHoc,
                  taiKhoan: userClick.taiKhoan,
                };
                const action = confirmCourseWaitingAction(data);
                dispatch(action);
                setOpenPopup(false);
              }}
            >
              Xác thực
            </Button>
            <Button
              color="secondary"
              variant="outlined"
              onClick={() => {
                handleClickListItem(params.row);
              }}
              aria-haspopup="true"
              aria-controls="id"
            >
              Hủy
            </Button>
          </Manager.ButtonGroup>
        );
      },
    },
  ];

  const columnRegister = [
    {
      field: "id",
      headerName: "STT",
      width: 90,
    },
    {
      field: "tenKhoaHoc",
      headerName: "Tên khóa học",
      width: 500,
    },
    {
      field: "",
      headerName: "Huỷ ghi danh",
      width: 200,
      renderCell: (params) => {
        return (
          <Manager.ButtonGroup>
            <Button
              color="secondary"
              variant="outlined"
              onClick={() => {
                handleClickListItem(params.row);
              }}
              aria-haspopup="true"
              aria-controls="id"
            >
              Huỷ
            </Button>
          </Manager.ButtonGroup>
        );
      },
    },
  ];

  const renderWaiting = () => {
    if (listWaitings.length < 1) {
      return (
        <ModalDetail.Content>
          {" "}
          <ModalDetail.Subtitle>
            Danh sách khoá học đang chờ xác nhận:
          </ModalDetail.Subtitle>
          <ModalDetail.Title>
            Chưa có khoá học nào đang chờ duyệt!
          </ModalDetail.Title>
        </ModalDetail.Content>
      );
    } else {
      return (
        <ModalDetail.Content>
          <ModalDetail.Subtitle>
            Danh sách khoá học đang chờ xác nhận:
          </ModalDetail.Subtitle>
          <DataGrid
            disableSelectionOnClick
            rows={listWaitings}
            columns={columns}
            pageSize={4}
          />
        </ModalDetail.Content>
      );
    }
  };

  const renderRegistered = () => {
    if (listRegistered.length < 1) {
      return (
        <ModalDetail.Content>
          <ModalDetail.Subtitle>
            Danh sách khoá học đã đăng kí:
          </ModalDetail.Subtitle>
          <ModalDetail.Title>Chưa có khoá học được đăng kí!</ModalDetail.Title>
        </ModalDetail.Content>
      );
    } else {
      return (
        <ModalDetail.Content>
          <ModalDetail.Subtitle>
            Danh sách khoá học đã đăng kí:
          </ModalDetail.Subtitle>
          <DataGrid
            disableSelectionOnClick
            rows={listRegistered}
            columns={columnRegister}
            pageSize={4}
          />
        </ModalDetail.Content>
      );
    }
  };

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);

  const handleClickListItem = (course) => {
    setOpen(true);
    dispatch({
      type: GET_COURSE_CLICK,
      course: course,
    });
  };
  const [groupCourse, setGroupCourse] = useState("GP01");
  const handleChangeIdCourse = (event) => {
    setGroupCourse(event.target.value);
  };
  const getListUser = () => {
    const _action = getListUsersAction(groupCourse);
    dispatch(_action);
  };
  React.useEffect(() => {
    getListUser();
    dispatch({
      type: GET_GROUP_ID,
      groupId: groupCourse,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupCourse]);
  return (
    <ModalDetail.Overlay>
      <ModalDetail.Header>
        <Form.FormBox className="choose">
          <Form.Input style={{ width: "200px" }}>
            <FormControl variant="filled" className="selected-input">
              <InputLabel>Mặc định sẽ là GP01</InputLabel>
              <Select onChange={handleChangeIdCourse}>
                {GROUP_ID?.map((id, index) => {
                  return (
                    <Form.ItemValueSelected key={index} value={id}>
                      {id}
                    </Form.ItemValueSelected>
                  );
                })}
              </Select>
            </FormControl>
          </Form.Input>
        </Form.FormBox>
        <SearchUserContainer />
        <Button
          className="register"
          color="primary"
          variant="outlined"
          onClick={() => {
            const data = {
              maKhoaHoc: courseClick.maKhoaHoc,
              taiKhoan: userClick.taiKhoan,
            };
            const action = registerCourseAction(data);
            dispatch(action);
            setOpenPopup(false);
          }}
        >
          Ghi danh
        </Button>
      </ModalDetail.Header>
      {renderRegistered()}
      {renderWaiting()}
      <ModalCancelCourseUser
        open={open}
        setOpen={setOpen}
        value={value}
        setValue={setValue}
        setOpenPopup={setOpenPopup}
      />
    </ModalDetail.Overlay>
  );
}
