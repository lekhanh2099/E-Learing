import React, { useState } from "react";
import {useDispatch} from 'react-redux';
import { AllCourses } from "../Components";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import StarIcon from "@material-ui/icons/Star";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FilterListIcon from "@material-ui/icons/FilterList";
import { Container } from "@material-ui/core";
import { SET_DETAIL } from "../Redux/constants/Courses/ConstantsCourses";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function AllCoursesContainer({ coursesOfCategory }) {
  const classes = useStyles();

  const dispatch = useDispatch()

  //DropdowFilter
  const [open, setOpen] = useState(false);

  //Filter
  const [checked, setChecked] = useState(false);

  //CheckBox
  const [checkRank, setCheckRank] = useState(false);
  const [checkDate, setCheckDate] = useState(false);
  const [checkView, setCheckView] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  const handleGetDetailCourse = (detailCourses) => {
    dispatch({
      type: SET_DETAIL,
      detailCourse: detailCourses,
    });
  };

  const renderAllCourses = () => {
    return coursesOfCategory.map((item, index) => {
      return (
        <AllCourses.GroupCourses key={index} >
          <AllCourses.Image 
            to = {`/detail/${item.maKhoaHoc}`}
            onClick={() => handleGetDetailCourse(item)}
          >
            <img src={item.hinhAnh} alt="Courses1" />
          </AllCourses.Image>
          <AllCourses.Content>
            <AllCourses.GroupName>
              <AllCourses.Name>{item.tenKhoaHoc}</AllCourses.Name>
              <AllCourses.Price>95.59$</AllCourses.Price>
            </AllCourses.GroupName>
            <AllCourses.Description>{item.moTa}</AllCourses.Description>
            <AllCourses.Text>Giảng viên: {item.nguoiTao.hoTen}</AllCourses.Text>
            <AllCourses.Rating>
              4,8 <StarHalfIcon /> <StarIcon /> <StarIcon /> <StarIcon />{" "}
              <StarIcon />
            </AllCourses.Rating>
            <AllCourses.Text>Ngày tạo: {item.ngayTao}</AllCourses.Text>
            <AllCourses.Certificate>Best Seller</AllCourses.Certificate>
          </AllCourses.Content>
        </AllCourses.GroupCourses>
      );
    });
  };

  return (
    <AllCourses>
      <Container fixed>
        <AllCourses.Title>Tất cả khóa học</AllCourses.Title>
        <AllCourses.SubTitle>
          Các giảng viên Python trên Udemy chuyên về mọi thứ, từ phát triển phần
          mềm đến phân tích dữ liệu và được biết đến với cách giảng dạy thân
          thiện, hiệu quả cho sinh viên ở mọi cấp độ.
        </AllCourses.SubTitle>
        <div className={classes.root}>
          <Grid container>
            <Grid item xs={12} lg={12}>
              <AllCourses.GroupFilter>
                <AllCourses.ButtonFilter
                  onClick={() => {
                    setChecked(!checked);
                  }}
                >
                  <FilterListIcon />
                  Lọc
                </AllCourses.ButtonFilter>
                <AllCourses.DropdownFilter
                  onClick={() => {
                    setOpen(!open);
                  }}
                >
                  Phổ biến{" "}
                  <i
                    className={
                      open ? "fas fa-angle-down active" : "fas fa-angle-down"
                    }
                  ></i>
                  {open && <AllCourses.DropdownContent />}
                </AllCourses.DropdownFilter>
              </AllCourses.GroupFilter>
            </Grid>
            <Grid item xs={12} lg={checked ? "0" : "3"}>
              <AllCourses.GroupList className={checked ? "active" : ""}>
                <AllCourses.Wrap>
                  <AllCourses.GroupListFilter
                    onClick={() => {
                      setCheckRank(!checkRank);
                    }}
                  >
                    <AllCourses.ListFilter>Xếp hạng</AllCourses.ListFilter>
                    <i
                      className={
                        checkRank
                          ? "fas fa-angle-down active"
                          : "fas fa-angle-down"
                      }
                    ></i>
                  </AllCourses.GroupListFilter>
                  <AllCourses.GroupCheckBox
                    className={checkRank ? "active" : ""}
                  >
                    <AllCourses.WrapCheckBox>
                      <AllCourses.Input type="checkbox"></AllCourses.Input>
                      <AllCourses.Label>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i> 5 <span>(124)</span>
                      </AllCourses.Label>
                    </AllCourses.WrapCheckBox>
                    <AllCourses.WrapCheckBox>
                      <AllCourses.Input type="checkbox"></AllCourses.Input>
                      <AllCourses.Label>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i> 4 <span>(372)</span>
                      </AllCourses.Label>
                    </AllCourses.WrapCheckBox>
                    <AllCourses.WrapCheckBox>
                      <AllCourses.Input type="checkbox"></AllCourses.Input>
                      <AllCourses.Label>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i> 3 <span>(123)</span>
                      </AllCourses.Label>
                    </AllCourses.WrapCheckBox>
                  </AllCourses.GroupCheckBox>
                </AllCourses.Wrap>
                <AllCourses.Wrap>
                  <AllCourses.GroupListFilter
                    onClick={() => {
                      setCheckDate(!checkDate);
                    }}
                  >
                    <AllCourses.ListFilter>
                      Số lượng học viên
                    </AllCourses.ListFilter>
                    <i
                      className={
                        checkDate
                          ? "fas fa-angle-down active"
                          : "fas fa-angle-down"
                      }
                    ></i>
                  </AllCourses.GroupListFilter>
                  <AllCourses.GroupCheckBox
                    className={checkDate ? "active" : ""}
                  >
                    <AllCourses.WrapCheckBox>
                      <AllCourses.Input type="checkbox"></AllCourses.Input>
                      <AllCourses.Label>
                        2 - 3 Người <span>(125)</span>
                      </AllCourses.Label>
                    </AllCourses.WrapCheckBox>
                    <AllCourses.WrapCheckBox>
                      <AllCourses.Input type="checkbox"></AllCourses.Input>
                      <AllCourses.Label>
                        4 - 5 Người <span>(683)</span>
                      </AllCourses.Label>
                    </AllCourses.WrapCheckBox>
                    <AllCourses.WrapCheckBox>
                      <AllCourses.Input type="checkbox"></AllCourses.Input>
                      <AllCourses.Label>
                        6 - 7 Người <span>(356)</span>
                      </AllCourses.Label>
                    </AllCourses.WrapCheckBox>
                  </AllCourses.GroupCheckBox>
                </AllCourses.Wrap>
                <AllCourses.Wrap>
                  <AllCourses.GroupListFilter
                    onClick={() => {
                      setCheckView(!checkView);
                    }}
                  >
                    <AllCourses.ListFilter>Lượt xem</AllCourses.ListFilter>
                    <i
                      className={
                        checkView
                          ? "fas fa-angle-down active"
                          : "fas fa-angle-down"
                      }
                    ></i>
                  </AllCourses.GroupListFilter>
                  <AllCourses.GroupCheckBox
                    className={checkView ? "active" : ""}
                  >
                    <AllCourses.WrapCheckBox>
                      <AllCourses.Input type="checkbox"></AllCourses.Input>
                      <AllCourses.Label>
                        1 - 2 View <span>(164)</span>
                      </AllCourses.Label>
                    </AllCourses.WrapCheckBox>
                    <AllCourses.WrapCheckBox>
                      <AllCourses.Input type="checkbox"></AllCourses.Input>
                      <AllCourses.Label>
                        3 - 4 View <span>(895)</span>
                      </AllCourses.Label>
                    </AllCourses.WrapCheckBox>
                    <AllCourses.WrapCheckBox>
                      <AllCourses.Input type="checkbox"></AllCourses.Input>
                      <AllCourses.Label>
                        4 - 5 View <span>(92)</span>
                      </AllCourses.Label>
                    </AllCourses.WrapCheckBox>
                  </AllCourses.GroupCheckBox>
                </AllCourses.Wrap>
              </AllCourses.GroupList>
            </Grid>
            <Grid item xs={12} lg={checked ? "12" : "9"}>
              {renderAllCourses()}
            </Grid>
          </Grid>
        </div>
      </Container>
      <AllCourses.OverlayFilter
        className={checked ? "active" : ""}
        onClick={() => {
          handleChange();
        }}
      ></AllCourses.OverlayFilter>
      <AllCourses.FilterMobile className={checked ? "active" : ""}>
        <AllCourses.ResultFilterMobile>
          <AllCourses.ResultTitle>842 kết quả</AllCourses.ResultTitle>
          <i
            class="fas fa-times"
            onClick={() => {
              handleChange();
            }}
          ></i>
        </AllCourses.ResultFilterMobile>
        <AllCourses.WrapFilterMobile>
          <AllCourses.GroupListFilter
            onClick={() => {
              setCheckRank(!checkRank);
            }}
          >
            <AllCourses.ListFilter>Xếp hạng</AllCourses.ListFilter>
            <i
              className={
                checkRank ? "fas fa-angle-down active" : "fas fa-angle-down"
              }
            ></i>
          </AllCourses.GroupListFilter>
          <AllCourses.GroupCheckBox className={checkRank ? "active" : ""}>
            <AllCourses.WrapCheckBox>
              <AllCourses.Input type="checkbox"></AllCourses.Input>
              <AllCourses.Label>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i> 5 <span>(124)</span>
              </AllCourses.Label>
            </AllCourses.WrapCheckBox>
            <AllCourses.WrapCheckBox>
              <AllCourses.Input type="checkbox"></AllCourses.Input>
              <AllCourses.Label>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i> 4 <span>(372)</span>
              </AllCourses.Label>
            </AllCourses.WrapCheckBox>
            <AllCourses.WrapCheckBox>
              <AllCourses.Input type="checkbox"></AllCourses.Input>
              <AllCourses.Label>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i> 3 <span>(123)</span>
              </AllCourses.Label>
            </AllCourses.WrapCheckBox>
          </AllCourses.GroupCheckBox>
        </AllCourses.WrapFilterMobile>
        <AllCourses.WrapFilterMobile>
          <AllCourses.GroupListFilter
            onClick={() => {
              setCheckDate(!checkDate);
            }}
          >
            <AllCourses.ListFilter>Số lượng học viên</AllCourses.ListFilter>
            <i
              className={
                checkDate ? "fas fa-angle-down active" : "fas fa-angle-down"
              }
            ></i>
          </AllCourses.GroupListFilter>
          <AllCourses.GroupCheckBox className={checkDate ? "active" : ""}>
            <AllCourses.WrapCheckBox>
              <AllCourses.Input type="checkbox"></AllCourses.Input>
              <AllCourses.Label>
                2 - 3 Người <span>(125)</span>
              </AllCourses.Label>
            </AllCourses.WrapCheckBox>
            <AllCourses.WrapCheckBox>
              <AllCourses.Input type="checkbox"></AllCourses.Input>
              <AllCourses.Label>
                4 - 5 Người <span>(683)</span>
              </AllCourses.Label>
            </AllCourses.WrapCheckBox>
            <AllCourses.WrapCheckBox>
              <AllCourses.Input type="checkbox"></AllCourses.Input>
              <AllCourses.Label>
                5 - 6 Người <span>(356)</span>
              </AllCourses.Label>
            </AllCourses.WrapCheckBox>
          </AllCourses.GroupCheckBox>
        </AllCourses.WrapFilterMobile>
        <AllCourses.WrapFilterMobile>
          <AllCourses.GroupListFilter
            onClick={() => {
              setCheckView(!checkView);
            }}
          >
            <AllCourses.ListFilter>Lượt xem</AllCourses.ListFilter>
            <i
              className={
                checkView ? "fas fa-angle-down active" : "fas fa-angle-down"
              }
            ></i>
          </AllCourses.GroupListFilter>
          <AllCourses.GroupCheckBox className={checkView ? "active" : ""}>
            <AllCourses.WrapCheckBox>
              <AllCourses.Input type="checkbox"></AllCourses.Input>
              <AllCourses.Label>
                1 - 2 View <span>(164)</span>
              </AllCourses.Label>
            </AllCourses.WrapCheckBox>
            <AllCourses.WrapCheckBox>
              <AllCourses.Input type="checkbox"></AllCourses.Input>
              <AllCourses.Label>
                1 - 2 View <span>(895)</span>
              </AllCourses.Label>
            </AllCourses.WrapCheckBox>
            <AllCourses.WrapCheckBox>
              <AllCourses.Input type="checkbox"></AllCourses.Input>
              <AllCourses.Label>
                1 - 2 View <span>(92)</span>
              </AllCourses.Label>
            </AllCourses.WrapCheckBox>
          </AllCourses.GroupCheckBox>
        </AllCourses.WrapFilterMobile>
      </AllCourses.FilterMobile>
    </AllCourses>
  );
}
