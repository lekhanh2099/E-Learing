import React from "react";
import { NavAdmin } from "../Components";
import * as ROUTES from "../Constants/routes";
import { Header } from "../Components";
import { useDispatch, useSelector } from "react-redux";
import { Avatar } from "@material-ui/core";
import { AVATAR_FAKER } from "../fakeDataUser";
import { LOG_OUT_ACTION } from "../Redux/constants/Login/ConstantsLogin";


export default function NavAdminContainer() {

    const dispatch = useDispatch();



    const { tenDangNhap } = useSelector((state) => state.LoginReducer);


  return (
    <NavAdmin>
      <NavAdmin.Group>
        <NavAdmin.Logo to={ROUTES.HOME} />
        {tenDangNhap ? (
          <Header.Group display="flex" justify="center" align="center">
            <Header.UserLogined to={ROUTES.PROFILE}>
              <Avatar src={AVATAR_FAKER} />
            </Header.UserLogined>
            <Header.NameUser>
              {tenDangNhap}

              <Header.LogOut
                onClick={() => {
                  dispatch({
                    type: LOG_OUT_ACTION,
                    tenDangNhap: tenDangNhap,
                  });
                }}
              >
                Đăng xuất
              </Header.LogOut>
            </Header.NameUser>
          </Header.Group>
        ) : null }
      </NavAdmin.Group>
    </NavAdmin>
  );
}
