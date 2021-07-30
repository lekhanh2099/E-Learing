import React from "react";
import { AboutGrid } from "../Components";

export default function AboutGridContainer() {
  return (
    <AboutGrid>
      <AboutGrid.GroupContent>
        <AboutGrid.Wrap>
          <AboutGrid.Title>Tương lai công việc rộng mở</AboutGrid.Title>
          <AboutGrid.Description>
            Udemy giúp các tổ chức chuẩn bị cho tương lai không ngừng phát triển
            của công việc. Bộ sưu tập các khóa học kỹ thuật và kinh doanh được
            đánh giá cao nhất của chúng tôi mang đến cho các công ty, chính phủ
            và tổ chức phi lợi nhuận sức mạnh để phát triển kiến ​​thức chuyên
            môn nội bộ và đáp ứng nhu cầu học tập và phát triển của nhân viên.
          </AboutGrid.Description>
          <AboutGrid.Button to="/">Learn more</AboutGrid.Button>
        </AboutGrid.Wrap>
      </AboutGrid.GroupContent>
      <AboutGrid.Image src="../images/About/img1.jpg"></AboutGrid.Image>
      <AboutGrid.Image src="../images/About/img2.jpg"></AboutGrid.Image>
      <AboutGrid.GroupImage>
        <AboutGrid.Content>
          <AboutGrid.Title>Tham gia cùng chúng tôi</AboutGrid.Title>
          <AboutGrid.Description>
            Nhân viên của Udemy sống theo giá trị của chúng tôi mỗi ngày với tư
            cách là người học và người dạy. Văn hóa của chúng tôi rất đa dạng,
            hòa nhập và cam kết phát triển cá nhân và nghề nghiệp. Chúng tôi
            không ngại chấp nhận một thử thách mới và chúng tôi thích tham gia
            các khóa học của Udemy!
          </AboutGrid.Description>
        </AboutGrid.Content>
      </AboutGrid.GroupImage>
    </AboutGrid>
  );
}
