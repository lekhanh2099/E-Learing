import React from "react";
import { useSelector } from "react-redux";
import { NextPages } from "../Components";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { Container } from "@material-ui/core";
import * as ROUTES from "../Constants/routes";

export default function NextPagesContainer({ id }) {
  const { listCourses } = useSelector((state) => state.coursesReducer);

  return (
    <NextPages>
      <Container fixed>
        {listCourses
          .filter((courses) => {
            return courses.maDanhMuc === id;
          })
          .map((item, index) => {
            return (
              <NextPages.Group key={index}>
                <NextPages.TextContent>
                  <NextPages.Text to={ROUTES.HOME}>Trang chủ</NextPages.Text>
                  <ArrowRightIcon />
                  <NextPages.Link to={ROUTES.HOME}>
                    {item.tenDanhMuc}
                  </NextPages.Link>
                </NextPages.TextContent>
                <NextPages.Title>{item.tenDanhMuc}</NextPages.Title>
              </NextPages.Group>
            );
          })}
      </Container>
    </NextPages>
  );
}
