import React, { useEffect, useState } from "react";
import { SearchUser } from "../Components";
import Autocomplete, {
  createFilterOptions,
} from "@material-ui/lab/Autocomplete";
import { TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { GET_USER_CLICK } from "../Redux/constants/UserManager/UserManagerConstants";

const filter = createFilterOptions();

export default function SearchUserContainer() {
  const dispatch = useDispatch();

  const [value, setValue] = useState(null);
  const { listNameUser, groupId } = useSelector(
    (state) => state.UserManagerReducer
  );

  const [id, setId] = useState(groupId);

  useEffect(() => {
    setId(groupId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupId]);

  return (
    <SearchUser.Overlay>
      <Autocomplete
        color="primary"
        value={value}
        onChange={(event, newValue) => {
          if (typeof newValue === "string") {
            setValue({
              taiKhoan: newValue,
            });
          } else if (newValue && newValue.inputValue) {
            // Create a new value from the user input
            setValue({
              taiKhoan: newValue.inputValue,
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
              taiKhoan: `Không có kết quả phù hợp "${params.inputValue}"`,
            });
          }

          return filtered;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        options={listNameUser}
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

          return option.taiKhoan;
        }}
        renderOption={(option) => (
          <SearchUser.Name
            onClick={() => {
              dispatch({
                type: GET_USER_CLICK,
                user: option,
              });
            }}
          >
            {option.taiKhoan}
          </SearchUser.Name>
        )}
        style={{ width: 500 }}
        freeSolo
        renderInput={(params) => (
          <SearchUser.Wrapper display="flex" align="center" justify="center">
            <TextField
              variant="outlined"
              {...params}
              label={"Tìm kiếm tên người dùng theo nhóm " + id}
            />
          </SearchUser.Wrapper>
        )}
      />
    </SearchUser.Overlay>
  );
}
