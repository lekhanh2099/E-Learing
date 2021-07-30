import React, { useLayoutEffect, useState } from "react";
import { Header, HistorySearch, SearchUser } from "../Components";
import Autocomplete, {
  createFilterOptions,
} from "@material-ui/lab/Autocomplete";
import { TextField, Tooltip } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
  GET_ALL_LIST_ACTION,
  SET_DETAIL,
} from "../Redux/constants/Courses/ConstantsCourses";
import * as ROUTES from "../Constants/routes";
import SearchIcon from "@material-ui/icons/Search";

const filter = createFilterOptions();

export default function SearchHomeContainer() {
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

  const handleGetDetailCourse = (detailCourses) => {
    dispatch({
      type: SET_DETAIL,
      detailCourse: detailCourses,
    });
  };
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
          <HistorySearch.Link
            onClick={() => handleGetDetailCourse(option)}
            to={`${ROUTES.DETAIL}${option.maKhoaHoc}`}
          >
            <HistorySearch.Icon>
              <span className="material-icons">search</span>
            </HistorySearch.Icon>
            {option.tenKhoaHoc}
          </HistorySearch.Link>
        )}
        style={{ width: 600 }}
        freeSolo
        renderInput={(params) => (
          <SearchUser.Wrapper
            className="search-home"
            display="flex"
            align="center"
            justify="center"
          >
            <Header.SearchLink to={ROUTES.SEARCH}>
              <Tooltip
                title={
                  <h1
                    style={{
                      color: "white",
                      padding: "4px",
                      fontSize: "10px",
                      margin: "0",
                    }}
                  >
                    Tìm kiếm
                  </h1>
                }
                arrow
              >
                <SearchIcon className="search-home" />
              </Tooltip>
            </Header.SearchLink>
            <TextField {...params} placeholder="Tìm khoá học" />
          </SearchUser.Wrapper>
        )}
      />
    </SearchUser.Overlay>
  );
}
