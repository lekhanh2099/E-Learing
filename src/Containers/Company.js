import { Container } from "@material-ui/core";
import React from "react";
import { Company } from "../Components";
import companiesImg from "../Assets/Images/companies.jpg";

export default function CompanyContainer() {
  return (
    <Company.Overlay>
      <Container fixed>
        <Company.Title>Hệ thống các doanh nghiệp đối tác</Company.Title>
        <Company.SubTitle>
          100% học viên sau khi hoàn thành dự án đều có công việc như mong đợi
          tại các tập đoàn phần mềm, các công ty phần mềm đa quốc gia, các công
          ty khởi nghiệp....với thu nhập từ 90~140 triệu/1 năm.
        </Company.SubTitle>
        <Company.ImageLink to="/"></Company.ImageLink>
        <Company.Image src={companiesImg} alt="Company" />
      </Container>
    </Company.Overlay>
  );
}
