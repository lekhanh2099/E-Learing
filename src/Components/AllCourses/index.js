/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  Container,
  Title,
  SubTitle,
  Wrap,
  Filter,
  GroupFilter,
  GroupListFilter,
  GroupName,
  Price,
  ButtonFilter,
  DropdownFilter,
  OverlayFilter,
  DropdownContent,
  GroupList,
  ListFilter,
  Group,
  Detail,
  GroupCourses,
  Content,
  Image,
  Name,
  Description,
  Text,
  Rating,
  Certificate,
  FilterMobile,
  WrapFilterMobile,
  GroupCheckBox,
  WrapCheckBox,
  Label,
  Input,
  ResultFilterMobile,
  ResultTitle,
} from "./Styles/AllCourses";

export default function AllCourses({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

AllCourses.Title = function AllCoursesTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

AllCourses.SubTitle = function AllCoursesSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

AllCourses.Wrap = function AllCoursesWrap({ children, ...restProps }) {
  return <Wrap {...restProps}>{children}</Wrap>;
};

AllCourses.Filter = function AllCoursesFilter({ children, ...restProps }) {
  return <Filter {...restProps}>{children}</Filter>;
};

AllCourses.GroupFilter = function AllCoursesGroupFilter({
  children,
  ...restProps
}) {
  return <GroupFilter {...restProps}>{children}</GroupFilter>;
};

AllCourses.ButtonFilter = function AllCoursesButtonFilter({
  children,
  ...restProps
}) {
  return <ButtonFilter {...restProps}>{children}</ButtonFilter>;
};

AllCourses.DropdownFilter = function AllCoursesDropdownFilter({
  children,
  ...restProps
}) {
  return <DropdownFilter {...restProps}>{children}</DropdownFilter>;
};

AllCourses.DropdownContent = function AllCoursesDropdownContent({
  children,
  ...restProps
}) {
  return (
    <DropdownContent>
      <ul>
        <li>
          <a href="#">Mới nhất</a>
        </li>
        <li>
          <a href="#">Phổ biến nhất</a>
        </li>
        <li>
          <a href="#">Xếp hạng cao nhất</a>
        </li>
      </ul>
    </DropdownContent>
  );
};

AllCourses.GroupList = function AllCoursesGroupList({
  children,
  ...restProps
}) {
  return <GroupList {...restProps}>{children}</GroupList>;
};

AllCourses.ListFilter = function AllCoursesListFilter({
  children,
  ...restProps
}) {
  return <ListFilter {...restProps}>{children}</ListFilter>;
};

AllCourses.Group = function AllCoursesGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

AllCourses.Detail = function AllCoursesDetail({ children, ...restProps }) {
  return <Detail {...restProps}>{children}</Detail>;
};

AllCourses.GroupCourses = function AllCoursesGroupCourses({
  children,
  ...restProps
}) {
  return <GroupCourses {...restProps}>{children}</GroupCourses>;
};

AllCourses.Content = function AllCoursesContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};

AllCourses.Image = function AllCoursesImage({ to, children, ...restProps }) {
  return (
    <Image to={to} {...restProps}>
      {children}
    </Image>
  );
};

AllCourses.GroupName = function AllCoursesGroupName({
  children,
  ...restProps
}) {
  return <GroupName {...restProps}>{children}</GroupName>;
};

AllCourses.Name = function AllCoursesName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>;
};

AllCourses.Price = function AllCoursesPrice({ children, ...restProps }) {
  return <Price {...restProps}>{children}</Price>;
};

AllCourses.Description = function AllCoursesDescription({
  children,
  ...restProps
}) {
  return <Description {...restProps}>{children}</Description>;
};

AllCourses.Text = function AllCoursesText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

AllCourses.Rating = function AllCoursesRating({ children, ...restProps }) {
  return <Rating {...restProps}>{children}</Rating>;
};

AllCourses.Certificate = function AllCoursesCertificate({
  children,
  ...restProps
}) {
  return <Certificate {...restProps}>{children}</Certificate>;
};

AllCourses.OverlayFilter = function AllCoursesOverlayFilter({
  children,
  ...restProps
}) {
  return <OverlayFilter {...restProps}>{children}</OverlayFilter>;
};

AllCourses.FilterMobile = function AllCoursesFilterMobile({
  children,
  ...restProps
}) {
  return <FilterMobile {...restProps}>{children}</FilterMobile>;
};

AllCourses.WrapFilterMobile = function AllCoursesWrapFilterMobile({
  children,
  ...restProps
}) {
  return <WrapFilterMobile {...restProps}>{children}</WrapFilterMobile>;
};

AllCourses.GroupCheckBox = function AllCoursesGroupCheckBox({
  children,
  ...restProps
}) {
  return <GroupCheckBox {...restProps}>{children}</GroupCheckBox>;
};

AllCourses.WrapCheckBox = function AllCoursesWrapCheckBox({
  children,
  ...restProps
}) {
  return <WrapCheckBox {...restProps}>{children}</WrapCheckBox>;
};

AllCourses.Label = function AllCoursesLabel({ children, ...restProps }) {
  return <Label {...restProps}>{children}</Label>;
};

AllCourses.Input = function AllCoursesInput({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>;
};

AllCourses.GroupListFilter = function AllCoursesGroupListFilter({
  children,
  ...restProps
}) {
  return <GroupListFilter {...restProps}>{children}</GroupListFilter>;
};

AllCourses.ResultFilterMobile = function AllCoursesResultFilterMobile({
  children,
  ...restProps
}) {
  return <ResultFilterMobile {...restProps}>{children}</ResultFilterMobile>;
};

AllCourses.ResultTitle = function AllCoursesResultTitle({
  children,
  ...restProps
}) {
  return <ResultTitle {...restProps}>{children}</ResultTitle>;
};
