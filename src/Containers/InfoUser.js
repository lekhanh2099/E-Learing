import { Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import InfoUser from "../Components/InfoUser";
import { USER_LOGIN } from "../Constants/setting";
import { useDispatch } from "react-redux";

export default function InfoUserContainer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useDispatch();

  let userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
  const [user, setUser] = useState(userLogin);
  useEffect(() => {
    setUser(userLogin);
    return () => setUser(userLogin);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const typing = useRef(null);
  if (typing.current) {
    clearTimeout(typing.current);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    dispatch({
      type: "UPDATE_USER_ACTON",
      user: user,
    });
  };
  return (
    <Container fixed>
      <Grid
        container
        spacing={2}
        alignContent="center"
        alignItems="center"
        justify="space-around"
      >
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <InfoUser.Overlay>
            <InfoUser.FormControl>
              <InfoUser.Label>Họ và tên:</InfoUser.Label>
              <InfoUser.Input
                onChange={handleChange}
                name="hoTen"
                value={user.hoTen}
              />
            </InfoUser.FormControl>

            <InfoUser.FormControl>
              <InfoUser.Label>Email:</InfoUser.Label>
              <InfoUser.Input
                onChange={handleChange}
                name="email"
                value={user.email}
              />
            </InfoUser.FormControl>

            <InfoUser.FormControl>
              <InfoUser.Label>Số điện thoại:</InfoUser.Label>
              <InfoUser.Input
                onChange={handleChange}
                name="soDT"
                value={user.soDT}
              />
            </InfoUser.FormControl>
            <InfoUser.FormControl>
              <InfoUser.Label>Loại người dùng:</InfoUser.Label>
              <InfoUser.Input value="Học Viên" disabled />
            </InfoUser.FormControl>
            <InfoUser.FormControl>
              <InfoUser.Label>Tên đăng nhập:</InfoUser.Label>
              <InfoUser.Input value={user.taiKhoan} disabled />
            </InfoUser.FormControl>
          </InfoUser.Overlay>
          <InfoUser.Button onClick={() => handleSubmit()}>
            Cập nhật thông tin
          </InfoUser.Button>
        </Grid>
      </Grid>
    </Container>
  );
}
