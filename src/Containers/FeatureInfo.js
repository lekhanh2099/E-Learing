import React, { useLayoutEffect, useRef, useState } from "react";
import { FeatureInfo } from "../Components";
import { ArrowUpward } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { getUsersAction } from "../Redux/actions/getUsersAction";
import { Container, Grid } from "@material-ui/core";

export default function FeatureInfoContainer() {
  const dispatch = useDispatch();

  const getListUser = () => {
    const action = getUsersAction();
    dispatch(action);
  };
  const { listStudent } = useSelector((state) => state.UserManagerReducer);
  const [arr, setArr] = useState(listStudent);
  const firstUpdate = useRef(true);
  useLayoutEffect(() => {
    if (firstUpdate.current) {
      getListUser();
      firstUpdate.current = false;
      return;
    }
    setArr(listStudent);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listStudent]);
  return (
    <Container fixed>
      <FeatureInfo.Header>Thống kê doanh thu</FeatureInfo.Header>
      <Grid container spacing={2}>
        <Grid item lg={4} md={4}>
          <FeatureInfo.Item>
            <FeatureInfo.Title>Số học sinh hiện tại</FeatureInfo.Title>
            <FeatureInfo.MoneyContainer>
              <FeatureInfo.Money>{arr.length + 9000}</FeatureInfo.Money>
              <FeatureInfo.MoneyRate>
                +11.4% <ArrowUpward />
              </FeatureInfo.MoneyRate>
            </FeatureInfo.MoneyContainer>
            <FeatureInfo.Sub>So với tháng trước</FeatureInfo.Sub>
          </FeatureInfo.Item>
        </Grid>
        <Grid item lg={4} md={4}>
          <FeatureInfo.Item>
            <FeatureInfo.Title>Tổng số danh thu</FeatureInfo.Title>
            <FeatureInfo.MoneyContainer>
              <FeatureInfo.Money>502.123.123 VNĐ</FeatureInfo.Money>
              <FeatureInfo.MoneyRate>
                +1.4% <ArrowUpward />
              </FeatureInfo.MoneyRate>
            </FeatureInfo.MoneyContainer>
            <FeatureInfo.Sub>So với tháng trước</FeatureInfo.Sub>
          </FeatureInfo.Item>
        </Grid>
        <Grid item lg={4} md={4}>
          <FeatureInfo.Item>
            <FeatureInfo.Title>Số khoá học bán được</FeatureInfo.Title>
            <FeatureInfo.MoneyContainer>
              <FeatureInfo.Money>402 Khoá</FeatureInfo.Money>
              <FeatureInfo.MoneyRate>
                +2.4$ <ArrowUpward />
              </FeatureInfo.MoneyRate>
            </FeatureInfo.MoneyContainer>
            <FeatureInfo.Sub>So với tháng trước</FeatureInfo.Sub>
          </FeatureInfo.Item>
        </Grid>
      </Grid>
    </Container>
  );
}
