import React, { useLayoutEffect, useState } from "react";
import { SearchUser } from "../Components";
import Autocomplete, {
  createFilterOptions,
} from "@material-ui/lab/Autocomplete";
import { TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { GET_ALL_LIST_ACTION } from "../Redux/constants/Courses/ConstantsCourses";
import { GET_COURSE_CLICK } from "../Redux/constants/UserManager/UserManagerConstants";

const filter = createFilterOptions();

export default function SearchCourseUserContainer() {
  const [value, setValue] = useState(null);
  const { allListCourses } = useSelector((state) => state.coursesReducer);
  const [listName, setListName] = useState(allListCourses);
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    dispatch({
      type: GET_ALL_LIST_ACTION,
    });
    setListName(allListCourses);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <SearchUser.Overlay>
      <Autocomplete
        color="primary"
        value={value}
        onChange={(event, newValue) => {
          if (typeof newValue === "string") {
            setValue({
              tenKhoaHoc: newValue,
            });
          } else if (newValue && newValue.inputValue) {
            // Create a new value from the user input
            setValue({
              tenKhoaHoc: newValue.inputValue,
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
              tenKhoaHoc: `Không có kết quả phù hợp "${params.inputValue}"`,
            });
          }

          return filtered;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        options={listName}
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

          return option.tenKhoaHoc;
        }}
        renderOption={(option) => (
          <SearchUser.Name
            onClick={() => {
              dispatch({
                type: GET_COURSE_CLICK,
                course: option,
              });
            }}
          >
            {option.tenKhoaHoc}
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
