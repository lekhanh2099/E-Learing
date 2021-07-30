import React from "react";
import { NavLink } from "react-router-dom";
import { SideBarAdmin } from "../Components";
import * as ROUTES from "../Constants/routes";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import ArtTrackIcon from "@material-ui/icons/ArtTrack";
import HomeIcon from "@material-ui/icons/Home";

export default function SideBarAdminContainer() {
  return (
    <SideBarAdmin>
      <SideBarAdmin.Wrapper>
        <SideBarAdmin.Menu>
          <SideBarAdmin.Title>Quản lý trang </SideBarAdmin.Title>
          <SideBarAdmin.List>
            <NavLink to={ROUTES.ADMIN}>
              <SideBarAdmin.Item>
                <HomeIcon /> Trang chủ
              </SideBarAdmin.Item>
            </NavLink>
          </SideBarAdmin.List>
          <SideBarAdmin.List>
            <NavLink to={`${ROUTES.ADMIN}/${ROUTES.USERMANAGER}`}>
              <SideBarAdmin.Item>
                {" "}
                <GroupAddIcon /> Quản lý người dùng
              </SideBarAdmin.Item>
            </NavLink>
          </SideBarAdmin.List>
          <SideBarAdmin.List>
            <NavLink to={`${ROUTES.ADMIN}/${ROUTES.COURSESMANAGER}`}>
              <SideBarAdmin.Item>
                {" "}
                <ArtTrackIcon /> Quản lý khóa học
              </SideBarAdmin.Item>
            </NavLink>
          </SideBarAdmin.List>
        </SideBarAdmin.Menu>
      </SideBarAdmin.Wrapper>
    </SideBarAdmin>
  );
}
