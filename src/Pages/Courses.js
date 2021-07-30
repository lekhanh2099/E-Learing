import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import HeaderContainer from "../Containers/Header";
import NextPagesContainer from "../Containers/NextPage";
import BestSellerContainer from "../Containers/BestSeller";
import AllCoursesContainer from "../Containers/AllCourses";
import { getCourseOfCategoryAction } from "../Redux/actions/coursesOfCategoryAction";

export default function Courses(props) {
  const { coursesOfCategory } = useSelector((state) => state.categoryReducer);

  const dispatch = useDispatch();

  const id = props.match.params.id;

  const value = useRef(null);

  useEffect(() => {
    dispatch(getCourseOfCategoryAction(id));
    return () => (value.current = id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeaderContainer />
      <NextPagesContainer id={id} />
      <AllCoursesContainer coursesOfCategory={coursesOfCategory} />
      <BestSellerContainer />
    </>
  );
}
