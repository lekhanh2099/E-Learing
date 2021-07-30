import React, { useEffect, useState } from "react";
import { Form, Manager } from "../Components";
import ModalDetailUserContainer from "./ModalDetailUser";
import SearchUserContainer from "./SearchUser";
import ListStudentContainer from "./ListStudent";
import ListTeacherContainer from "./ListTeacher";
import { FormControl, InputLabel, Select } from "@material-ui/core";
import ModalDeleteUserContainer from "./ModalDeleteUser";
import ModalUpdateContainer from "./ModalUpdateUser";
import ModalCreateUserContainer from "./ModalCreateUser";
import ListAllUser from "./ListAllUser";
import { useDispatch, useSelector } from "react-redux";
import NotiCourseContainer from "./NotiCourse";
import { GET_GROUP_ID } from "../Redux/constants/UserManager/UserManagerConstants";
import { getUsersAction } from "../Redux/actions/getUsersAction";
import * as ROUTES from "../Constants/routes";
import { getListUsersAction } from "../Redux/actions/getListUsersAction";
const listIdCourse = [
  "GP01",
  "GP02",
  "GP03",
  "GP04",
  "GP05",
  "GP06",
  "GP07",
  "GP08",
  "GP09",
  "GP10",
  "GP11",
  "GP12",
  "GP13",
  "GP14",
  "GP15",
];

export default function UserManagerContainer() {
  // Popup dialog
  const [openPopup, setOpenPopup] = useState(false);
  const [openPopupEdituser, setOpenPopupEdituser] = useState(false);
  const [openPopupCreateUser, setOpenPopupCreateUser] = useState(false);

  // Set value for delete comfirm
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);
  const dispatch = useDispatch();
  const [groupCourse, setGroupCourse] = useState("GP01");
  const handleChangeIdCourse = (event) => {
    setGroupCourse(event.target.value);
  };
  const getListUser = () => {
    const action = getUsersAction(groupCourse);
    dispatch(action);
    const _action = getListUsersAction(groupCourse);
    dispatch(_action);
  };
  useEffect(() => {
    getListUser();
    dispatch({
      type: GET_GROUP_ID,
      groupId: groupCourse,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupCourse]);
  const { dataNotification } = useSelector((state) => state.coursesReducer);

  return (
    <Manager.Container>
      {dataNotification.status ? <NotiCourseContainer /> : null}
      <Manager.Header>Quản lý người dùng</Manager.Header>
      <Form.FormBox className="choose">
        <Form.Input style={{ width: "500px" }}>
          <FormControl variant="filled" className="selected-input">
            <InputLabel>
              Chọn nhóm khoá học bạn muốn xem (Mặc định sẽ là GP01)
            </InputLabel>
            <Select onChange={handleChangeIdCourse}>
              {listIdCourse.map((id, index) => {
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
      <Manager.Wrapper display="flex" align="center" justify="space-between">
        <Manager.ButtonHeader
          to={`${ROUTES.ADMIN}/${ROUTES.USERMANAGER}/${ROUTES.CREATEUSER}`}
        >
          Thêm người dùng
        </Manager.ButtonHeader>
        <SearchUserContainer />
      </Manager.Wrapper>
      <ListAllUser />
      <Manager.Title> Danh sách học viên hiện tại</Manager.Title>
      <ListStudentContainer />
      <Manager.Title> Danh sách giáo viên hiện tại</Manager.Title>
      <ListTeacherContainer />
      <ModalCreateUserContainer
        openPopupCreateUser={openPopupCreateUser}
        setOpenPopupCreateUser={setOpenPopupCreateUser}
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
    </Manager.Container>
  );
}
