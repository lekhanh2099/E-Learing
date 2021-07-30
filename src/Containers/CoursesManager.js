import React, { useState } from "react";
import { Form, Manager } from "../Components";
import SearchUserContainer from "./SearchUser";
import ManagerDataCourse from "./ManagerDataCourse";
import * as ROUTES from "../Constants/routes";
import { useDispatch, useSelector } from "react-redux";
import NotiCourseContainer from "./NotiCourse";
import { FormControl, InputLabel, Select } from "@material-ui/core";
import { GROUP_ID } from "../groupIdManager";
import { GET_GROUP_ID } from "../Redux/constants/UserManager/UserManagerConstants";
import { getAllListCoursesAction } from "../Redux/actionManagerCourse/getAllCoursesAction";

export default function CoursesManagerContainer() {
  const dispatch = useDispatch();

  const [groupCourse, setGroupCourse] = useState("GP01");
  const handleChangeIdCourse = (event) => {
    setGroupCourse(event.target.value);
  };

  React.useEffect(() => {
    const action = getAllListCoursesAction(groupCourse);
    dispatch(action);
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
      <Manager.Header>Quản lý khoá học</Manager.Header>
      <Form.FormBox className="choose">
        <Form.Input style={{ width: "500px" }}>
          <FormControl variant="filled" className="selected-input">
            <InputLabel>
              Chọn nhóm khoá học bạn muốn xem (Mặc định sẽ là GP01)
            </InputLabel>
            <Select name="maNhom" onChange={handleChangeIdCourse}>
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
      <Manager.Wrapper display="flex" align="center" justify="space-between">
        <Manager.ButtonHeader
          to={`${ROUTES.ADMIN}/${ROUTES.COURSESMANAGER}/${ROUTES.CREATECOURSES}`}
        >
          Tạo khoá học
        </Manager.ButtonHeader>
        <SearchUserContainer />
      </Manager.Wrapper>
      <ManagerDataCourse />
    </Manager.Container>
  );
}
