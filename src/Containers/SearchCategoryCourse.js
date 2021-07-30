import React, { useEffect, useLayoutEffect, useState } from "react";
import { SearchUser } from "../Components";
import Autocomplete, {
  createFilterOptions,
} from "@material-ui/lab/Autocomplete";
import { TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
  GET_ALL_LIST_ACTION,
  GET_LIST_COURSES_ACTION,
} from "../Redux/constants/Courses/ConstantsCourses";
import { GET_COURSE_CLICK } from "../Redux/constants/UserManager/UserManagerConstants";

const filter = createFilterOptions();

export default function SearchCategoryCourseContainer() {
  const [value, setValue] = useState(null);
  const { listCourses } = useSelector((state) => state.coursesReducer);
  const [listName, setListName] = useState(listCourses);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: GET_LIST_COURSES_ACTION,
    });
    setListName(listCourses);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listCourses]);
  return (
    <SearchUser.Overlay>
      <Autocomplete
        color="primary"
        value={value}
        onChange={(event, newValue) => {
          if (typeof newValue === "string") {
            setValue({
              maKhoaHoc: newValue,
            });
          } else if (newValue && newValue.inputValue) {
            // Create a new value from the user input
            setValue({
              maKhoaHoc: newValue.inputValue,
            });
          } else {
            setValue(newValue);
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);
          // Suggest the creation of a new value
          if (params.inputValue !== "") {
            filtered.push({
              inputValue: params.inputValue,
              maKhoaHoc: `Không có kết quả phù hợp "${params.inputValue}"`,
            });
          }

          return filtered;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        options={listCourses}
        getOptionLabel={(option) => {
          // Value selected with enter, right from the input
          if (typeof option === "string") {
            return option;
          }
          // Add "xxx" option created dynamically
          if (option.inputValue) {
            return option.inputValue;
          }
          // Regular option

          return option.maKhoaHoc;
        }}
        renderOption={(option) => (
          <SearchUser.Name
            onClick={() => {
              // dispatch({
              //   type: GET_COURSE_CLICK,
              //   course: option,
              // });
            }}
          >
            {option.maKhoaHoc}
          </SearchUser.Name>
        )}
        style={{ width: 600 }}
        freeSolo
        renderInput={(params) => (
          <SearchUser.Wrapper display="flex" align="center" justify="center">
            <TextField {...params} label="Tìm và chọn khoá học muốn ghi danh" />
          </SearchUser.Wrapper>
        )}
      />
    </SearchUser.Overlay>
  );
}
