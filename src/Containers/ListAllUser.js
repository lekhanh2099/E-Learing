import React, { memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Manager } from "../Components";
import { Button } from "@material-ui/core";
import { getInfoRegisterUserAction } from "../Redux/actions/getInfoRegisterUserAction";
import {
  FIX_USER,
  GET_USER_CLICK,
  GET_USER_DELETE,
} from "../Redux/constants/UserManager/UserManagerConstants";
import { DataGrid } from "@material-ui/data-grid";
import ModalUpdateContainer from "./ModalUpdateUser";
import ModalDetailUserContainer from "./ModalDetailUser";
import ModalDeleteUserContainer from "./ModalDeleteUser";

function ListAllUserContainer() {
  const dispatch = useDispatch();

  const { listUser } = useSelector((state) => state.UserManagerReducer);

  // Popup dialog
  const [openPopup, setOpenPopup] = useState(false);
  const [openPopupEdituser, setOpenPopupEdituser] = useState(false);

  const getListCoursesDataUser = (user) => {
    const action = getInfoRegisterUserAction(user);
    dispatch(action);
  };

  // Set value for delete comfirm
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);

  const handleClickListItem = (user) => {
    setOpen(true);
    dispatch({
      type: GET_USER_DELETE,
      userDelete: user,
    });
  };

  const columns = [
    {
      field: "id",
      headerName: "STT",
      width: 100,
    },
    {
      field: "taiKhoan",
      headerName: "Tài khoản",
      width: 200,
    },
    {
      field: "hoTen",
      headerName: "Họ tên",
      width: 240,
    },
    {
      field: "email",
      headerName: "Email",
      width: 340,
    },
    {
      field: "soDt",
      headerName: "Số điện thoại",
      width: 230,
    },
    {
      field: "thaoTac",
      headerName: "Thao tác",
      width: 350,
      renderCell: (params) => {
        return (
          <Manager.ButtonGroup>
            <Button
              className="detail"
              color="primary"
              onClick={() => {
                setOpenPopup(true);
                getListCoursesDataUser(params.row);
                dispatch({
                  type: GET_USER_CLICK,
                  user: params.row,
                });
              }}
            >
              Xem chi tiết
            </Button>
            <Button
              className="control"
              onClick={() => {
                dispatch({
                  type: FIX_USER,
                  user: params.row,
                });
                setOpenPopupEdituser(true);
              }}
            >
              Điều chỉnh
            </Button>
            <Button
              className="delete"
              color="secondary"
              onClick={() => {
                handleClickListItem(params.row.taiKhoan);
              }}
              aria-haspopup="true"
              aria-controls="id"
            >
              Xoá
            </Button>
          </Manager.ButtonGroup>
        );
      },
    },
  ];
  return (
    <Manager.Box>
      <DataGrid
        disableSelectionOnClick
        rows={listUser}
        columns={columns}
        pageSize={5}
      />
      <ModalUpdateContainer
        setOpenPopupEdituser={setOpenPopupEdituser}
        openPopupEdituser={openPopupEdituser}
      />
      <ModalDetailUserContainer
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      />
      <ModalDeleteUserContainer
        open={open}
        setOpen={setOpen}
        value={value}
        setValue={setValue}
      />
    </Manager.Box>
  );
}

export default memo(ListAllUserContainer);
