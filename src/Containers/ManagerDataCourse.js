import React, { memo, useEffect } from "react";
import { Manager } from "../Components";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
import { getAllListCoursesAction } from "../Redux/actionManagerCourse/getAllCoursesAction";
import { useDispatch, useSelector } from "react-redux";
import ModalDeleteCourse from "./ModalDeleteCourse";
import { GET_COURSE_CLICK } from "../Redux/constants/UserManager/UserManagerConstants";
import ModalDetailCrourse from "./ModalDetailCrourse";
import { getInfoCourseAction } from "../Redux/actionManagerCourse/getInfoCourseAction";
import * as ROUTES from "../Constants/routes";
import { NavLink } from "react-router-dom";

function ManagerDataCourseContainer() {
  const dispatch = useDispatch();

  const { listCourses, groupId } = useSelector(
    (state) => state.CoursesManagerReducer
  );
  useEffect(() => {
    getAllListCourses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getAllListCourses = () => {
    const action = getAllListCoursesAction(groupId);
    dispatch(action);
  };

  const columns = [
    {
      field: "id",
      headerName: "STT",
      width: 100,
      renderCell: (params) => {
        return (
          <div className="MuiDataGrid-cell--textCenter">{params.row.id}</div>
        );
      },
    },
    {
      field: "maKhoaHoc",
      headerName: "Mã khóa học",
      width: 260,
    },
    {
      field: "tenKhoaHoc",
      headerName: "Tên khóa học",
      width: 350,
    },
    {
      field: "nguoiTao",
      headerName: "Người tạo",
      width: 200,
      renderCell: (params) => {
        return (
          <div className=" MuiDataGrid-cell--textLeft">
            {params.row.nguoiTao.hoTen}
          </div>
        );
      },
    },
    {
      field: "hinhAnh",
      headerName: "Thumbnail",
      width: 300,
      renderCell: (params) => {
        return (
          <Manager.ImageCell>
            <Manager.ImageThumbnail
              src={params.row.hinhAnh}
              alt="Đây là bí danh"
            />
          </Manager.ImageCell>
        );
      },
    },

    {
      field: "thaoTac",
      headerName: "Thao tác",
      width: 350,
      renderCell: (params) => {
        return (
          <Manager.ButtonGroup>
            <Button className="detail">
              <NavLink
                to={`${ROUTES.ADMIN}/${ROUTES.COURSESMANAGER}/${ROUTES.DETAIL_COURSE_MANAGER}`}
                onClick={() => {
                  dispatch({
                    type: GET_COURSE_CLICK,
                    course: params.row,
                  });
                  const data = {
                    maKhoaHoc: params.row.maKhoaHoc,
                  };
                  const action = getInfoCourseAction(data);
                  dispatch(action);
                }}
              >
                Xem chi tiết
              </NavLink>
            </Button>
            <Button className="control">
              <NavLink
                to={`${ROUTES.ADMIN}/${ROUTES.COURSESMANAGER}/${ROUTES.EDITCOURSES}`}
                onClick={() => {
                  dispatch({
                    type: GET_COURSE_CLICK,
                    course: params.row,
                  });
                }}
              >
                Điều chỉnh
              </NavLink>
            </Button>
            <Button
              className="delete"
              color="secondary"
              onClick={() => {
                handleClickListItem(params.row);
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

  const [openPopup, setOpenPopup] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);
  const handleClickListItem = (course) => {
    setOpen(true);
    dispatch({
      type: GET_COURSE_CLICK,
      course,
    });
  };
  return (
    <Manager.Box>
      <DataGrid
        disableSelectionOnClick
        rows={listCourses}
        columns={columns}
        pageSize={5}
        headerHeight={70}
        rowHeight={70}
      />
      <ModalDetailCrourse openPopup={openPopup} setOpenPopup={setOpenPopup} />
      <ModalDeleteCourse
        open={open}
        setOpen={setOpen}
        value={value}
        setValue={setValue}
      />
    </Manager.Box>
  );
}

export default memo(ManagerDataCourseContainer);
