import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { HistorySearch } from "../Components";
import * as ROUTES from "../Constants/routes";
import { SET_DETAIL } from "../Redux/constants/Courses/ConstantsCourses";

export default function HistorySearchContainer() {
  const dispatch = useDispatch();
  const { listFound } = useSelector((state) => state.coursesReducer);
  const handleGetDetailCourse = (detailCourses) => {
    dispatch({
      type: SET_DETAIL,
      detailCourse: detailCourses,
    });
  };

  return (
    <HistorySearch.Overlay>
      <HistorySearch.Container>
        <HistorySearch.List>
          <HistorySearch.Item>
            <HistorySearch.Link to={ROUTES.SEARCH}>
              <HistorySearch.Icon>
                <span className="material-icons">schedule</span>
              </HistorySearch.Icon>
              Lịch sử tìm kiếm
            </HistorySearch.Link>
          </HistorySearch.Item>
          {listFound.map((name, index) => {
            return (
              <HistorySearch.Item onClick={() => {}} key={index}>
                <HistorySearch.Link
                  onClick={() => handleGetDetailCourse(name)}
                  to={`${ROUTES.DETAIL}${name.maKhoaHoc}`}
                >
                  <HistorySearch.Icon>
                    <span className="material-icons">search</span>
                  </HistorySearch.Icon>
                  {name.tenKhoaHoc}
                </HistorySearch.Link>
              </HistorySearch.Item>
            );
          })}
        </HistorySearch.List>
      </HistorySearch.Container>
    </HistorySearch.Overlay>
  );
}
