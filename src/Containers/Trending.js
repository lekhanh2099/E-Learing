import { Container, Grid } from "@material-ui/core";
import React from "react";
import { Trending } from "../Components";

const trending = [
  {
    id: 1,
    name: "Toàn bộ Khóa học Phát triển Web Front-End!",
    desc: "Bắt đầu với tư cách là nhà phát triển web Front-end bằng HTML, CSS, JavaScript, và Tailwindcss!",
    img: "./images/Trending/front-end.jpg",
    student: Math.floor(Math.random() * 9999),
    teacher: "Huỳnh Tất Phát",
  },
  {
    id: 2,
    name: "NestJS Zero to Hero - Phát triển Back-end TypeScript hiện đại",
    desc: "Phát triển và triển khai các ứng dụng Back-end của doanh nghiệp theo các phương pháp hay nhất sử dụng Node.js và TypeScript",
    img: "./images/Trending/back-end.jpg",
    student: Math.floor(Math.random() * 9999),
    teacher: "Nguyễn Văn Linh",
  },
  {
    id: 3,
    name: "Trí tuệ nhân tạo A-Z ™: Học cách xây dựng trí thông minh nhân tạo",
    desc: "Kết hợp sức mạnh của Khoa học dữ liệu, Máy học và Học sâu để tạo ra AI mạnh mẽ cho các ứng dụng trong Thế giới thực!",
    img: "./images/Trending/machine-learning.jpg",
    student: Math.floor(Math.random() * 9999),
    teacher: "Trần Xuân Soạn",
  },
  {
    id: 4,
    name: "Hadoop thực hành tối ưu: Xử lý dữ liệu lớn của bạn!",
    desc: "Hướng dẫn Hadoop với MapReduce, HDFS, Spark, Flink, Hive, HBase, MongoDB, Cassandra, Kafka + hơn thế nữa! Hơn 25 công nghệ.",
    img: "./images/Trending/big-data.jpg",
    student: Math.floor(Math.random() * 9999),
    teacher: "Nguyễn Thị Thập",
  },
];

export default function TrendingContainer() {
  const renderTrending = () => {
    return trending.map((courses, index) => {
      return (
        <Grid item lg={6} md={6} sm={12} key={index}>
          <Trending.Card>
            <Trending.Name>{courses.name}</Trending.Name>
            <Trending.SubName>{courses.desc}</Trending.SubName>
            <Trending.Student>
              Đã đăng kí:
              <span>
                {courses.student} <span className="material-icons">school</span>
              </span>
            </Trending.Student>
            <Trending.Student>
              Giáo viên:
              <span>{courses.teacher}</span>
            </Trending.Student>
            <Trending.ButtonLink to="/">
              Xem chi tiết
              <span className="material-icons">chevron_right</span>
            </Trending.ButtonLink>
          </Trending.Card>
        </Grid>
      );
    });
  };

  return (
    <Trending.Overlay>
      <Container fixed>
        <Trending.Title>
          Các môn học được học viên đăng kí nhiều nhất
        </Trending.Title>
        <Trending.SubTitle>
          Bên cạnh các môn học làm web từ Zero đến Full-Stack còn có các nhóm
          ngành mới phát trển như: AI, Security,... Các nhóm ngành này hứa hẹn
          mức lương hấp dẫn và nhiều cơ hội cho tương lai.
        </Trending.SubTitle>
        <Grid container spacing={2}>
          {renderTrending()}
        </Grid>
      </Container>
    </Trending.Overlay>
  );
}
